import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home/Home.js';
import Register from '../pages/Register';
import Confirmation from '../services/Confirmation.js';
//import CreateGame from '../pages/CreateGame';
//import JoinGame from '../pages/CreateGame/components/Join';
import { AuthContext } from '../services/context/auth';
import { getStore } from '../utils';

function AuthenticatedRoute ({component: Component, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => getStore('user') ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

class Navigation extends Component {
  render() {
    return (
      <AuthContext.Provider>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/confirm" component={Confirmation} />
            <AuthenticatedRoute exact path='/home' component={Home} />
            <Route path='*' component={Login} />
          </Switch>
        </Router>
      </AuthContext.Provider>
    )
  }
}

export default Navigation;

import React from 'react';
import { connect } from 'react-redux';
import {Navbar, Footer } from './components';
import Navigation from './routing';
import { getStore } from './utils';
import { ActionCreators } from './services/actions/profile';
import './main.css';

class App extends React.Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
    .then(res => this.setState({ data: res.express }))
    .catch(err => console.log(err));
}
  // fetching the GET route from the Express server which matches the GET route from server.js
callBackendAPI = async () => {
  const response = await fetch('/express_backend');
  const body = await response.json();
  const user = getStore('user')
  if (user) {
    this.props.dispatch(ActionCreators.login(user));
  }
  if (response.status !== 200) {
    throw Error(body.message) 
  }
  return body;
};
  
  render() {
    return (
      <div>
        <Navbar />
        <Navigation />
        <Footer />
      </div>
    )
  }

}
export default App;

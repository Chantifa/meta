import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Footer } from './components';
import Navigation from './routing';
import { getStore } from './utils';
import { ActionCreators } from './services/actions/profile';
import './index';

class App extends React.Component {
  componentDidMount() {
    const user = getStore('user')
    if (user) {
      this.props.dispatch(ActionCreators.login(user));
    }
  }


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

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile
  }
}

export default connect(mapStateToProps)(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  UserDetails, Welcome , GameFrame} from '../../components';

export class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="rightPanel">
          <Welcome user={this.props.profile} />
          <UserDetails user={this.props.profile} />
          <GameFrame />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile
  }
}

export default connect(mapStateToProps)(Home);

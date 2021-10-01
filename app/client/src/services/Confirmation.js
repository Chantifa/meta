import React, { Component } from 'react';
import { connect } from 'react-redux';
import Approval from './Approval/Approval.js';

export class Confirmation extends Component {
  render() {
    return (
      <div className="row">
        <Approval user={this.props.profile} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile
  }
}

export default connect(mapStateToProps)(Confirmation);

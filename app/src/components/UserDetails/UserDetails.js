import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export class UserDetails extends Component {
  render() {
    const { firstName, lastName, email,password, score } = this.props.user
    return (
      <div>
        <div>
          I am <span className="bindtext">{firstName} {lastName}</span>
        </div>
        <div>
          My email: <span className="bindtext">{email}</span>
        </div>
        <div>
          My password: <span className="bindtext">{password}</span>
        </div>
          <div>
              My  score: <span className="bindtext">{score}</span>
          </div>
      </div>
    )
  }
}

UserDetails.propTypes = {
  user: PropTypes.object
}

export default UserDetails;

import React, { Component } from 'react';
import { ProfileImage } from './components/ProfileImage/callProfile';
import {RightContent} from "./components/RightContent/RightContent";
import './style.css';

export class Register extends Component {
  render() {
    return (
      <div className="row">
        <div className="loginStyle" style={{backgroundColor:'#867B7B'}}>User Registration</div>
        <ProfileImage />
        <RightContent />
      </div>
    )
  }
}

export default Register;

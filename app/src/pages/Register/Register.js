import React, { Component } from 'react';
import { ProfileImage } from '../../components';
import {RightContent} from "./components/RightContent/RightContent";
import './style.css';

export class Register extends Component {
  render() {
    return (
      <div className="row">
        <ProfileImage />
        <RightContent />
      </div>
    )
  }
}

export default Register;

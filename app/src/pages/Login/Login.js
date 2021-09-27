import React, { Component } from 'react';
import { withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import { ActionCreators } from '../../services/actions/profile';
import { getStore } from '../../utils';
import './style.css';
import {route} from "express/lib/router";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {
        email: 'enter your email!',
        password: 'enter your password!'
      },
      loginStatus: '',
      submitted: false
    }
  }

  inputChange = (event) => {
    const { email, value } = event.target;
    this.setState({ [email]: value });
    this.validationErrorMessage(event);
  }

  validationErrorMessage = (event) => {
    const { email, value } = event.target;
    let errors = this.state.errors;
    switch (email) {
      case 'email':
        errors.email = value.length < 1 ? 'enter your email' : '';
        break;
      case 'password': 
        errors.password = value.length < 1 ? 'enter your password' : '';
        break;
      default:
        break;
    }
    this.setState({ errors });
  }

  validateForm = (errors) => {
    let valid = true;
    console.log(errors)
    Object.entries(errors).forEach(item => {
      console.log(item)
      item && item[1].length > 0 && (valid = false)
    })
    console.log(valid)
    return valid;
  }

  loginForm = async (event) => {
    this.setState({ submitted: true });
    event.preventDefault();
    if (this.validateForm(this.state.errors)) {
      console.info('Valid Form')
      const email = getStore('email')
      if (email) {
        this.props.dispatch(ActionCreators.login(email));
        this.props.history.push('/home')
      } else {
        this.setState({ loginStatus: 'Login Failed! Invalid email and password'})
      }
    } else {
      console.log('Invalid Form')
    }
  }

  render() {
    const { email, password, errors, submitted, loginStatus } = this.state;
    return (
      <div className="pagecenter loginForm">
        <form>
          <div className="row">
            <div className="col-sm-3"/>
            <label htmlFor="username" className="col-sm-2 col-form-label">email:</label>
            <div className="col-sm-3 mb-2">
              <input type="text" value={email} name="email" onChange={(e) => { this.inputChange(e)} } className="form-control" id="email" placeholder="email" />
              { submitted && errors.email.length > 0 &&  <span className='error'>{errors.email}</span>}
            </div>
            <div className="col-sm-4">
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3"/>
            <label htmlFor="password" className="col-sm-2 col-form-label">password:</label>
            <div className="col-sm-3 mb-2" >
              <input type="password" value={password} autoComplete="on" name="password" onChange={(e) => { this.inputChange(e)} } className="form-control" id="password" placeholder="Password" />
              { submitted && errors.password.length > 0 &&  <span className='error'>{errors.password}</span>}
            </div>
            <div className="col-sm-4"/>
          </div>
          <div className="row">
            <div className="col-sm-12 center mt-1">
              { submitted && loginStatus.length > 0 &&  <span className='error'>{loginStatus}</span>}
            </div>
          </div>
          <div className="row" >
            <div className="col-sm-12 center mt-2">
              <a href="../Register/Register.js" role="button" type="submit" className="btn btn-secondary btn-lg" onClick={route.change} style={{backgroundColor:"#D66767", maxBlockSize:"min-content"}}>Register</a>
              <button type="submit" className="btn btn-secondary btn-lg m-5" onClick={this.loginForm} style={{backgroundColor:"#85BE7C", maxBlockSize:"max-content"}}>Login</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile
  }
}

export default connect(mapStateToProps)(withRouter(Login));

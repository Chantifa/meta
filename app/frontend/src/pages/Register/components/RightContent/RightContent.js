import React, { Component } from 'react';
import { withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import { ActionCreators } from '../../../../services/actions/profile';
import './style.css';
import {isValidEmail, isValidPassword} from "../../../../utils";
import { Link } from 'react-router-dom';

export class RightContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      },
      errors: {
        user: {
          firstName: 'Enter First Name',
          lastName:'Enter Last Name',
          email: 'Email is not valid!',
          password: 'please enter a valid password'
        }
      },
      validForm: false,
      submitted: false
    }
  }

  componentDidMount() {
    if(this.props.profile) {
      this.setState({ user: this.props.profile });
      if (this.props.profile.email) {
        this.resetErrorMsg();
      }
      if(this.props.profile.password){
        this.resetErrorMsg()
      }
    }
  }

  validationErrorMessage = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'firstName':
        errors.user.firstName = value.length < 1 ? 'Enter First Name' : '';
        break;
      case 'email':
        errors.user.email = isValidEmail(value) ? '' : 'Email is not valid!';
        break;
      case 'password':
        errors.user.password = isValidPassword(value)?'':'Password is not valid!';
      break;
      default:
        break;
    }
    this.setState({ errors });
  }

  inputChange = (event) => {
    // eslint-disable-next-line
    const { email, value } = event.target;
    const user = this.state.user;
    this.setState({ user });
    this.validationErrorMessage(event);
  }

  checkboxChange = (event) => {
    const { name, checked } = event.target;
    const user = this.state.user;
    user[name] = checked;
    this.setState({ user });
  }

  validateForm = (errors) => {
    let valid = true;
    Object.entries(errors.user).forEach(item => {
      console.log(item)
      item && item[1].length > 0 && (valid = false)
    })
    return valid;
  }

  submitForm = async (event) => {
    this.setState({ submitted: true });
    this.props.dispatch(ActionCreators.formSubmittionStatus(true));
    const user = this.state.user;
    if (user && this.props.profile) {
      user.profileImage = this.props.profile.profileImage;
    }
    event.preventDefault();
    if (this.validateForm(this.state.errors) && this.props.profile && this.props.profile.profileImage) {
      console.info('Valid Form')
      this.props.dispatch(ActionCreators.addProfile(user));
      this.props.history.push('/confirm')
    } else {
      console.log('Invalid Form')
    }
  }

  resetErrorMsg = () => {
    let errors = this.state.errors;
    errors.user.firstName = ''
    errors.user.email = ''
    this.setState({ errors });
  }

  render() {
    const { firstName, lastName, email, password} = this.state.user;
    const { submitted } = this.state;
    return (

      <div className="rightPanel">

        <div className="row">
          <label className="col-sm-3 col-form-label">Name:</label>
          <div className="col-sm-3 mb-5">
            <input type="text" value={firstName} name="firstName" onChange={(e) => { this.inputChange(e)} } className="form-control" placeholder="First Name" />
            { submitted && this.state.errors.user.firstName.length > 0 &&  <span className='error'>{this.state.errors.user.firstName}</span>}
          </div>
          <div className="col-sm-3 mb-2">
            <input type="text" value={lastName} name="lastName" onChange={(e) => { this.inputChange(e)} } className="form-control" placeholder="Last Name" />
          </div>
          <div className="col-sm-4">
          </div>
        </div>

        <div className="row">
          <label htmlFor="email" className="col-sm-3 col-form-label">Email:</label>
          <div className="col-sm-6 mb-5">
            <input type="email" value={email} name="email" onChange={(e) => { this.inputChange(e)} } className="form-control" id="email" placeholder="coronattack@gmail.com" />
            { submitted && this.state.errors.user.email.length > 0 &&  <span className='error'>{this.state.errors.user.email}</span>}
          </div>
          <div className="col-sm-4">
          </div>
        </div>

        <div className="row">
          <label htmlFor="email" className="col-sm-3 col-form-label">Email confirmation:</label>
          <div className="col-sm-6 mb-5">
            <input type="email" value={email} name="email" onChange={(e) => { this.inputChange(e)} } className="form-control" id="email" placeholder="coronattack@gmail.com" />
            { submitted && this.state.errors.user.email.length > 0 &&  <span className='error'>{this.state.errors.user.email}</span>}
          </div>
          <div className="col-sm-4">
          </div>
        </div>
        <div className="row">
          <label htmlFor="password" className="col-sm-3 col-form-label">password:</label>
          <div className="col-sm-6 mb-5">
            <input type="password" value={password} name="password" onChange={(e) => { this.inputChange(e)} } className="form-control" id="password" placeholder="********" />
            { submitted && this.state.errors.user.password > 0 &&  <span className='error'>{this.state.errors.user.password}</span>}
          </div>
          <div className="col-sm-4">
          </div>
        </div>
        <div className="row">
          <div className="col-sm-5 mb-2">
          </div>
          <div className="buttonsContainer">
            <Link to="/">
            <button type="button" className="button" style={{backgroundColor:'#d66767'}}>Back</button>
            </Link>
            <button type="button" className="button" onClick={this.submitForm}>Submit</button>
          </div>
          <div className="col-sm-3"/>
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

export default connect(mapStateToProps)(withRouter(RightContent));

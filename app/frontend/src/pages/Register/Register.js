import React, { Component } from 'react';
//import { withRouter } from "react-router-dom";
//import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ActionCreators } from '../../services/actions/profile';
import { isValidEmail } from "../../utils";
import './style.css';

export class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        email: '',
        password: '',
        retypePassword: ''
      },
      errors: {
        user: {
          name: 'Enter Your Name',
          email: 'Email is not valid!',
        }
      },
      validForm: false,
      submitted: false
    }
  }

  componentDidMount() {
    if (this.props.profile) {
      this.setState({ user: this.props.profile });
      if (this.props.profile.email) {
        this.resetErrorMsg();
      }
    }
  }

  validationErrorMessage = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'name':
        errors.user.name = value.length < 1 ? 'Enter Your Name' : '';
        break;
      case 'email':
        errors.user.email = isValidEmail(value) ? '' : 'Email is not valid!';
        break;
      default:
        break;
    }

    this.setState({ errors });
  }

  inputChange = (event) => {
    // eslint-disable-next-line
    const { name, value } = event.target;
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
    errors.user.name = ''
    errors.user.email = ''
    this.setState({ errors });
  }


  render() {

    const { submitted } = this.state;

    return (
      <div className="row">
        <div className="registerStyle" style={{ backgroundColor: '#867B7B' }}>User Registration</div>

        <div className="rightPanel">

          <div className="row">
            <label className="col-sm-3 col-form-label">Name:</label>
            <div className="col-sm-6 mb-5">
              <input type="text" value={this.state.name} name="name" onChange={(e) => { this.inputChange(e) }} className="form-control" placeholder="Your Name" />
              {submitted && this.state.errors.user.name.length > 0 && <span className='error'>{this.state.errors.user.name}</span>}
            </div>
          </div>

          <div className="row">
            <label htmlFor="email" className="col-sm-3 col-form-label">Email:</label>
            <div className="col-sm-6 mb-5">
              <input type="email" value={this.state.email} name="email" onChange={(e) => { this.inputChange(e) }} className="form-control" id="email" placeholder="coronattack@gmail.com" />
              {submitted && this.state.errors.user.email.length > 0 && <span className='error'>{this.state.errors.user.email}</span>}
            </div>
            <div className="col-sm-4">
            </div>
          </div>

          <div className="row">
            <label htmlFor="password" className="col-sm-3 col-form-label">Password:</label>
            <div className="col-sm-6 mb-5">
              <input type="password" value={this.state.password} name="email" onChange={(e) => { this.inputChange(e) }} className="form-control" id="password" placeholder="Your password" />
            </div>
            <div className="col-sm-4">
            </div>
          </div>

          <div className="row">
            <label htmlFor="retypePassword" className="col-sm-3 col-form-label">Retype Password:</label>
            <div className="col-sm-6 mb-5">
              <input type="password" value={this.state.retypePassword} name="retypePassword" onChange={(e) => { this.inputChange(e) }} className="form-control" id="retypePassword" placeholder="Retype your password" />
            </div>
            <div className="col-sm-4">
            </div>
          </div>

          <div className="row">
            <div className="col-sm-5 mb-2">
            </div>
            <div className="buttonsContainer">
              <Link to="/">
                <button type="button" className="button" style={{ backgroundColor: '#D66767' }}>Back</button>
              </Link>
              <button type="button" className="button" onClick={this.submitForm}>Submit</button>
            </div>
            <div className="col-sm-3"></div>
          </div>
        </div>

      </div>
    )
  }
}

/* const mapStateToProps = (state) => {
  return {
    profile: state.user.profile
  }
} */

export default Register;
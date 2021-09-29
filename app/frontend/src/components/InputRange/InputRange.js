import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './style.css';

export class InputRange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
  }

  inputChange = (e) => {
    this.setState({ value: parseInt(e.target.value) });
    this.props.onChangeInputRange(parseInt(e.target.value));
  }

  render() {
    return (
      <div>
        <span className="input-range__label--min"><span className="input-range__label-container">{this.props.min}</span></span>
        <div>
          <span className="rangevalue" style={{marginLeft: this.state.value * 5 + 'px'}}>{this.state.value}</span>
        </div>
        <span className="input-range__label--max"><span className="input-range__label-container">{this.props.max}</span></span>
      </div>
    )
  }
}

InputRange.propTypes = {
  className: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  onChangeInputRange: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile
  }
}

export default connect(mapStateToProps)(InputRange);

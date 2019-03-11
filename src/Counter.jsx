import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      value: 0
    };

    this._handleChange = this._handleChange.bind(this);
  }

  render() {
    const { title, step } = this.props;

    return (
      <div className="counter">
        <h2>{title}</h2>
        <div className="container">
          <button onClick={this._handleChange(-1 * step)}>-</button>
          <span>{this.state.value}</span>
          <button onClick={this._handleChange(step)}>+</button>
        </div>
      </div>
    );
  }

  _handleChange(delta) {
    return () => {
      this.setState({ value: this.state.value + delta }, () => {
        if (this.props.onChange) {
          this.props.onChange(this.state.value);
        }
      });
    };
  }
}
export default Counter;

Counter.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  step: PropTypes.number
};

Counter.defaultProps = {
  step: 1
};

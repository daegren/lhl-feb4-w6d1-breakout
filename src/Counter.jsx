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
      const { min, max } = this.props;
      const newValue = this.state.value + delta;

      if (newValue >= min && newValue <= max) {
        this.setState({ value: newValue }, () => {
          if (this.props.onChange) {
            this.props.onChange(this.state.value);
          }
        });
      }
    };
  }
}
export default Counter;

Counter.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  step: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number
};

Counter.defaultProps = {
  step: 1,
  min: 0,
  max: 10
};

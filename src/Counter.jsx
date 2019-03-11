import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    super(props);

    this._handleChange = this._handleChange.bind(this);
  }

  render() {
    const { title, step, value } = this.props;

    return (
      <div className="counter">
        <h2>{title}</h2>
        <div className="container">
          <button onClick={this._handleChange(-1 * step)}>-</button>
          <span>{value}</span>
          <button onClick={this._handleChange(step)}>+</button>
        </div>
      </div>
    );
  }

  _handleChange(delta) {
    return () => {
      const { min, max, value, onChange } = this.props;
      const newValue = value + delta;

      if (newValue >= min && newValue <= max) {
        // this.setState({ value: newValue }, () => {
        if (onChange) {
          onChange(newValue);
        }
        // });
      }
    };
  }
}
export default Counter;

Counter.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  step: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number
};

Counter.defaultProps = {
  step: 1,
  min: 0,
  max: 10,
  value: 0
};

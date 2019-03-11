import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      value: 0
    };

    this._handleIncrement = this._handleIncrement.bind(this);
    this._handleDecrement = this._handleDecrement.bind(this);
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this._handleDecrement}>-</button>
        <span>{this.state.value}</span>
        <button onClick={this._handleIncrement}>+</button>
      </div>
    );
  }

  _handleIncrement() {
    this.setState({ value: this.state.value + 1 });
  }

  _handleDecrement() {
    this.setState({ value: this.state.value - 1 });
  }
}
export default Counter;

import React, { Component } from 'react';
import Counter from './Counter.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      numberOfCupsOfCoffee: 0
    };

    this._handleCounterChange = this._handleCounterChange.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Hello React :)</h1>

        <Counter
          title={'Cups of Coffee I\'ve had today'}
          onChange={this._handleCounterChange}
          step={5}
          min={-25}
          max={100}
          value={this.state.numberOfCupsOfCoffee}
        />
      </div>
    );
  }

  _handleCounterChange(counterValue) {
    console.log('New Counter Value:', counterValue);
    this.setState({ numberOfCupsOfCoffee: counterValue });
  }
}
export default App;

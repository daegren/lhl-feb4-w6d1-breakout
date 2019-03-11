import React, { Component } from 'react';
import Counter from './Counter.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello React :)</h1>

        <Counter title={'Cups of Coffee I\'ve had today'} />
      </div>
    );
  }
}
export default App;

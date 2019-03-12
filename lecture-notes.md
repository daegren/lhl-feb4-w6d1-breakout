# Breakout On React

Today we reviewed the basics of React. In our example, we built out a `Counter` component which first handled it's own state and then lifted the state from the component to it's parent.

[Repo](https://github.com/daegren/lhl-feb4-w6d1-breakout)

## Adding the Counter Component

[Commit](https://github.com/daegren/lhl-feb4-w6d1-breakout/commit/3f8577dbc140a7be4a24afa25a6d2ba23740d23f)

First we started by modelling out the HTML for our component and setup some of the initial interactions, such as incrementing and decrementing the value of each counter, saving the resulting value into the state of the component.

## Adding titles to counters

[Commit](https://github.com/daegren/lhl-feb4-w6d1-breakout/commit/86c50e3a3b94ae98b82e147a655eea4b299f06c4)

The next part that we tackled was adding a title to each counter. Since this data would be coming from the component which shows the counter, we need to pass this value through a `prop`. We called this prop `title` and also used the [`prop-types`][prop-types] package to ensure that the props were actually passed to the component.

## Reporting changes up

[Commit](https://github.com/daegren/lhl-feb4-w6d1-breakout/commit/190a707965cd07f5dfef0b53abc5e9e630a41f29)

### Data Down, Actions Up

In React, we pass data down to components through props. By using the fact that functions can also be passed as props, we can pass data back up the chain by using callbacks.

In this step we added another prop to the `Counter` component which allowed us to tell the `App` component when the counter value changes.

But before we were able to move forward with adding this requirement, we had to refactor the code a little bit. We did this by generalizing the `_handleDecrement` and `_handleIncrement` functions into a single `_handleChange` function

```javascript
_handleChange(delta) {
  return () => {
    this.setState({ value: this.state.value + delta }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.value);
      }
    });
  };
}
```

Note that this function returns another function, this is because we need to pass a function to `onClick` and if we were to directly invoke the function we would create an infinite loop of `render() -> _handleIncrement() -> this.setState() -> render()`, so by returning a function, that function will fire when the buttons are clicked.

We also updated the `render()` function to use the new `_handleChange(delta)` function.

```javascript
<button onClick={this._handleChange(-1)}>-</button>
<span>{this.state.value}</span>
<button onClick={this._handleChange(1)}>+</button>
```

## Stepping by using different values

[Commit](https://github.com/daegren/lhl-feb4-w6d1-breakout/commit/80b0bca7a1b94242fff3a2b2b8089d3bedc0342c)

In this step, we further expanded the `Counter` component by allowing the customization of the amount by which the `Counter` steps. We did this by adding a `step` prop to the `Counter` component, then using it in the `_handleChange(delta)` function

```javascript
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
```

## Prevent the counter from going above or below certain values.

[Commit](https://github.com/daegren/lhl-feb4-w6d1-breakout/commit/14b00980333c63b72f57c37d3ad6c75485114afa)

Here we added some other props to handle making sure the counter doesn't go above or below a certain value. We used the `min` and `max` props to handle this.

## Lifting State up

[Commit](https://github.com/daegren/lhl-feb4-w6d1-breakout/commit/08d6b263c93ab5429096296249455c678f1280a6)

Finally, we worked on lifting the state from the `Counter` component to the `App` component. This is similar to how most of the form components work in the React ecosystem.

We did this by removing the state from the `Counter` component and moving it to the `App` component. We then used the `value` and `onChange` props to keep the state in the `App` component in sync with the events from the UI.

[prop-types]: https://www.npmjs.com/package/prop-types

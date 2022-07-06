import React, { Component } from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }
  increment = () => {
    this.setState((prev) => ({
      count: prev.count + 1
    }))
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <div>{count}</div>
        <button onClick={this.increment}>+1</button>
      </div>
    );
  }
}

export default CounterClass;
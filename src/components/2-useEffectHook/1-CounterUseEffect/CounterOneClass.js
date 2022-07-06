import React, { Component } from 'react';

class CounterOneClass extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      name: ''
    }
  }
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`
    console.log('componentDidMount');
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      document.title = `Clicked ${this.state.count} times`
      console.log('Updating document Title');
    }
  }
  componentWillUnmount() {

  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click {this.state.count} times
        </button>
      </div>
    );
  }
}

export default CounterOneClass;
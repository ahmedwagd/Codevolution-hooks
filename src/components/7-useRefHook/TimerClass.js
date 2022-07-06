import React, { Component } from 'react';

class TimerClass extends Component {
  interval
  constructor(props) {
    super(props)

    this.state = {
      timer: 0
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prev => ({ timer: prev.timer + 1 }))
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }


  render() {
    return (
      <div>
        {this.state.timer}
        <button onClick={() => clearInterval(this.interval)}>Clear Timer</button>
      </div>
    );
  }
}

export default TimerClass;
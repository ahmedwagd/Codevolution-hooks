import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (currentState, action) => {
  switch (action) {
    case 'incerment': {
      return currentState + 1;
      break;
    }
    case 'incermentFive': {
      return currentState + 5;
      break;
    }
    case 'decerment': {
      return currentState - 1;
      break;
    }
    case 'decermentFive': {
      return currentState - 5;
      break;
    }
    case 'double': {
      return currentState * 2;
      break;
    }
    case 'treble': {
      return currentState * 3;
      break;
    }
    case 'powertwo': {
      return currentState ** 2;
      break;
    }
    case 'reset': {
      return initialState;
      break;
    }
    default: {
      return currentState
      break;
    }
  }
}


function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState)
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

  return (
    <div>
      <div>
        <div>Count - {count}</div>
        <button onClick={() => dispatch('incerment')}>Increment</button>
        <button onClick={() => dispatch('incermentFive')}>Increment By 5</button>
        <button onClick={() => dispatch('decerment')}>Decrement</button>
        <button onClick={() => dispatch('decermentFive')}>Decrement By 5</button>
        <button onClick={() => dispatch('double')}>Make it Double</button>
        <button onClick={() => dispatch('treble')}>Make it Treble</button>
        <button onClick={() => dispatch('powertwo')}>Power Of 2</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
      </div>
      <div>
        <div>Count - {countTwo}</div>
        <button onClick={() => dispatchTwo('incerment')}>Increment</button>
        <button onClick={() => dispatchTwo('incermentFive')}>Increment By 5</button>
        <button onClick={() => dispatchTwo('decerment')}>Decrement</button>
        <button onClick={() => dispatchTwo('decermentFive')}>Decrement By 5</button>
        <button onClick={() => dispatchTwo('double')}>Make it Double</button>
        <button onClick={() => dispatchTwo('treble')}>Make it Treble</button>
        <button onClick={() => dispatchTwo('powertwo')}>Power Of 2</button>
        <button onClick={() => dispatchTwo('reset')}>Reset</button>
      </div>
    </div>
  )
}

export default CounterThree
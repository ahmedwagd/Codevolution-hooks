import React, { useReducer } from 'react'

const initialState = {
  firstCounter: 0,
  secondCounter: 10
};
const reducer = (currentState, action) => {
  switch (action.type) {
    case 'increment': {
      return { ...currentState, firstCounter: currentState.firstCounter + action.value }
      break;
    }
    case 'decrement': {
      return { ...currentState, firstCounter: currentState.firstCounter - action.value }
      break;
    }
    case 'increment2': {
      return { ...currentState, secondCounter: currentState.secondCounter + action.value }
      break;
    }
    case 'decrement2': {
      return { ...currentState, secondCounter: currentState.secondCounter - action.value }
      break;
    }
    case 'reset': {
      return initialState;
      break;
    }
    case 'reset2': {
      return initialState;
      break;
    }
    default: {
      return currentState
    }
  }
}

function CounterTwo() {
  const [{ firstCounter, secondCounter }, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <div>
        <div>{firstCounter}</div>
        <button onClick={() => dispatch({ type: 'increment', value: 1 })}>increment</button>
        <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>decrement</button>
        <button onClick={() => dispatch({ type: 'increment', value: 5 })}>increment 5</button>
        <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>decrement 5</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
      <div>
        <div>{secondCounter}</div>
        <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>increment</button>
        <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>decrement</button>
        <button onClick={() => dispatch({ type: 'increment2', value: 5 })}>increment 5</button>
        <button onClick={() => dispatch({ type: 'decrement2', value: 5 })}>decrement 5</button>
        <button onClick={() => dispatch({ type: 'reset2' })}>Reset</button>
      </div>
    </div>
  )
}

export default CounterTwo
import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (currentState, action) => {
  switch (action.type) {
    case 'increment': {
      return currentState + action.value
      break;
    }
    case 'decrement': {
      return currentState - action.value
      break;
    }
    default: {
      return currentState
    }
  }
}

function CounterTest() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch({ type: 'increment', value: 5 })}>increment</button>
      <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>decrement</button>
    </div>
  )
}

export default CounterTest
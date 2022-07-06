import React, { useReducer, createContext } from 'react'
import './App.css';
import ComponentA from './components/4-CounterUseReducerWithUseContext/ComponentA';
import ComponentB from './components/4-CounterUseReducerWithUseContext/ComponentB';
import ComponentC from './components/4-CounterUseReducerWithUseContext/ComponentC';

export const CounterContext = createContext()

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment': {
      return state + 1
      break;
    }
    case 'decrement': {
      return state - 1
      break;
    }
    case 'reset': {
      return initialState;
      break;
    }
    default: {
      return state
      break;
    }
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ countState: count, countDispatch: dispatch }}>
      <div className="App">
        <div>{count}</div>
        <ComponentA />
        <ComponentB />
        <ComponentC />
        {/*
      */}
      </div>
    </CounterContext.Provider>
  );
}

export default App;

import React from 'react';
import { CounterContext } from '../../App';

function ComponentD() {
  const countContext = React.useContext(CounterContext);

  return (
    <div>
      <div>ComponentD</div>
      <div>{countContext.countState}</div>
      <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
      <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={() => countContext.countDispatch('reset')}>Reset</button>

    </div>
  )
}

export default ComponentD
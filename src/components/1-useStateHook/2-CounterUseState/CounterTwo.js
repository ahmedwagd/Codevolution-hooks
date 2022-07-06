import React, { useState } from 'react'

function CounterTwo() {
  const [count, setCount] = useState(0)

  const Increment = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prev => prev * 2)
      console.log(count);
    }
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Icrement</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={Increment}>Icrement 5</button>
    </div>
  )
}

export default CounterTwo
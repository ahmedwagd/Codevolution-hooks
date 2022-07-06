import React, { useState } from 'react'

function CounterFunc() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}

export default CounterFunc
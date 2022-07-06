import React, { useState, useEffect } from 'react'

function CounterOneFunc() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('')

  useEffect(() => {
    document.title = `Clicked ${count} times`
    console.log('Updating document Title');
  }, [count])
  return (
    <div>
      <input type="text" onChange={e => setName(e.target.value)} value={name} />
      <button onClick={() => setCount(count + 1)}>
        Click {count} times
      </button>
      <button >oko</button>
    </div>)
}

export default CounterOneFunc
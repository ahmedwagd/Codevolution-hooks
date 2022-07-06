import React from 'react'
import useDocumentTitle from '../../../hooks/useDocumentTitle';

function DocTitleTwo() {
  const [count, setCount] = useDocumentTitle(11)

  const increment = () => {
    setCount(prev => prev + 1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment {count} times</button>
    </div>
  )
}

export default DocTitleTwo;
import React from 'react'
import useDocumentTitle from '../../hooks/useDocumentTitle';

function DocTitleOne() {
  const [count, increment] = useDocumentTitle();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment {count} times</button>
    </div>
  )
}

export default DocTitleOne
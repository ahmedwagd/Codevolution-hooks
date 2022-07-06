import { useEffect, useState } from 'react'

function useDocumentTitle(initialCounter = 0) {
  const [count, setCount] = useState(initialCounter);
  const increment = () => {
    setCount(prev => prev + 1)
  }
  useEffect(() => {
    document.title = `Count - ${count}`
  }, [count])
  return [count, increment, setCount]
}

export default useDocumentTitle;
import { useState } from 'react'

function useCounter(initialCounter = 0, value) {
  const [count, setCount] = useState(initialCounter)

  const increment = () => {
    setCount(prev => prev + value)
  }
  const decrement = () => {
    setCount(prev => prev - value)
  }
  const reset = () => {
    setCount(initialCounter)
  }
  return [count, increment, decrement, reset]
}

export default useCounter
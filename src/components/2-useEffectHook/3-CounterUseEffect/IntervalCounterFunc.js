import React, { useState, useEffect } from 'react'

function IntervalCounterFunc() {
  const [count, setCount] = useState(0)

  let someProps = 'as';
  const tick = () => {
    setCount(prev => prev + 1)
  }
  useEffect(() => {
    function doSomething() {
      console.log(someProps);
    }
    doSomething()
    setTimeout(() => {
      if (someProps === 'as') {
        someProps = 'ahmed'
        console.log(someProps);
      }
    }, 2000)
    setTimeout(() => {
      if (someProps === 'ahmed') {
        someProps = 'as'
        console.log(someProps);
      }
    }, 4000)
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
      console.log('Interval Cleared');

    }
  }, [])
  return (
    <h1>{count}</h1>
  )
}

export default IntervalCounterFunc
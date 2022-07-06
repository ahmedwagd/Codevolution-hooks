import React, { useEffect, useRef, useState } from 'react'
/*
  ** useRef : 
                  1- can hold referance to a DOM node using ref attribute
                  2- can store any mutable value (used to create a generic container which can hold a mutable value silmilar to instance properties on class component)
  * Gerat about using useRef => the value will persist through the re-render and also not causing any additional renders when the value changes                                      
*/
function TimerFunc() {
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef()
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prev => prev + 1)
    }, 1000)
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])
  return (
    <div>
      {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>Clear Timer</button>
    </div>
  )
}

export default TimerFunc
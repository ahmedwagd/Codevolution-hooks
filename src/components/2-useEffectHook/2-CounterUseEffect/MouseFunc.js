import React, { useState, useEffect } from 'react'

function MouseFunc() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [name, setName] = useState('')
  const logMousePosition = (e) => {
    console.log('Mouse event');
    setX(e.clientX)
    setY(e.clientY)
  }
  useEffect(() => {
    console.log('UseEffect Called');
    window.addEventListener('mousemove', logMousePosition)
    let mounted = true;
    setTimeout(() => {
      if (mounted) {
        setName('hello world');
      }
    }, 4000);

    return () => {
      console.log('Component unmounting code');
      window.removeEventListener('mousemove', logMousePosition)
      mounted = false;
    }
  }, [])
  return (
    <div>
      X - {x} , Y - {y}
      <div>{name}</div>
    </div>
  )
}

export default MouseFunc
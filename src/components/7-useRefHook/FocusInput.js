import React, { useEffect, useRef } from 'react';
// This is how to use useRef hook imperativly access DOM nodes 
function FocusInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    // focus the input element
    inputRef.current.focus()
    console.log(inputRef.current.value);
  }, [])
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  )
}

export default FocusInput
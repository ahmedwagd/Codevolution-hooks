import React, { useState, useMemo } from 'react'
/*
  useCallback => if i want to cashe a function - it caches the provided function instance itself 
  useMemo => when i want cashe an invocked function result - invockes the provided function and caches its result
*/
function Counter() {
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

  const incrementOne = () => {
    setCountOne(countOne + 1)
    console.log('Counter One');
  }
  const incrementTwo = () => {
    setCountTwo(countTwo + 1)
    console.log('Counter Two');
  }
  const isEven = useMemo(() => { // Used for Performance optmization 
    let i = 0;
    while (i < 2000000000) i++
    return countOne % 2 === 0
  }, [countOne])

  return (
    <div>
      <h2>{countOne} - {isEven ? 'Even' : 'Odd'}</h2>

      <button onClick={incrementOne}>Increment One</button>
      <h2>{countTwo}</h2>
      <button onClick={incrementTwo}>Increment Two</button>
    </div>
  )
}

export default Counter
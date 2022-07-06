import React, { useState, useCallback } from 'react'
import Button from './Button';
import Count from './Count';
import Title from './Title';

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000)
  const incrementAge = useCallback(() => {
    setAge(age + 1)
  }, [age])
  const decrementAge = useCallback(() => {
    setAge(age - 1)
  }, [age])
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000)
  }, [salary])
  return (
    <div>
      <Title />
      <Count text='Age' count={age} />
      <Button handlClick={incrementAge}>Increment Age</Button>
      <Button handlClick={decrementAge}>Decrement Age</Button>
      <Count text='Salary' count={salary} />
      <Button handlClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent
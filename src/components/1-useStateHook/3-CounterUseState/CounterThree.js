import React, { useState } from 'react'

function CounterThree() {
  const [name, setName] = useState({ first: '', last: '' })

  return (
    <form>
      <input type="text" name="first" value={name.first} onChange={e => setName({ ...name, first: e.target.value })} />
      <input type="text" name="last" value={name.last} onChange={e => setName({ ...name, last: e.target.value })} />
      <h2>Your last name is - {name.first}</h2>
      <h2>Your First name is - {name.last}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </form>
  )
}

export default CounterThree
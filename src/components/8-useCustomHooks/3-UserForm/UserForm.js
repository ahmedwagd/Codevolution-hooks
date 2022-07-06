import React from 'react'
import useInput from '../../../hooks/useInput'

function UserForm() {
  const [firstname, bindFirstname, resetFirstname] = useInput('');
  const [lastname, bindLastname, resetLastname] = useInput('');


  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Welcome ${firstname} ${lastname}`)
    resetFirstname()
    resetLastname()
  }
  return (
    <form onSubmit={handleSubmit}>
      {firstname} - {lastname}
      <div>
        <label htmlFor="">First name</label>
        <input type="text" {...bindFirstname} />
      </div>
      <div>
        <label htmlFor="">Last name</label>
        <input type="text" {...bindLastname} />
      </div>
      <button>Submit</button>
    </form>
  )
}

export default UserForm
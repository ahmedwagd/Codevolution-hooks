import React, { useContext } from 'react'
import { UserContext } from '../../../App'
// import ComponentE from './ComponentE'

function ComponentC() {
  const user = useContext(UserContext)
  return (
    <div>

      {user}
    </div>
  )
}

export default ComponentC
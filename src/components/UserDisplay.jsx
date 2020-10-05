import React from 'react'
import users from '../users'

const UserDisplay = ({ id, score, handleClick }) => {
  const name = users.filter((user) => user._id === id)[0].name

  return (
    <div onClick={handleClick}>
      {name} {score}
    </div>
  )
}

export default UserDisplay

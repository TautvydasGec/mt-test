import React from 'react'

const UserDisplay = ({ name, score, handleClick }) => {

  return (
    <div onClick={handleClick}>
      {name} {score}
    </div>
  )
}

export default UserDisplay

import React from 'react'

const UserDisplay = ({ rank, name, score, handleClick }) => {
  return (
    <div className="list" onClick={handleClick}>
      <div className="list-rank">{rank}</div>
      <div className="list-name">{name}</div>
      <div className="list-score">{score}</div>
    </div>
  )
}

export default UserDisplay

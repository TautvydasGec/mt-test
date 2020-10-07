import React from 'react'
import UserDisplay from './UserDisplay'

const RankingList = ({ users, handleClick }) => {
  return (
    <div className="table-wrapper">
      <div className="list-top">
        <div>Ranking</div>
        <div>Name</div>
        <div>Score</div>
      </div>
      {users.map((user, index) => {
        return (
          <div
            key={user.id}
          >
            <UserDisplay
              rank={index + 1}
              score={user.score}
              name={user.name}
              handleClick={() => handleClick(user.id)}
            />
          </div>
        )
      })}
    </div>
  )
}

export default RankingList

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
      {users.map((item, index) => {
        return (
          <div
            key={item.id}
          >
            <UserDisplay
              rank={index + 1}
              score={item.score}
              name={item.name}
              handleClick={() => handleClick(item.id)}
            />
          </div>
        )
      })}
    </div>
  )
}

export default RankingList

import React from 'react'
import UserDisplay from './UserDisplay'

const RankingList = ({ users, handleClick }) => {
  return (
    <div>
      {users.map((item, index) => {
        return (
          <div
            key={item.id}
            style={{ display: 'flex' }}
          >
            <div>{index + 1}</div>
            <UserDisplay
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

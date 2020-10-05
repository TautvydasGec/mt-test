import React from 'react'
import UserDisplay from './UserDisplay'

const RankingList = ({ users, handleClick }) => {
  return (
    <div>
      {users.map((item) => {
        return (
          <div key={item.id}>
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

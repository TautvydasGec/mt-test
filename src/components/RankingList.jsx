import React from 'react'
import UserDisplay from './UserDisplay'

const RankingList = ({ users, handleClick }) => {
  return (
    <div>
      {users.map((item) => {
        return (
          <div key={item.userId}>
            <UserDisplay
              id={item.userId}
              score={item.score}
              handleClick={() => handleClick(item.userId)}
            />
          </div>
        )
      })}
    </div>
  )
}

export default RankingList

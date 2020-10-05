import React from 'react'

import findHighestScore from '../lib/findHighestScore'
import UserDisplay from './UserDisplay'

const RankingList = ({ users, scores, handleClick }) => {
  return (
    <div>
      {findHighestScore(users, scores).map((item) => {
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

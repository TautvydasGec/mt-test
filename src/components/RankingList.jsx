import React from 'react'
import findHighestScore from '../lib/findHighestScore'

const RankingList = ({ users, scores }) => {
  return (
    <div>
      {findHighestScore(users, scores).map((item) => {
        return (
          <div key={item.userId}>
            {item.userId} {item.score}
          </div>
        )
      })}
    </div>
  )
}

export default RankingList

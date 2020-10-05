const findHighestScore = (users, scores) => {
  const usersScoresList = users.map((user) => {
    return scores.filter((score) => {
      return user._id === score.userId
    })
  })
  const scoreList = usersScoresList.map((item) => item.reduce((a, b) => a.score > b.score ? a : b))
  return scoreList
}

export default findHighestScore
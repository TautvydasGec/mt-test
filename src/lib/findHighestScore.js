const findHighestScore = (users, scores) => {
  //Put all of the scores for the same user in one array
  const usersScoresList = users.map((user) => {
    return scores.filter((score) => user._id === score.userId)
  })
  //Pick the object with the highest score for every user
  const scoreList = usersScoresList.map((item) => {
    return item.reduce((a, b) => a.score > b.score ? a : b)
  })

  return scoreList
}

export default findHighestScore
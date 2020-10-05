const formatUser = (users, scores) => {
  //Put all of the scores for the same user in one array
  const usersScoresList = users.map((user) => {
    const filteredScores = scores.filter((score) => user._id === score.userId)
    const usersScores = filteredScores.map((item) => item.score)
    const userData = {
      ...user,
      scores: usersScores,
    }
    return userData
  })

  return usersScoresList
}

const formatUserOneScore = (users, scores) => {
  const userData = formatUser(users, scores)

  const userList = userData.map((user) => {
    const newUserData = {
      id: user._id,
      name: user.name,
      score: user.scores.reduce((a, b) => a.score > b.score ? a : b),
    }
    return newUserData
  })
  console.log(userList)
  return userList
}

export {
  formatUser,
  formatUserOneScore,
}
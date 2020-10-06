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
      score: user.scores.reduce((a, b) => a > b ? a : b, 0), //find highest score
    }
    return newUserData
  })

  return userList.sort((a, b) => b.score - a.score);
}

const getScoresById = (scores, id) => {
  const filteredScores = scores.filter((item) => item.userId === id)
  const structuredScores = filteredScores.map((item) => item.score)

  return structuredScores.sort((a, b) => b - a);
}

export {
  formatUser,
  formatUserOneScore,
  getScoresById,
}
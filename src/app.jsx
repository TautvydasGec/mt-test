import React from 'react'
import { MTRow, MTColumn } from 'mt-ui'

import users from './users'
import scores from './scores'
import { formatUserOneScore, getScoresById, getNameById } from './lib/format-data'

import ExcelDropzone from './excel-dropzone.jsx'
import RankingList from './components/RankingList'
import Popup from './components/Popup'
import Form from './components/Form'
export default class Main extends React.Component {
  state = {
    users,
    scores,
    currentId: null,
  }

  //generate id for a new user by taking the last users id and adding 1
  //disclaimer: better implementation would be to use library such as uuid
  generateId = () => {
    return this.state.users[this.state.users.length - 1]._id + 1
  }

  lookForName = (name) => {
    return this.state.users.some(user => user.name === name)
  }

  handleSheetData = (data) => {
    data.map(({ name, score }) => {
      if (this.lookForName(name)) {
        return this.addScore(name, score)
      } else {
        return this.addUser(name, score)
      }
    })
  }

  handleOpen = (id) => {
    if (this.state.currentId !== id) {
      this.setState({
        currentId: id,
      })
    } else {
      //if user popup is already active - close popup
      this.setState({
        currentId: null,
      })
    }
  }

  handleClose = () => {
    this.setState({
      currentId: null,
    })
  }

  onSubmit = (name, score) => {
    if (this.lookForName(name)) {
      this.addScore(name, score)
    } else {
      this.addUser(name, score)
    }
  }

  addUser = (name, score) => {
    const newId = this.generateId()
    this.setState(({ users, scores }) => ({
      users: [
        ...users,
        {
          _id: newId,
          name,
        },
      ],
      scores: [
        ...scores,
        {
          userId: newId,
          score,
        }
      ]

    }))
  }

  addScore = (name, score) => {
    const id = this.state.users.filter(user => user.name === name)[0]._id //find users id by name
    this.setState(({ scores }) => ({
      scores: [
        ...scores,
        {
          userId: id,
          score,
        }
      ]
    }))
  }

  render() {
    const { users, scores, currentId } = this.state
    return (
      <div className="container container--centered">
        <h1 className="m-t">Mediatool exercise</h1>
        <MTRow>
          <MTColumn width={20}>
            <ExcelDropzone
              onSheetDrop={this.handleSheetData}
              label="Drop your file here"
            />
          </MTColumn>
          <MTColumn offset={33}>
            <Form onSubmit={this.onSubmit} />
          </MTColumn>
        </MTRow>
        <MTRow>
          <MTColumn>
            <RankingList
              users={formatUserOneScore(users, scores)}
              handleClick={this.handleOpen}
            />
          </MTColumn>
          <MTColumn>
            {currentId
              ? (<Popup
                name={getNameById(users, currentId)}
                scores={getScoresById(scores, currentId)}
                handleClose={this.handleClose}
              />)
              : null
            }
          </MTColumn>
        </MTRow>
      </div>

    )
  }
}

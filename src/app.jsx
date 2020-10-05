import React from 'react'
import { MTRow, MTColumn } from 'mt-ui'

import users from './users'
import scores from './scores'
import { formatUserOneScore, getScoresById } from './lib/formatData'

import ExcelDropzone from './excel-dropzone.jsx'
import RankingList from './components/RankingList'
import Popup from './components/Popup'
export default class Main extends React.Component {
  state = {
    users,
    scores,
    popUp: null,
  }
  handleSheetData(data) {
    // replace this log with actual handling of the data
    console.log(data)
  }
  handleClick = (id) => {
    if (this.state.popUp !== id) {
      this.setState({
        popUp: id,
      })
    } else {
      this.setState({
        popUp: null,
      })
    }
  }

  render() {
    // console.log(this.state.popUp)
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
          <MTColumn width={75} offset={50}>
            <RankingList
              users={formatUserOneScore(this.state.users, this.state.scores)}
              handleClick={this.handleClick}
            />
          </MTColumn>
        </MTRow>
        { this.state.popUp
          ? (
            <Popup
              data={getScoresById(this.state.scores, this.state.popUp)}
            />
          )
          : null
        }
      </div>
    )
  }
}

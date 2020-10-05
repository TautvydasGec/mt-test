import React from 'react'
import { MTRow, MTColumn } from 'mt-ui'
import ExcelDropzone from './excel-dropzone.jsx'
import users from './users'
import scores from './scores'
import { formatUserOneScore } from './lib/formatData'
import RankingList from './components/RankingList'

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
    console.log(this.state.popUp)
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
            {/* <div>
              <h2>Initial site</h2>
              <p>
                Drop the excel file scores.xlsx that you will find
                in this repo in the area to the left and watch the log output in the console.
                We hope this is enough to get you started with the import.
              </p>
            </div>
            <div>
              <h2>Explaining the grid</h2>
              <p>
                In the Mediatool grid you can use MTRow and MTColumn
                to structure your graphical components.
                This is basically what you need to know:
              </p>
              <ul>
                <li>
                  The index.jsx file uses these components so you
                  can see an example of how they work
                </li>
                <li>MTRow will always create a line break</li>
                <li>
                  MTColumns will stretch to the width of the entire row,
                  unless you use the properties width and offset
                </li>
                <li>Width and offset is set in percent</li>
              </ul>
            </div> */}
          </MTColumn>
        </MTRow>
      </div>
    )
  }
}

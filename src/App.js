import React, { Component, Fragment } from 'react'
import fs from 'fs-extra'

export default class App extends Component {
  state = {
    fileList: []
  }

  handleDirChange = async (event) => {
    const path = event.target.files[0].path
    const files = await fs.readdir(path)
    const xlsm = files.filter(file => file.endsWith('.xlsm'))

    this.setState({fileList: xlsm})
  }

  render() {
    return (
      <Fragment>
        <button onClick={() => this.fileInput.click()}>Select a directory</button>
        <input
          ref={(input) => {
            this.fileInput = input 
          }}
          onChange={this.handleDirChange}
          type='file'
          webkitdirectory='webkitdirectory'
          style={{display: 'none'}} />
        <ul>
          {this.state.fileList.map((filename, i) =>
            <li key={i}>{filename}</li>
          )}
        </ul>
      </Fragment>
    )
  }
}

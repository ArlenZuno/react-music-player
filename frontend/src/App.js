import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import axios from "axios"

import SongsList from "./Components/SongsList"
import SongDetails from "./Components/SongDetails"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      index: 0,
      songs: []
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/bangers")
      .then(response => {
        console.log(`componentDidMount: ${response.data}`)
        this.setState({
          songs: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  start = () => {
    this.songPlayer.load()
    this.songPlayer.play()
  }

  stop = () => {
    this.songPlayer.pause()
  }

  previous = () => {
    if (this.state.id <= this.state.songs.length - 1)
      this.setState({
        id: this.state.id - 1
      })
    this.songPlayer.load()
    this.songPlayer.play()
  }

  next = () => {
    if (this.state.id < this.state.songs.length) {
      this.setState({
        id: this.state.id + 1
      })
    }
    this.songPlayer.load()
    this.songPlayer.play()
  }

  changeSong = id => {
    this.setState({ id: id })
    this.songPlayer.load()
    this.songPlayer.play()
  }

  urlId = url => {
    this.setState({ index: url })
  }

  render() {
    const { id, index, songs } = this.state

    if (songs.length < 1) {
      return <h1>Loading bangers...</h1>
    }

    return (
      <div className="container center">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <SongsList
                songs={songs}
                urlId={this.urlId}
                changeSong={this.changeSong}
              />
            )}
          />
          <Route
            path="/:songid"
            render={() => (
              <SongDetails
                songs={songs}
                index={index}
                changeSong={this.changeSong}
              />
            )}
          />
        </Switch>

        <img id="record" src="/img/record.gif" alt="record" />

        <div>
          <audio ref={element => (this.songPlayer = element)}>
            <source src={songs[id].source} type="audio/mpeg" />
          </audio>

          <a onClick={() => { this.previous() }}
             disabled={id === 0}
             className="btn-floating waves-effect waves-light teal accent-2" >
            <i className="material-icons">navigate_before</i>
          </a>
          <a onClick={() => { this.start() }}
             className="btn-floating waves-effect waves-light teal accent-2" >
            <i className="material-icons">play_arrow</i>
          </a>
          <a onClick={() => { this.stop() }}
             className="btn-floating waves-effect waves-light teal accent-2" >
            <i className="material-icons">pause</i>
          </a>
          <a onClick={() => { this.next() }}
             disabled={id === 2}
             className="btn-floating waves-effect waves-light teal accent-2" >
            <i className="material-icons">navigate_next</i>
          </a>

          <h5 className="white-text">{songs[id].title.toUpperCase()}</h5>
        </div>
      </div>
    )
  }
}

export default App;

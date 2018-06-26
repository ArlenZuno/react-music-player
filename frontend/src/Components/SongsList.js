import React, { Component } from "react"
import { Link } from "react-router-dom"

class SongsList extends Component {
  render() {

    let musicList = this.props.songs.map(song => {
      return (
        <div className="col s4">
          <div className="card">

            <div className="card-content">
              <span className="card-title">
                <Link to={`/${song.id}`}
                  onClick={() => { this.props.urlId(song.id) }} >
                  {song.title}
                </Link>
              </span>
            </div>

            <div className="card-action">
              <i onClick={() => { this.props.changeSong(song.id) }}
                className="material-icons" >
                play_arrow
              </i>
            </div>

          </div>
        </div>
      )
    })

    return <div className="row">{musicList}</div>
  }
}

export default SongsList;

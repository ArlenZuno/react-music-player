import React, { Component } from "react"

class SongDetails extends Component {
  render() {

    let musicInfo = this.props.songs.map( (info, i) => {
      if (i === this.props.index) {
        return (
          <div className="col s12">
            <div className="card">

              <div className="card-image">
                <img src={info.img} alt="artist" />
              </div>

              <div className="card-content">
                <p>{info.description}</p>
                <i onClick={ () => { this.props.changeSong(i) }}
                  className="material-icons">
                  play_arrow
                </i>
              </div>

            </div>
          </div>
        )
      }
      return musicInfo
    })

    return <div className="row">{musicInfo}</div>
  }
}

export default SongDetails;

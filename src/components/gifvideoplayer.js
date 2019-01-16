import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class GifVideoPlayer extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      playing: false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handlePlay = this.handlePlay.bind(this)
    this.handlePause = this.handlePause.bind(this)
  }

  handleClick() {
    if (this.video.paused) {
      this.video.play()
    } else {
      this.video.pause()
    }
  }

  handlePlay() {
    this.setState(({ playing }) => (playing ? null : { playing: true }))
  }

  handlePause() {
    this.setState(({ playing }) => (playing ? { playing: false } : null))
  }

  render() {
    return (
      <div
        className={'gif_player' + (this.state.playing ? ' playing' : '')}
        onClick={this.handleClick}
      >
        <video
          ref={elem => (this.video = elem)}
          src={this.props.gifVideo}
          poster={this.props.still}
          onPlay={this.handlePlay}
          onPause={this.handlePause}
          loop
        />
        <div className="play_button" />
      </div>
    )
  }
}

GifVideoPlayer.propTypes = {
  gifVideo: PropTypes.string.isRequired,
  still: PropTypes.string.isRequired,
}

export default GifVideoPlayer

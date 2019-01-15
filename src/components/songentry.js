import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { playerContextFilter } from '@cassette/core'
import { PlayPauseButton } from '@cassette/player'
import { MediaProgressBar } from '@cassette/components'

function convertToTime(number) {
  const mins = Math.floor(number / 60);
  const secs = (number % 60).toFixed();
  return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

const progressBarHandle = <div className="song_progress_handle"><div /></div>;

class SongEntry extends PureComponent {
  render() {
    const { track, trackIndex, active, currentTime, duration } = this.props
    return (
      <div className="song_entry">
        <h3>
          {track.title}
          <PlayPauseButton trackIndex={trackIndex} />
        </h3>
        <p>{track.meta.description}</p>
        <div className={'song_entry_progress' + (active ? ' active' : '')}>
          <div className="info">
            {convertToTime(currentTime)} / {convertToTime(duration)}
          </div>
          <MediaProgressBar
            progressDirection="right"
            className="progress_bar"
            progressClassName="progress"
            handle={progressBarHandle}
          />
        </div>
      </div>
    )
  }
}

SongEntry.propsTypes = {
  track: PropTypes.object.isRequired,
  trackIndex: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired
}

export default playerContextFilter(SongEntry, ['currentTime', 'duration'])

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';

import { PlayPauseButton, MediaProgress } from '@cassette/player'

class SongEntry extends PureComponent {
  render() {
    const { track, trackIndex, active } = this.props;
    return (
      <div className="song_entry">
        <h3>
          {track.title}
          <PlayPauseButton trackIndex={trackIndex} />
        </h3>
        <p>{track.meta.description}</p>
        <div className={'song_entry_progress' + (active ? ' active' : '')}>
          <MediaProgress />
        </div>
      </div>
    );
  }
}

SongEntry.propsTypes = {
  track: PropTypes.object.isRequired,
  trackIndex: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired
}

export default SongEntry

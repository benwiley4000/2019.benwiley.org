import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class SpeakingEntry extends PureComponent {
  render() {
    const {
      title,
      conferenceName,
      conferenceDate,
      description,
      youtubeId,
    } = this.props
    const youtubeUrl = `https://www.youtube.com/embed/${youtubeId}?enablejsapi=1&origin=https://benwiley.org`
    return (
      <div className="speaking_entry">
        <h3>{title}</h3>
        <p className="time_and_place">
          {conferenceDate}
          <br />
          {conferenceName}
        </p>
        <iframe src={youtubeUrl} frameborder={0} />
        <p>{description}</p>
      </div>
    )
  }
}

SpeakingEntry.propsTypes = {
  title: PropTypes.string.isRequired,
  conferenceName: PropTypes.string.isRequired,
  conferenceDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  youtubeId: PropTypes.string.isRequired,
}

export default SpeakingEntry

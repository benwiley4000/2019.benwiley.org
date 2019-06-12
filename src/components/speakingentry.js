import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const youtubeBasePath = 'https://www.youtube.com/embed/'

const youtubeParams = {
  enablejsapi: 1,
  origin: 'https://benwiley.org',
  color: 'white',
}
const stringifiedYoutubeParams = referrer => {
  return (
    Object
      .keys(youtubeParams)
      .map(key => `${key}=${youtubeParams[key]}`)
      .concat(`widget_referrer=${referrer}`)
      .join('&')
  );
}

function getYoutubeUrl({ youtubeId, referrer }) {
  return `${youtubeBasePath}/${youtubeId}?${stringifiedYoutubeParams(referrer)}`
}

class SpeakingEntry extends PureComponent {
  render() {
    const {
      title,
      conferenceName,
      conferenceDate,
      description,
      youtubeId,
      location
    } = this.props
    return (
      <div className="speaking_entry">
        <h3>{title}</h3>
        <p className="time_and_place">
          {conferenceDate}
          <br />
          {conferenceName}
        </p>
        <iframe
          src={getYoutubeUrl({ youtubeId, referrer: location.href })}
          frameBorder={0}
          allowFullScreen
        />
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

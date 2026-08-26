import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const youtubeBasePath = 'https://www.youtube.com/embed/'

const youtubeParams = {
  enablejsapi: 1,
  origin: 'https://benwiley.org',
  color: 'white',
}
const stringifiedYoutubeParams = referrer => {
  return Object.keys(youtubeParams)
    .map(key => `${key}=${youtubeParams[key]}`)
    .concat(`widget_referrer=${referrer}`)
    .join('&')
}

function getYoutubeUrl({ youtubeId, referrer }) {
  return `${youtubeBasePath}/${youtubeId}?${stringifiedYoutubeParams(referrer)}`
}

class VideoEntry extends PureComponent {
  render() {
    const { title, description, youtubeId, vertical, location } = this.props
    return (
      <div className="video_entry">
        <h3>{title}</h3>
        <iframe
          src={getYoutubeUrl({ youtubeId, referrer: location.href })}
          frameBorder={0}
          allowFullScreen
          className={vertical ? 'vertical' : ''}
        />
        <p>{description}</p>
      </div>
    )
  }
}

VideoEntry.propsTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  youtubeId: PropTypes.string.isRequired,

  vertical: PropTypes.bool.isRequired,
}

export default VideoEntry

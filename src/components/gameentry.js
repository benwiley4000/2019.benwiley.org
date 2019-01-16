import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import GifVideoPlayer from './gifvideoplayer'

class GameEntry extends PureComponent {
  render() {
    const {
      title,
      description,
      teamMembers,
      myContribution,
      platforms,
      programmingLanguage,
      engine,
      links,
      gifVideo,
      still,
    } = this.props
    return (
      <div className="game_entry">
        <h3>{title}</h3>
        <GifVideoPlayer gifVideo={gifVideo} still={still} />
        <p>
          {description}
          <br />
          <b>Team members: </b>
          {teamMembers.concat('me').join(', ')}
          <br />
          <b>My contribution: </b>
          {myContribution}
          <br />
          <b>Platform: </b>
          {platforms.join(', ')}
          <br />
          <b>Programming language: </b>
          {programmingLanguage}
          <br />
          <b>Game engine: </b>
          {engine}
          <br />
          {links.reduce((elements, link) => {
            elements.push(
              <a key={link.url} href={link.url}>
                {link.text}
              </a>
            )
            elements.push(<br key={link.url + '_br'} />)
            return elements
          }, [])}
        </p>
      </div>
    )
  }
}

GameEntry.propsTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  teamMembers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  myContribution: PropTypes.string.isRequired,
  platforms: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  programmingLanguage: PropTypes.string.isRequired,
  engine: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  gifVideo: PropTypes.string.isRequired,
  still: PropTypes.string.isRequired,
}

export default GameEntry

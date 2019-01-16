import React, { Fragment } from 'react'

import SEO from '../components/seo'

import GameEntry from '../components/gameentry'
import games from '../data/games'

const Games = props => (
  <Fragment>
    <SEO
      title="Games | Ben Wiley"
      keywords={[
        'Ben Wiley',
        'Games',
        'Web',
        'JavaScript',
        'Lua',
        'Open Source',
        'Soundtrack',
      ]}
    />
    <h1>Games</h1>
    {games.map(game => (
      <GameEntry key={game.title} {...game} />
    ))}
  </Fragment>
)

export default Games

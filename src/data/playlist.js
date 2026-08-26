import { withPrefix } from 'gatsby'

import React, { Fragment } from 'react'
export default [
  {
    title: 'La Mouche',
    url: withPrefix('/audio/la_mouche.mp3'),
    artwork: [{ src: withPrefix('/album_artwork/fashion_fupa.png') }],
    duration: '1:28',
    meta: {
      description: (
        <Fragment>
          This is what <i>should</i> play every time you go to swat away direct
          messages in your inbox.
        </Fragment>
      ),
    },
  },
  {
    title: 'Plaza del Fupa',
    url: withPrefix('/audio/plaza_del_fupa.mp3'),
    artwork: [{ src: withPrefix('/album_artwork/fashion_fupa.png') }],
    duration: '3:09',
    meta: {
      description: (
        <Fragment>This music makes me want to customize my character!</Fragment>
      ),
    },
  },
  {
    title: 'Fupaccino',
    url: withPrefix('/audio/fupaccino.mp3'),
    artwork: [{ src: withPrefix('/album_artwork/fashion_fupa.png') }],
    duration: '2:21',
    meta: {
      description: <Fragment>Shamelessly Wii-inspired.</Fragment>,
    },
  },
  {
    title: 'The Fupa Parade',
    url: withPrefix('/audio/the_fupa_parade.mp3'),
    artwork: [{ src: withPrefix('/album_artwork/fashion_fupa.png') }],
    duration: '2:39',
    meta: {
      description: (
        <Fragment>
          The fupas are on display, and the cops are on their way!
        </Fragment>
      ),
    },
  },
]

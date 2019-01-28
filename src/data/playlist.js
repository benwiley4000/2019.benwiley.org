import { withPrefix } from 'gatsby'

import React, { Fragment } from 'react'

export default [
  {
    title: 'Home is Where the Heart Is',
    url: withPrefix('/audio/home_is_where_the_heart_is.mp3'),
    meta: {
      description: (
        <Fragment>
          From the game <i>Home is Where the Heart Is</i>, this track blends
          inspiration from <i>Animal Crossing</i> and <i>Law and Order</i> to
          evoke a slow but determined search for home ownership.
        </Fragment>
      ),
    },
  },
  {
    title: 'Sk8Border',
    url: withPrefix('/audio/sk8border.mp3'),
    meta: {
      description: (
        <Fragment>
          Created for the game <i>Sk8Border</i>, this is the result of trying to
          make an 80's-style punk song about knocking down a wall, with the
          sonic limitations of an 80's-style video game console.
        </Fragment>
      ),
    },
  },
  {
    title: 'Trash Island Bossa',
    url: withPrefix('/audio/trash_island_bossa.mp3'),
    meta: {
      description: (
        <Fragment>
          The faster-paced second track written for{' '}
          <i>Cluster Junk: The Secret of Trash Island</i>, meant for later
          levels when the player has picked up speed.
        </Fragment>
      ),
    },
  },
  {
    title: 'Marty McPaper: Epic Delivery Service',
    url: withPrefix('/audio/marty_mcpaper_theme.mp3'),
    meta: {
      description: (
        <Fragment>
          During a day of demoing my game to a bunch of kids at the{' '}
          <i>Louisville Arcade Expo</i>, I heard so much of the title track from{' '}
          <i>Marty McPaper</i> that I never want to hear it again. But I'm still
          proud of the bicycle bell used as percussion.
        </Fragment>
      ),
    },
  },
  {
    title: 'In the Hall of the Mountain King',
    url: withPrefix('/audio/in_the_hall_of_the_mountain_king.mp3'),
    meta: {
      description: (
        <Fragment>
          A rendition of Edvard Grieg's "In the Hall of the Mountain King" that
          pays a nod to the <i>Inspector Gadget</i> theme, which was inspired by
          the same work. This arrangement was written for (but never performed
          by) my short-lived band from high school.
        </Fragment>
      ),
    },
  },
  {
    title: 'The Secret of Trash Island',
    url: withPrefix('/audio/secret_of_trash_island.mp3'),
    meta: {
      description: (
        <Fragment>
          A theme for the first level of{' '}
          <i>Cluster Junk: The Secret of Trash Island</i>, when the player
          discovers they are a box of trash lying in the Pacific Ocean. Someone
          told me to make it sound like <i>Yoshi's Island</i> but I had to throw{' '}
          <i>Inspector Gadget</i> in there...
        </Fragment>
      ),
    },
  },
]

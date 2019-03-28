import { withPrefix } from 'gatsby'

export default [
  {
    title: 'Sk8Border',
    description:
      'Lay that Wall to Waste! This game was created in Montréal in March/April 2018 for the Anti-Fascist Game Jam.',
    teamMembers: ['Marc-André Toupin', 'Leif Halldór Ásgeirsson'],
    myContribution: 'Music, sound effects, some of the programming',
    platforms: ['Web', 'Windows', 'Mac', 'Linux'],
    programmingLanguage: 'Lua',
    engine: 'PICO-8',
    links: [
      {
        url: 'https://sk8border.github.io/sk8border/',
        text: 'Play it online',
      },
      {
        url: 'https://github.com/sk8border/sk8border/',
        text: 'View the source code',
      },
    ],
    gif: withPrefix('/gifs/sk8border_optimized.gif'),
    still: withPrefix('/gifs/stills/sk8border_optimized.jpg'),
    gifVideo: withPrefix('/gifs/sk8border_optimized.mp4'),
  },
  {
    title: 'Modulus Woods',
    description:
      "You're a brave Jack-O-Lantern exploring Modulus Woods, a procedurally generated world of curious shrubbery. Built for Concordia University's COMP 371 Computer Graphics course.",
    teamMembers: [
      'Carlo Gentile',
      'Kai Nicol-Griffith',
      'André Manata',
      'Émile Aoun',
    ],
    myContribution:
      'The underlying engine, procedural terrain generation, collision detection, water, the camera system, player movement',
    platforms: ['Windows', 'Mac', 'Linux'],
    programmingLanguage: 'C++',
    engine: 'Custom-built with OpenGL',
    links: [
      {
        url: 'https://github.com/lucastle6969/comp371',
        text: 'Compile it from source (sorry!)',
      },
    ],
    gif: withPrefix('/gifs/modulus_woods_optimized.gif'),
    still: withPrefix('/gifs/stills/modulus_woods_optimized.jpg'),
    gifVideo: withPrefix('/gifs/modulus_woods_optimized.mp4'),
  },
  {
    title: 'Home is Where the Heart Is',
    description:
      'You play as an anthropomorphic house wandering in search of someone to move in. This game was made for Ludum Dare 37.',
    teamMembers: ['Josh Grilli', 'Allen-Michael Brower'],
    myContribution: 'Music, programming the system to loop background audio',
    platforms: ['Web', 'Windows', 'Mac', 'Linux'],
    programmingLanguage: 'C#',
    engine: 'Unity',
    links: [
      {
        url: 'https://spacetronaut.itch.io/home-is-where-the-heart-is',
        text: 'Play it online / Download',
      },
      {
        url: 'https://github.com/ambocclusion/Tiny-Home-Love-Finder',
        text: 'View the source code',
      },
    ],
    gif: withPrefix('/gifs/home_is_where_the_heart_is_optimized.gif'),
    still: withPrefix('/gifs/stills/home_is_where_the_heart_is_optimized.jpg'),
    gifVideo: withPrefix('/gifs/home_is_where_the_heart_is_optimized.mp4'),
  },
  {
    title: 'Marty McPaper: Epic Delivery Service',
    description:
      "You're Marty McPaper, a delivery boy for the Tub County Herald. You're headed down Obstructive Lane, serving papers to Tub County's most affluent residential area. Watch out - don't break their windows! This game was made for 2016's Global Game Jam.",
    teamMembers: ['Hannah Fitzgerald', 'Ali Sims'],
    myContribution: 'Programming, music, sound effects',
    platforms: ['Web', 'Windows', 'Mac', 'Linux'],
    programmingLanguage: 'JavaScript',
    engine: 'Quintus',
    links: [
      {
        url: 'http://martymcpaper.saidyeti.com/',
        text: 'Play it online',
      },
      {
        url: 'https://saidyeti.itch.io/marty-mcpaper-epic-delivery-service',
        text: 'Download',
      },
      {
        url: 'https://github.com/saidyeti/marty-mcpaper',
        text: 'View the source code',
      },
    ],
    gif: withPrefix('/gifs/marty_mcpaper_optimized.gif'),
    still: withPrefix('/gifs/stills/marty_mcpaper_optimized.jpg'),
    gifVideo: withPrefix('/gifs/marty_mcpaper_optimized.mp4'),
  },
  {
    title: 'Cluster Junk: The Secret of Trash Island',
    description:
      'Once upon a time, a soggy cardboard box dreamed of growing to become the largest island of trash in the entire Pacific Ocean. You are that cardboard box! This game was made for Ludum Dare 34.',
    teamMembers: ['Cara Smith', 'Alex Bezuska', 'Eric Lathrop'],
    myContribution: 'Music, sound effects, some of the programming',
    platforms: ['Web'],
    programmingLanguage: 'JavaScript',
    engine: 'Splat ECS',
    links: [
      {
        url: 'http://twoscoopgames.com/clusterjunk/',
        text: 'Visit the website',
      },
      {
        url: 'http://twoscoopgames.com/ld34/',
        text: 'Play an early preview online',
      },
      {
        url: 'https://github.com/TwoScoopGames/Cluster-Junk',
        text: 'View the source code',
      },
    ],
    gif: withPrefix('/gifs/cluster_junk_optimized.gif'),
    still: withPrefix('/gifs/stills/cluster_junk_optimized.jpg'),
    gifVideo: withPrefix('/gifs/cluster_junk_optimized.mp4'),
  },
]

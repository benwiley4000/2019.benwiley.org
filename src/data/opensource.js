import { withPrefix } from 'gatsby'

export default [
  {
    categoryTitle: 'Applications',
    entries: [
      {
        projectName: 'Volca Sampler',
        description:
          'Web app (desktop + mobile) for capturing musical samples and transferring them, over audio jack cable, to the KORG Volca Sample sample-based synthesizer.',
        programmingLanguages: ['Javascript', 'C', 'TypeScript (JSDoc)', 'SCSS'],
        repositoryLink: 'https://github.com/benwiley4000/volca-sampler',
        site: 'https://volcasampler.com',
        img: withPrefix('/project_images/volca-sampler-splash.png'),
      },
    ],
  },
  {
    categoryTitle: 'UI Component Libraries',
    entries: [
      {
        projectName: 'Cassette',
        description:
          'A flexible media player component library for React that requires no up-front configuration. Cassette powers the media playback on this site!',
        programmingLanguages: ['JavaScript', 'CSS'],
        repositoryLink: 'https://github.com/benwiley4000/cassette',
      },
      {
        projectName: 'Win95 Media Player',
        description:
          'A React media player component inspired by the Media Player app that shipped with Windows 95. Also powered by Cassette!',
        programmingLanguages: ['JavaScript'],
        repositoryLink: 'https://github.com/benwiley4000/win95-media-player',
        site: 'https://benwiley4000.github.io/win95-media-player/',
        img: withPrefix('/project_images/win95-media-player.png'),
      },
    ],
  },
  {
    categoryTitle: 'Graphics',
    entries: [
      {
        projectName: 'gif-frames',
        description:
          'A tool for extracting frames as still images from an animated GIF, in either Node.js or a web browser.',
        programmingLanguages: ['JavaScript'],
        repositoryLink: 'https://github.com/benwiley4000/gif-frames',
      },
      {
        projectName: 'raytracer',
        description:
          'A ray-tracing 3D renderer implemented from scratch. Loads scene descriptions as text and shows render progress in real-time.',
        programmingLanguages: ['C++'],
        repositoryLink: 'https://github.com/benwiley4000/raytracer',
      },
    ],
  },
  {
    categoryTitle: 'PICO-8 Tools',
    entries: [
      {
        projectName: 'pico8-responsive-webplayer-transform',
        description:
          'A post-processor for making the web export for PICO-8 games display better on devices with small screens.',
        programmingLanguages: ['Python', 'JavaScript', 'CSS'],
        repositoryLink:
          'https://github.com/benwiley4000/pico8-responsive-webplayer-transform',
      },
      {
        projectName: 'pico8-gpio-listener',
        description:
          "An API for subscribing to changes in a PICO-8 game's GPIO state from JavaScript. This enables easy implementation of effects, such as device vibration, in response to in-game events.",
        programmingLanguages: ['JavaScript'],
        repositoryLink: 'https://github.com/benwiley4000/pico8-gpio-listener',
      },
      {
        projectName: 'pico8-to-lua',
        description:
          'A command-line utility that converts the PICO-8 variety of extended Lua syntax to standard Lua syntax.',
        programmingLanguages: ['Lua'],
        repositoryLink: 'https://github.com/benwiley4000/pico8-to-lua',
      },
      {
        projectName: 'pico8-messenger',
        description:
          "Utility functions for passing numerical data between a web-exported PICO-8 game and its surrounding browser context, by encoding the data as binary in PICO-8's GPIO interface.",
        programmingLanguages: ['JavaScript', 'Lua'],
        repositoryLink: 'https://github.com/benwiley4000/pico8-messenger',
      },
      {
        projectName: 'tiny-pico8-touch-ui',
        description:
          'A function that can bind an arbitrary browser UI element as a touch-friendly PICO-8 game control.',
        programmingLanguages: ['JavaScript'],
        repositoryLink: 'https://github.com/benwiley4000/tiny-pico8-touch-ui',
      },
    ],
  },
]

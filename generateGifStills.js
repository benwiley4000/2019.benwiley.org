// run this to generate still first frames for each GIF

const gifFrames = require('gif-frames');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

// sync prep
mkdirp.sync(path.join(__dirname, 'static', 'gifs', 'stills'));
const data = fs.readdirSync('./static/gifs');

// all I/O below is async
data.filter(p => p.indexOf('.gif') === p.length - 4).forEach(filename => {
  gifFrames({
    url: path.join(__dirname, 'static', 'gifs', filename),
    frames: 0
  }).then(frameData => {
    const pathname = path.join(
      __dirname,
      'static',
      'gifs',
      'stills',
      filename.replace('.gif', '.jpg')
    );
    console.log('Writing', pathname);
    frameData[0].getImage().pipe(fs.createWriteStream(pathname));
  });
});

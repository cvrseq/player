const { default: WaveSurfer } = require('wavesurfer.js');

duration = document.querySelector('#duration');
current = document.querySelector('#current');
playPause = document.querySelector('#playPause');

var timeCalculator = function (value) {
  minute = Math.floor(value / 60);
  second = Math.floor(value - minute * 60);

  if (second < 10) {
    second = '0' + second;
  }

  return minute + ':' + second;
};

// <----------------------------------------------------->

wavesurfer = WaveSurfer.create({
  container: '#wave',
  waveColor: '#cdedff',
  progressColor: '#1aafff',
  height: 48,
  scrollParent: false,
});

wavesurfer.load('./Chris.mp3');

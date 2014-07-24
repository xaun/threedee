// Browser support hack
window.AudioContext = (function (){
  return  window.webkitAudioContext ||
          window.AudioContext       ||
          window.mozAudioContext;
})();

// Audio factory
var Sound = {
  audioContextSetup: function () {
    try {
      Sound.audioContext = new webkitAudioContext();
    } catch(e) {
      alert('Web Audio API is not supported in this browser');
    }
  },
  createAudioObject: function () {
    Sound.audio0 = new Audio();
    Sound.audio0.src = '/audio/MakeYouWanna.mp3';
    Sound.audio0.controls = true;
    Sound.audio0.autoplay = false;
    Sound.audio0.loop = true;
  },
  setupAudioNodes: function () {
    Sound.sourceNode = Sound.audioContext.createMediaElementSource(Sound.audio0);
    Sound.analyserNode = Sound.audioContext.createAnalyser();
    Sound.analyserNode.fftSize = 1024,
    Sound.frequencyArray = new Uint8Array(Sound.analyserNode.frequencyBinCount);
    Sound.timeDomainArray = new Uint8Array(Sound.analyserNode.frequencyBinCount);
  },
  connectAudioNodes: function () {
    Sound.sourceNode.connect(Sound.analyserNode);
    Sound.analyserNode.connect(Sound.audioContext.destination);
  },
  getFrequencyDomain: function () {
    Sound.analyserNode.getByteFrequencyData(Sound.frequencyArray);
    return Sound.frequencyArray;
  },
  getTimeDomain: function () {
    Sound.analyserNode.getByteTimeDomainData(Sound.timeDomainArray);
    return Sound.timeDomainArray;
  }
};


$(document).ready(function () {

  // Initial Audio setup
  Sound.audioContextSetup();
  Sound.createAudioObject();
  Sound.setupAudioNodes();
  Sound.connectAudioNodes();
  $('#player').append(Sound.sourceNode.mediaElement);

  // Function for window.onload sample track if needed..
  $('#player audio').on('playing', function () {
    // frequency data console log
  })

});









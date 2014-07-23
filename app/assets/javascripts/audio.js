// Browser support hack
window.AudioContext = (function (){
  return  window.webkitAudioContext ||
          window.AudioContext       ||
          window.mozAudioContext;
})();

// Sound object containing functions for setting up audio context, audio object, audio nodes, frequency domain data, and time domain data.
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
  Sound.audioContextSetup();
  Sound.createAudioObject();

  // ------------- FILE DRAG & DROP ------------------- //
  // reference source for code = http://html5demos.com/dnd-upload#view-source
  var dropZone = document.getElementById('drop-zone'),
    tests = {
      filereader: typeof FileReader != 'undefined',
      dnd: 'draggable' in document.createElement('span'),
      formdata: !!window.FormData,
      progress: "upload" in new XMLHttpRequest
    },
    support = {
      filereader: document.getElementById('filereader'),
      formdata: document.getElementById('formdata'),
      progress: document.getElementById('progress')
    },
    acceptedTypes = {
      'audio/mpeg': true,
      'audio/ogg': true,
      'audio/wav': true,
      'audio/x-aiff': true
    },
    progress = document.getElementById('uploadprogress'),
    fileupload = document.getElementById('upload');

  function previewfile(file) {
      var reader = new FileReader();
      reader.onload = function (event) {
        dropZone.innerHTML += '<p id="upl_success">Succesfully uploaded' + " " + file.name;
      };

      // Pauses current audio object, and resets the time to 0, creates a new Audio object, assigns the reader.result to the new audio object.
      reader.onloadend = function() {
        Sound.audio0.pause();
        Sound.audio0.currentTime = 0;
        Sound.createAudioObject();
        Sound.audio0.src = reader.result;

        // Assigns correct MIME type to variable
        switch(file.type) {
          case 'audio/mp3':
            var mime = 'audio/mpeg';
          break;

          case 'audio/ogg':
            var mime = 'audio/ogg';
          break;
          case 'audio/wav':
            var mime = 'audio/vnd.wav';
          break;
        };

        // Sets the audio player with the source and file type
        $('source').remove();
        var $source = $('<source></source>');
        $source.attr('src', Sound.audio0.src);
        $source.attr('type', mime);
        $('audio').append($source).get(0).load();
      }
      reader.readAsDataURL(file);
  }


  function readfiles(files) {
      var formData = tests.formdata ? new FormData() : null;
      for (var i = 0; i < files.length; i++) {
        if (tests.formdata) formData.append('file', files[i]);
        previewfile(files[i]);
      }
  }

  // Drag & drop listeners
  if (tests.dnd) {
    dropZone.ondragover = function () { this.className = 'hover'; return false; };
    dropZone.ondragend = function () { this.className = ''; return false; };
    dropZone.ondrop = function (e) {
      this.className = '';
      e.preventDefault();
      readfiles(e.dataTransfer.files);
    }
  } else {
    fileupload.className = 'hidden';
    fileupload.querySelector('input').onchange = function () {
      readfiles(this.files);
    };
  };

});




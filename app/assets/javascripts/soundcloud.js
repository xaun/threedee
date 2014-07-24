




$('#soundcloud-url input').keypress(function (e) {
  var key = e.which;
  if(key == 13) {
    console.log('hello' + key)
    var trackUrl = $('#soundcloud-url input').val();
    $.get('http://api.soundcloud.com/resolve.json?url=' + trackUrl + '&client_id=ad246bea735d1371bb0416e34ec114a1',
    function (result) {
      Sound.audio0.pause();
      Sound.audio0.currentTime = 0;
      Sound.createAudioObject();
      Sound.audio0.src = result.stream_url;

      // Sets the audio player with the source and file type
      $('source').remove();
      var $source = $('<source></source>');
      $source.attr('src', Sound.audio0.src);
      $('audio').append($source).get(0).load();
    });
  }
});

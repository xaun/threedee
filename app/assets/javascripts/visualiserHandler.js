$(document).ready(function(){
  var currentAnimationId;
  var getTimeDomain = function() {
    Sound.getTimeDomain();
  };

  console.log(Sound.getTimeDomain());
  var getFrequencies = function() {
    Sound.getFrequencyDomain();
  };
  function stopPrevious () {
    try{
      cancelAnimationFrame(currentAnimationId);
      $('#container').empty();
    } catch(err) {
      console.log('no id');
    }
  };
  // Visual click listeners
  $('#lines').on('click',function(){
    console.log(currentAnimationId);
    stopPrevious();
    lines();
    getTimeDomain();
  });

  $('#sunflare').on('click',function(){
    console.log('click');
    console.log(currentAnimationId);
    stopPrevious();
    sunFlare();
  });
  $('#emitter').on('click', function(){
    stopPrevious();
    emitter();
  });

  $('#galaxy').on('click', function(){
    stopPrevious();
    galaxy();
  })

  $('#cubeGrid').on('click', function(){
    stopPrevious();
    cubeGrid();
  });

  $('#flat').on('click', function(){
    stopPrevious();
    flat();
  });
});
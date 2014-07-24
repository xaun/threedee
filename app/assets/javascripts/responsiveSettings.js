$(document).ready(function () {
    var getTimeDomain = function() {
    return Sound.getTimeDomain();
  };

  var getFrequencies = function() {
    return Sound.getFrequencyDomain();
  };
  var currentAnimationId;

  function stopPrevious () {
    try{
      cancelAnimationFrame(currentAnimationId);
      $('#container').empty();
    } catch(err) {
      console.log('no id');
    }
  };

  $( "#linesSpeedControls").hide();
  $( "#sunflareControls").hide();
  $( "#cubeGridControls").hide();

  $( "#visualisers_list" ).on('change', function(){
    console.log('changing');
    if ($( "#visualisers_list option:selected" ).val() == 'lines'){$('#linesSpeedControls').show(); $( "#sunflareControls").hide();}
    if ($( "#visualisers_list option:selected" ).val() == 'sunflare'){$('#sunflareControls').show(); $( "#linesSpeedControls").hide(); loadSunflare();}
    if ($( "#visualisers_list option:selected" ).val() == 'emitter'){$( "#linesSpeedControls").hide(); $( "#sunflareControls").hide();}
  })
});

var loadSunflare = function (){
    $('#sunflareSubmit').on('click',function(){
    console.log(currentAnimationId);
    stopPrevious();
    sunFlare(getTimeDomain, getFrequencies);
    });
  };
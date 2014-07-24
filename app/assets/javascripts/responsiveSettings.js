$(document).ready(function () {
    var getTimeDomain = function() {
    return Sound.getTimeDomain();
  };

  var getFrequencies = function() {
    return Sound.getFrequencyDomain();
  };
  var currentAnimationId;
  var currentVisualiser;

  function stopPrevious () {
    try{
      cancelAnimationFrame(currentVisualiser.currentAnimationId);
      $('#visualiser-canvas').empty();
    } catch(err) {
      console.log('no id');
    }
  };
  $( "#controllsList form").hide();

  $( "#visualisers_list" ).on('change', function(){
    console.log('changing');
    if ($( "#visualisers_list option:selected" ).val() == 'lines'){ $( "#controllsList form").hide(); $('#linesSpeedControls').show([400], 'swing'); }
    if ($( "#visualisers_list option:selected" ).val() == 'sunflare'){ $( "#controllsList form").hide(); $('#sunflareControls').show([400], 'swing'); }
    if ($( "#visualisers_list option:selected" ).val() == 'cubeGrid'){ $( "#controllsList form").hide(); $('#cubeGridControls').show([400], 'swing');}
  });

  $('#sunflareSubmit').on('click',function (event){
    event.preventDefault();
    stopPrevious();
    sunFlare2(getTimeDomain, getFrequencies);
  });

  $('#linesSubmit').on('click',function (event){
    event.preventDefault();
    stopPrevious();
    lines(getTimeDomain, getFrequencies);
  });

  $('#cubeGrid').on('click',function (event){
    event.preventDefault();
    stopPrevious();
    cubeGrid(getTimeDomain, getFrequencies);
  });

});


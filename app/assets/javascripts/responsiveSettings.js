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
      console.log(currentVisualiser);
      console.log(currentVisualiser.currentAnimationId);
      cancelAnimationFrame(currentVisualiser.currentAnimationId);
      console.log($('#visualiser-canvas').empty());
    } catch(err) {
      console.log(err);
      console.log('no id');
    }
  };
  $( "#controllsList form").hide();

  $( "#visualisers_list" ).on('change', function(){
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


  $('#cubeGridSubmit').on('click',function (event){
    console.log(event);
    event.preventDefault();
    stopPrevious();
    cubeGrid(getTimeDomain, getFrequencies);
  });

  $('#speedControlX').on('change', function(){
  currrentVisualiser.speedX = parseFloat($('#speedControlX').val());
  });

  $('#speedControlY').on('change', function(){
    currrentVisualiser.speedY = parseFloat($('#speedControlY').val());
  });

  $('#speedControlZ').on('change', function(){
    currrentVisualiser.speedZ = parseFloat($('#speedControlZ').val());
  });

  $('#lineWidthControler').on('change', function(){
    currrentVisualiser.lineWidth = parseFloat($('#lineWidthControler').val());
  });

  $('#backgroundColorControl').on('change', function(){
    console.log('color change');
    currrentVisualiser.backgroundColorController = parseInt($('#backgroundColorControl').val().slice(1,7), 16);
  });

});




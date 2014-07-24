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
  $("#controllsList form").hide();
  $("#sunflareControls").show();
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

  //lines controlls
  $('#speedControlX').on('change', function(){
  currentVisualiser.speedX = parseFloat($('#speedControlX').val());
  });

  $('#speedControlY').on('change', function(){
    currentVisualiser.speedY = parseFloat($('#speedControlY').val());
  });

  $('#speedControlZ').on('change', function(){
    currentVisualiser.speedZ = parseFloat($('#speedControlZ').val());
  });

  $('#lineWidthControler').on('change', function(){
    currentVisualiser.lineWidth = parseFloat($('#lineWidthControler').val());
  });

  $('#backgroundColorControl').on('change', function(){
    console.log('color change');
    currentVisualiser.backgroundColorController = parseInt($('#backgroundColorControl').val().slice(1,7), 16);
  });

  //cubeGrid controlls
  $('#particleNumber').on('change', function(){
  currentVisualiser.particleNumber = parseFloat($('#particleNumber').val());
  });

  $('#particleSpeedBase').on('change', function(){
    currentVisualiser.particleSpeedBase = parseFloat($('#particleSpeedBase').val());
  });

  $('#particleSpeedSpread').on('change', function(){
    currentVisualiser.particleSpeedSpread = parseInt($('#particleSpeedSpread').val());
  });

  $('#cubeStrength').on('change', function(){
    currentVisualiser.cubeStrength = parseInt($('#cubeStrength').val())/100;
  });

  $('#cubeBackgroundColorControl').on('change', function(){
    currentVisualiser.particleBackgroundColorController = parseInt($('#cubeBackgroundColorControl').val().slice(1,7), 16);
  });

  // Sunflare controls
  $('#sunflare-rotationX').on('change', function(){
    console.log('click');
    currentVisualiser.spinningSpeedX = parseFloat($('#sunflare-rotationX').val())/100;
  });

  $('#sunflare-rotationY').on('change', function(){
    currentVisualiser.spinningSpeedY = parseFloat($('#sunflare-rotationY').val())/100;
  });

  $('#sunflare-size').on('change', function(){
    currentVisualiser.sphereSize = parseFloat($('#sunflare-size').val())/100;
  });

});




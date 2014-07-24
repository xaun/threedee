$(document).ready(function () {
  // $('#settings').on('select' function () {
  //   document.getElementById('visualisers')
  // })

  // $('#visualisers_list').val().on('select' function () {

  $( "#linesSpeedControls").hide();

  if ($( "#visualisers_list option:selected" ).val() == 'lines'){
    linesSettings();
  }


  var linesSettings = function (){
    $( "#visualisers_list option:selected" ).val('lines').on('select', function() {
    $('#linesSpeedControls').show();
  });
}

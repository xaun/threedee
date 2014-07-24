$(document).ready(function() {
  // $(".sign-in-form").hide();

  $( "#sign-in-link" ).on('click', function(){
    console.log('doing');
    $(".sign-in-form").slideToggle('slow');
  });

  $("#sign-in-fuck").on('ajax:sucess', function(name) {
    console.log('working');
    $("#sign-in-link").hide();
    $("#sign-up-link").hide();
  })
  $('#new_task').on('ajax:success', function (task) {
    $('#new_task').get(0).reset();
    add_marker(task.latitude, task.longitude, task.title)
  });
});
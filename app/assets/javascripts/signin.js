$(document).ready(function() {
  // $(".sign-in-form").hide();
  $( "#sign-in-link" ).on('click', function(){
    $(".sign-in-form").slideToggle('slow');
  });

  $("#sign-in-fuck").on('ajax:success', function (xhr, data) {
    console.log(data);
    $(".sign-in-form").slideToggle('slow');
    $("#sign-in-link").hide();
    $("#sign-up-link").hide();
    user_id = data.id;
    var a = $('<div>').text("Log out " + data["username"])
    a.attr('id','logout');
    $('#inner-nav').append(a)
  })

  $('#new_task').on('ajax:success', function (task) {
    $('#new_task').get(0).reset();
    add_marker(task.latitude, task.longitude, task.title)
  });

  $("#inner-nav").on('click',"#logout", function() {
    $.ajax({
      url: '/sessions/' + user_id,
      type: 'DELETE',
      success: function() {
        $('#logout').remove();
        $("#sign-in-link").slideToggle('slow');
        $("#sign-up-link").slideToggle('slow');
      }
    });
  });
});
$(document).ready(function() {

  // ----------------------------------File Tab---------------------------------------------- //
  var fileTab = {

    speed:300,
    containerWidth:$('.file-panel').outerWidth(),
    containerHeight:$('.file-panel').outerHeight(),
    tabWidth:$('.file-tab').outerWidth(),


    init:function(){
      $('.file-panel').css('height',fileTab.containerHeight + 'px');

      $('a.file-tab').click(function(event){
        if ($('.file-panel').hasClass('open')) {
            $('.file-panel')
            .animate({left:'-' + fileTab.containerWidth}, fileTab.speed)
            .removeClass('open');
        } else {
            $('.file-panel')
            .animate({left:'0'},  fileTab.speed)
            .addClass('open');
        }
        event.preventDefault();
      });
    }
  };

  fileTab.init();

  // ----------------------------------Visualiser Tab---------------------------------------------- //
  var visTab = {

    speed:300,
    containerWidth:$('.vis-panel').outerWidth(),
    containerHeight:$('.vis-panel').outerHeight(),
    tabWidth:$('.vis-tab').outerWidth(),


    init:function(){
      $('.vis-panel').css('height',visTab.containerHeight + 'px');

      $('a.vis-tab').click(function(event){
        console.log('sdfsd')
        if ($('.vis-panel').hasClass('open')) {
          console.log('wwerw')
            $('.vis-panel')
            .animate({right:'-' + visTab.containerWidth}, visTab.speed)
            .removeClass('open');
        } else {
          console.log('xcxcv')
            $('.vis-panel')
            .animate({right:'0'},  visTab.speed)
            .addClass('open');
        }
        event.preventDefault();
      });
    }
  };

  visTab.init();
});
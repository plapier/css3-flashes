$(function(){

    $('.flash_message')
      .animate({ marginTop: 0 }
    );
    $('#flash_close').click(function(){
      $('.flash_message').animate({ marginTop: -50 })
    });

});
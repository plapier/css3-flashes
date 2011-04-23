//----------------------------------------------------------------
// This Javascript is required for Flashes to animate in your app.
//----------------------------------------------------------------

$(function(){

    $('.flash_message')
      .animate({ marginTop: 0 }); // Slide flash message down

  // Alternatively, Slide down then Slide up after delay of 4 seconds
  //  .animate({ marginTop: 0 }).delay(4000).animate({ marginTop: -53 });

    $('#flash_close').click(function(){
      $('.flash_message').animate({ marginTop: -53 })
    });

});
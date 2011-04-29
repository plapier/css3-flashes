//----------------------------------------------------------------
// This Javascript is required for Flashes to animate in your app.
//----------------------------------------------------------------

// Flash messages
$(function(){
  var flashHeight = $('.flash_message').css("height");     // Grab height of Flash Message
  var negHeight = "-" + flashHeight;                       // Negate height

  // On Document load, slide down flashes then slide up after delay of 3 seconds
  $('.flash_message').animate({ marginTop: 0 }).delay(3000).animate({ marginTop: negHeight });

  // Dissmiss Flash Messages
  $('#flash_close').click(function(){
    $('.flash_message').stop();                            //Stop Animation
    $('.flash_message').animate({ marginTop: negHeight }); // Slide up
  });
});
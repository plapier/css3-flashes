//----------------------------------------------------------------
// This Javascript is required for Flashes to animate in your app.
//----------------------------------------------------------------

// Flash messages
$(function(){

// EDIT HERE
//----------------------------------------------------------------
  var delayTime = 3000;       // Show Flash messages for 3 seconds
  var boxShadowOffset = 2;    // CSS Box-Shadow y-Offset (pixels)
//----------------------------------------------------------------
// STOP EDITING HERE


  // Grab height of Flash Message
  var flashHeight = $('div.flash_message').css("max-height"); // Grab height of Flash Message

  // Calculate closed position of flash message
  // Negate height, parse to integer, add CSS shadow-height
  var closePos = "-" + (parseInt(flashHeight) + boxShadowOffset) + "px";

  // Detect browser UserAgent
  var deviceAgent = navigator.userAgent.toLowerCase();

  // Detect if iphone, ipad, ipod
  var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);

  if (agentID) {
    $(function(){
      // If mobile platform, slide down flash message, delay for 2 seconds longer than desktop
      $('.flash_message').animate({ marginTop: 0 }).delay(delayTime + 2000).animate({ marginTop: closePos });
    });

  } else {
    // Non-mobile devices
    $(function(){
      // On Document load, slide down flashes then slide up after delay of 3 seconds
      $('.flash_message').animate({ marginTop: 0 }).delay(delayTime).animate({ marginTop: closePos });
    });
  };

  // Dissmiss Flash Messages
  $('#flash_close').click(function(){
    $('.flash_message').stop();                               // Stop Animation
    $('.flash_message').animate({ marginTop: closePos });     // Slide up
  });
});

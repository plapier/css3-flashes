//---------------------------------------------------
// Javascript for Demo Page only. See application.js.
//---------------------------------------------------

var slideDown = function(pos){
  $('.flash_message').animate({ marginTop: 0 });
};
var slideUp = function(closePos, btnID){
  $('.flash_message').animate({ marginTop: closePos }, function(){ changeIcon(btnID) });
};

var changeIcon = function(btnID){

  var iconID = "icon_" + btnID;
    $('div#icon_status').attr("class", iconID);

  if (btnID == "notice") {
    $('div.flash_message p').html("Woah! Slow down, I can't think that fast.");
  }
  else if (btnID == "failure") {
    $('div.flash_message p').html("Incorrect email or password. Please try again.");
  }
  else if (btnID == "success") {
    $('div.flash_message p').html("Account created successfully!");
  }
  else {
    return false;
  }
};

$(function(){
  // Slide down on page load
  slideDown();
  var flashHeight = $('div#flash').css("max-height");             // Grab height of Flash Message
  var boxShadowOffset = 2;                                        // Define CSS Box-Shadow Height (pixels)
  
  // Calculate closed position of flash message
  // Negate height, parse to integer, add CSS shadow height
  var closePos = "-" + (parseInt(flashHeight) + boxShadowOffset) + "px";

  // On button click, slide up - change icon and text - slide down
  $('li button').click(function(){
    var btnID = $(this).attr("id");
      slideUp(closePos, btnID); // pass in flash message height & button ID
      slideDown(btnID);
  });

  // Slide up when close button is clicked
  $('#flash_close').click(function(){
    slideUp(closePos);
  });
});
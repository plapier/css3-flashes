var slideDown = function(pos){
  $('.flash_message').animate({ marginTop: 0 });
};
var slideUp = function(btnID){
  $('.flash_message').animate({ marginTop: -50 }, function(){ changeIcon(btnID) });
};

var changeIcon = function(btnID){
  if (btnID == "notice") {
    $('div#icon_status').attr("class", "icon_notice");
    $('div.flash_message p').html("Woah! Slow down, I can't think that fast.");
  }
  else if (btnID == "failure") {
    $('div#icon_status').attr("class", "icon_failure");
    $('div.flash_message p').html("Incorrect email or password. Please try again.");
  }
  else if (btnID == "success") {
    $('div#icon_status').attr("class", "icon_success");
    $('div.flash_message p').html("Account created successfully!");
  }
  else {
    return false;
  }
};

$(function(){
  // Slide down on page load
  slideDown();

  // On button click, slide up - change icon and text - slide down
  $('li button').click(function(){
     var btnID = $(this).attr("id");
      slideUp(btnID);
      slideDown(btnID);
  });

  // Slide up when close button is clicked
  $('#flash_close').click(function(){
    slideUp();
  });
});
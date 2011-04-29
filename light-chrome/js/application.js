//----------------------------------------------------------------
// This Javascript is required for Flashes to animate in your app.
//----------------------------------------------------------------

$(function(){

    $('.flash_message')
    // Slide down flashes then Slide up after delay of 4 seconds
    .animate({ marginTop: 0 }).delay(4000).animate({ marginTop: -53 });

    // Dismiss flash when close-button is clicked
    $('#flash_close').click(function(){
      $('.flash_message').animate({ marginTop: -53 })
    });

});
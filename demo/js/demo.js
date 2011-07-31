(function($) {
  $.fn.sexyFlash = function(settings) {
    settings = $.extend({
      delayTime: 3000,
      boxShadowOffset: 2
    }, settings);

    function calculateDelayTime(delay) {
      if ( isiOSDevice() ) {
        return delay + 2000;
      }
      return delay;
    }
    function isiOSDevice() {
      var deviceAgent = navigator.userAgent.toLowerCase(),
          iOSDevice   = deviceAgent.match(/(iphone|ipod|ipad)/);

      if (iOSDevice) {
        return true;
      }
      return false;
    }
    function stopAnimation() {
      $(this).clearQueue();
    }
    function restartAnimation() {
      $(this).delay(settings.delayTime).slideUp();
    }
    function closeFlash() {
      $(this).clearQueue();
      $(this).parents('.flash_message').slideUp();
    }

    settings.delayTime = calculateDelayTime(settings.delayTime);
    return this.each(function() {
      var flashHeight = $(this).innerHeight(),
          closePos    = "-" + (parseInt(flashHeight) + settings.boxShadowOffset) + "px";

      $('.flash_close', this).click(closeFlash);
      $(this)
        .hover(stopAnimation, restartAnimation)
        .animate({ marginTop: 0 })
        .delay(settings.delayTime)
        .slideUp(function() { $(this).remove(); });
    });
  };
})(jQuery);

(function($) {
  $(function() {
    var messages = {
      failure: "Incorrect email or password. Please try again.",
      notice: "Woah! Slow down, I can't think that fast.",
      success: "Account created successfully!"
    };

    var flashMessageHTML = '<div class="flash_message"> \
      <div class="flash_icon"> \
        <div class="icon_status"> \
          <div class="gloss"></div> \
        </div> \
      </div> \
      <div class="flash-vrule"></div> \
      <p></p> \
      <div class="flash_close"><span class="close">&#215;</span></div> \
    </div>';

    $('#buttons button').click(function() {
      var flash = $(flashMessageHTML);
      var buttonID = $(this).attr('id');
      flash.find('p').text(messages[buttonID]);
      flash.find('.icon_status').addClass('icon_' + buttonID);
      $('#flash').append(flash).find('.flash_message').sexyFlash();
    });
  });
})(jQuery);

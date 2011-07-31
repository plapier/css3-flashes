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

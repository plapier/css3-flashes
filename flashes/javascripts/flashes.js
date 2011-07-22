(function($) {
  $.fn.sexyFlash = function(settings) {
    settings = $.extend({
      delayTime: 3000,
      boxShadowOffset: 2
    }, settings);

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

    return this.each(function() {
      var flashHeight = $(this).innerHeight();
      var closePos = "-" + (parseInt(flashHeight) + settings.boxShadowOffset) + "px";

      $('.flash_close', this).click(closeFlash);
      $(this)
        .hover(stopAnimation, restartAnimation)
        .animate({ marginTop: 0 })
        .delay(settings.delayTime)
        .slideUp();
    });
  };
})(jQuery);

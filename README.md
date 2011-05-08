# Sexy CSS3 Flashes

Use these CSS3 flashes in your rails app.
DEMO: http://plapier.github.com/sexy-css3-flashes/index.html:

## Dependencies

You'll need:

* jQuery
* Sass 3.1.1+

## Install

Everything in flashes directory, place respectively in your rails app:

* _flashes.html.erb partial into app/views/shared/
* sass files into public/stylesheets/scss/
* flashes.js into public/javascripts/ and include it in your javascripts tag.

Add the flashes partial to your layouts:

    <%= render :partial => 'shared/flashes' -%>

## About

These CSS3 flashes were created on the grounds of providing better functionality and visual appeal. They look best in WebKit-based browsers, almost as good in Firefox, with all other browsers degrading rather gracefully. If you use these flashes in the wild, drop me a note and let me know. http://twitter.com/phillapier


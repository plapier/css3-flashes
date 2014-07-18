# CSS3 Flashes

Use these CSS3 flashes in your rails app.
DEMO: http://plapier.github.com/css3-flashes/

These flashes solve the problem of flash messages being displayed inline, which tends to often break an application layout or page styling. CSS3-Flashes are absolutely positioned so they float above page content, therefore page layouts remain intact and undisturbed.  
These flashes are also optimized for iphone/ipad use.

## Dependencies

You'll need:

* jQuery
* Sass 3.1.1+
* [Bourbon](https://github.com/thoughtbot/bourbon)


## Install

Everything in flashes directory, place respectively in your rails app:

* _flashes.html.erb partial into app/views/shared/
* css3-flashes folder into public/stylesheets/sass/
* flashes.js into public/javascripts/ and include it in your javascripts tag.

Import the _flashes.scss partial into your application.scss

    @import "css3-flashes/flashes";

Add the _flashes.html.erb partial to your layouts:

    <%= render :partial => 'shared/flashes' -%>


## Styles / Themes

There are two default themes provided: DARK & LIGHT.  
Alternatively, a CUSTOM theme can be styled in _custom-theme.scss. See CUSTOM Theme below.


### DARK or LIGHT Theme

To toggle between light & dark color themes, edit _flashes.scss:

    $flashStyle: dark;
          OR
    $flashStyle: light;

The highlights and shadows differ between DARK and LIGHT styles, therefore if you change the gradient colors, it is necessary to use the appropriate flashStyle theme.

**DARK THEME**  
If you want to change the flash message background gradient using the dark theme, edit the following variables:

    $dark-background-from:  #595959;
    $dark-background-to:    #3C3C3C;


**LIGHT THEME**  
If you want to change the flash message background gradient using the light theme, edit the following variables:

    $light-background-from: #F5F5F5;
    $light-background-to:   #959595;


**CUSTOM THEME**  
You can provide a custom background color for your custom theme by editing this variable:

    $custom-background-color: #ccc;


### CUSTOM Theme

If you desire more flexibility with styling Sexy-CSS3-Flashes, you can optionally set the flashStyle to *custom* in _flashes.scss

    $flashStyle: custom;

*_custom-theme.scss*: Provided is a sass partial which contains the scss architecture to add your custom styles and css properties to. The commented styles are there to provide a basic starting point for styling the flashes.  
Add all your custom styles here.

## Animation Behavior

The animation behavior can be changed within flashes.js. The default time to display the flashes is 3 seconds; on mobile it is extended 2 seconds longer — 5 seconds by default. The time can be adjusted in javascripts/flashes.js.

## About

These CSS3 flashes were created on the grounds of providing better functionality and visual appeal. They look best in WebKit-based browsers and Firefox, with all other browsers degrading rather gracefully. If you use these flashes in your app, drop me a note and let me know. http://twitter.com/phillapier


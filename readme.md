# Ember.js TodoMVC Example with Hood.ie for storage and user auth.

Took [the original project](http://todomvc.com/architecture-examples/emberjs/) and made a few changes:

* Made a [Hood.ie data adapter](https://github.com/bubbafat/hoodietodoemberjs/blob/master/js/vendor/hoodie_adapter/hoodie_adapter.js) for data storage
* Added the basic signup/signin links (but did not bother to style them)
* Ignored a bunch of problems

## What problems?

Oh ... you know ... things like "when you log in you need to manually refresh to get the users todo items to show up.  I subscribed to the signin event and do a location.refresh() when that happens but it looks like hood.ie is resolving the data from its cache or something ... I have no idea.  I'm not going to debug it right now because hitting refresh works fine.

The signout event works though.  Go figure.

## Do I need to have my own hood.ie server?

Nah.  I'm running one.  You can use it.  The source already has the address in it.  I might turn it off someday.  You probably won't notice because when hood.ie is offline (or you aren't logged in) it just uses local storage.

## Anything else?

Don't use this.

Seriously.


#Yet Another URL Shortener!
##(Which is somewhat useless when it itself does not have a tiny URL, but you get the picture)
How to use:

Simply append:

>/new/http://www.yourURL.com

to this site's URL and activate!

Prepare to have your mind blown when it returns a JSON object with a new, shortened URL!

For example, say you enter the following:

>http://infinite-shelf-7295.herokuapp.com/new/http://www.data.gov

You would get back:

>{"old_url":"http://www.data.gov","new_url":"http://infinite-shelf-7295.herokuapp.com/75448"}

Wow! The new URL forwards you to the saved URL! LIKE MAGIC!

If this service were hosted under a short domain name, the produced url would almost always be far shorter than the submitted one. Thus: yet another URL shortener. How neat is that?

Kinda. It's kinda neat.

Uses Node.js, Express.js, and MongoDB/Mongoose.

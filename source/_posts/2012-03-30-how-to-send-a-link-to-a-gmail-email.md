---
layout: post
title: How to send a link to a Gmail email?
categories: [technical]
tags: []
status: publish
type: post
published: true
thumbnail: /img/posts/gmail.png
---
There aren't much things I'm missing from working in corpo, but saving and attaching emails from M$ Exchange is one of them. You could simply save an email, put that to JIRA or any other store and your grandchildren could read the communication that led to this solution. And even more important functionality was to send someone this response 'you wanted it so - here's the email: &lt;url to that exact email&gt;.
<!--break-->
The latter couldn't be done with Exchange, but at least I could attach that conversation.

So now being in a small, agile company devs would probably throw up when seeing Exchange. Everyone (including me) want to use GMail. But what about my beloved sending discussion functionality? I don't think GMail has an option to link to the message, <strong>but there's a solution</strong>. Not very good one or anything, but still worth sharing I think.

Go to your inbox, let's open some random spam message, settings &gt; show original (sorry for polish on s-shots):

<a href="http://blog.erbetowski.pl/wp-content/uploads/2012/03/gmail_settings1.png"><img class="aligncenter size-large wp-image-79" title="gmail_settings" src="http://blog.erbetowski.pl/wp-content/uploads/2012/03/gmail_settings1-1024x390.png" alt="" width="640" height="243" /></a>

&nbsp;

Then find message id

<a href="http://blog.erbetowski.pl/wp-content/uploads/2012/03/email_id.png"><img class="aligncenter size-large wp-image-80" title="email_id" src="http://blog.erbetowski.pl/wp-content/uploads/2012/03/email_id-1024x577.png" alt="" width="640" height="360" /></a>

And the ugly hack is that when searching for e-mails GMail searches message id as well, so let's simply search for it and send the link to whom we've been mailing to (message id stays the same for all inboxes). So the url is like

https://mail.google.com/mail/u/0/#search/[message id]

and in our case it's:

<a href="https://mail.google.com/mail/u/0/#search/bwwt0zvb12d1hjau60z0dqchs8bhce.14706468600.4473@mta802.e.digg.com">https://mail.google.com/mail/u/0/#search/bwwt0zvb12d1hjau60z0dqchs8bhce.14706468600.4473@mta802.e.digg.com</a>

And what the other person sees after opening is:

<a href="http://blog.erbetowski.pl/wp-content/uploads/2012/03/Screenshot-at-2012-03-30-151109.png"><img class="aligncenter size-large wp-image-81" title="Search result" src="http://blog.erbetowski.pl/wp-content/uploads/2012/03/Screenshot-at-2012-03-30-151109-1024x146.png" alt="" width="640" height="91" /></a>

Cheers
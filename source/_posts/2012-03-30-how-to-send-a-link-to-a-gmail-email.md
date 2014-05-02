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

The latter couldn't be done with Exchange, but at least I could attach that conversation.

So now being in a small, agile company devs would probably throw up when seeing Exchange. Everyone (including me) want to use GMail. But what about my beloved sending discussion functionality? I don't think GMail has an option to link to the message, <strong>but there's a solution</strong>. Not very good one or anything, but still worth sharing I think.

Go to your inbox, let's open some random spam message, settings &gt; show original:

![Context menu](/img/posts/2012-03-30-how-to-send-a-link-to-a-gmail-email/menu.jpg)

&nbsp;

Then find message id

![Message ID](/img/posts/2012-03-30-how-to-send-a-link-to-a-gmail-email/message_id.jpg)

And the ugly hack is that when searching for e-mails GMail searches message id as well, so let's simply search for it and send the link to whom we've been mailing to (message id stays the same for all inboxes). So the url is like

https://mail.google.com/mail/u/0/#search/rfc822msgid%3A[message id]

and in our case it's:

![Search](/img/posts/2012-03-30-how-to-send-a-link-to-a-gmail-email/search.jpg)

That's it, the link is ready to send.

---
layout: post
title: Method injection with Guice and Scala
categories:
- technical

tags: []
status: publish
type: post
published: true
thumbnail: /img/posts/scala_logo.png
---
This is English version of a <a href="http://scala.net.pl/wstrzykiwanie-metod-dzieki-guice/">post</a> I've written for <a href="http://scala.net.pl/wstrzykiwanie-metod-dzieki-guice/">Polish Scala User Group</a>.
I have moved Scala recently from hard and heavy J2EE/Spring world. I know hord hard is testing when you don't have a proper dependency injection mechanism. Mocking ability has been a priority for me for years now. On the other hand having several deps in object and delegating them work is not in the functional Spirit of Scala.

Scala makes it possible to move a step forward and inject methods, which gives you the pleasure of functional writing but still having object oriented flexibility.

Let's take a look at this example: let's say you're registering a user, and want to hash his password. But it's generally a good idea to add some salt. Not hardcoded one :-) So we keep a salt in our DB, then something that would calculate the has (a hasher) needs to obtain DB connection. And when registering a user we need a hasher instance:

{% gist 1861032 %}
<!--break-->

That is not the Scala beauty we could expect to see. What we want is: <em>password.hash. </em>So let's take advantage of Scala mixins to use hasher as a hidden dependency and an implicit that would extend String class with <em>hash </em>method:

{% gist 1860959 %}

Now we may mixin hashing capability to our class and take a look at beautiful, but still flexible and possible to mock or whateva piece of code:

{% gist 1860972 %}

Notice that thanks to minimal hasher scope UserRegistrator will never know about such details as hasher class nor such field existence.

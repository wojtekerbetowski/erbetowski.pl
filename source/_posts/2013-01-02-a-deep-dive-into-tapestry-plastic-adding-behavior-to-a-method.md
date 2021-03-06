---
layout: post
title: A deep dive into Tapestry Plastic – adding behavior to a method
categories: [technical]
tags: []
status: publish
type: post
published: true
date: 02/01/2013
thumbnail: /img/posts/tapestry.png
---
{% raw %}
In the <a title="A deep dive into Tapestry Plastic – part 1" href="http://blog.erbetowski.pl/index.php/plastic-1/" target="_blank">first part</a> we've prepared an environment for work. Now it's time to do some basic stuff with Plastic.
<!--break-->
The most basic AOP example often used in hello world examples is logging and we're gonna do that as well. To follow the work you might wanna fork from <a href="https://github.com/wojtekerbetowski/plastic-logging" target="_blank">GitHub project</a>.

So first to run a project we use Gradle, here's the configuration {% gist 4414700 %}

I'll create a simple nothing-producing method:{% gist 4414801 %}

Next let's prepare a specification, that tests whether our method actually has logging behavior. You don't need to know Spock to understand it. I will externalize creating a class reference to a method, so it'll be easier to add Plastic code in the next step. {% gist 4414910 %}

Of course no such behavior is there at the moment, so the spec fails:{% gist 4414897 %}

Let's add Plastic code now. To create an object of modified class we need to prepare <code>org.apache.tapestry5.plastic.PlasticManager</code>. This we may build using static builder methods in it's class, e.g.{% gist 4432985 %}

Next there's a place for a delegate (meaning class transforming delegation). For this we will use <code>org.apache.tapestry5.internal.plastic.StandardDelegate</code> adapter, which brings <code>org.apache.tapestry5.plastic.PlasticClassTransformer</code> interface to <code>Delegate</code> interface. So now we end up needing a transformer, inside of which we'll use an advice (<code>org.apache.tapestry5.plastic.MethodAdvice</code>). See creating and putting them together in the following snippet:{% gist 4433014 %}

As you have seen by now, <strong>Plastic is</strong> a pretty high level, object oriented and <strong>well designed</strong> tool for modifying classes. Although creating a simple case of adding an advise to a method requires a lot of boilerplate code.

In next part we'll go deeper into the Plastic API.
{% endraw %}


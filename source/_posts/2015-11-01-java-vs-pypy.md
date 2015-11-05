---
layout: post
title: PyPy vs Java - introduction
date: 2015-10-23 22:05:52
thumbnail: /img/posts/compare.png
---

I used to believe that Java has the fastest runtime to execute very typical, business apps. While it was possible to create a faster app with a low level language, I would bet that one wouldn't write it in a reasonable time. JVM, by the release of `1.6` became blazing fast. JIT made running bytecode incredibly fast and one could take the advantage of that without even modifying existing code (furthermore, not even recompiling existing bytecode).

PyPy, on the other hand, is an alternative implementation of Python language (next to CPython, IronPython and Jython). It is known of it's JIT compiler and support for parallel computing ~~without Global Interpreter Lock (GIL)~~[^first].

[^first]: Thanks [@haxoza](https://twitter.com/haxoza/status/662034220852858880) for noticing it. [PyPy has GIL](http://doc.pypy.org/en/latest/faq.html#does-pypy-have-a-gil-why). My mistake.

Since I'm familiar with both of these languages, I wanted to know, which one performs better in several different scenarios. I use them for scripting, web apps and integration.

## How to compare them?
Most performance tests use single or batch of algorithms, implement them (either idiomatic or optimized) and execute against sets of data. Another way is to use a more complete stack (including popular libraries) to solve basic, but common problems. We want to try both of these ways.

Let's start with whatever there already is available.

## Findings

### Who is developing them?
[This StackOverflow answer](http://stackoverflow.com/a/5172833/990074) points out, how important is the team working on the VM optimizations. Sun involved a team specializing in that kind of optimizations. Although PyPy project [team page](http://pypy.org/people.html) lists several smart developers, it doesn't reveal that kind of previous experience. Also I wonder, whether core PyPy contributors are spending most of their working time on PyPy, or is it a side project for them.

### Existing benchmarks
Checking the [benchmark game](http://benchmarksgame.alioth.debian.org/) all I found was Java vs pure Python comparison. It supports the intuition, that for a number of problems, there's [a gulf between them](http://benchmarksgame.alioth.debian.org/u64q/python.html) (up to **42 times slower**). This doesn't necessarily apply to PyPy though.

I wasn't able to find a single benchmark comparing the two.

### Side note
This post is completely subjective and targets only aspects, that I'm finding important. If you'd like to contribute or suggest a change - then please, leave a comment.

## Coming soon
I plan to compare the performance of the two in three scenarios - simple algorithm, a typical script and a small, but full-stack web application. Stay tuned!

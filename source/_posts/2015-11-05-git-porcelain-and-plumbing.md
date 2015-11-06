---
layout: post
title: Git - Plumbing and Porcelain
date: 2015-11-06 18:02:09
thumbnail: /img/posts/plumbing.jpg
---

## The workshop

If you were working with Git, you are probably familiar with the terms 'Plumbing' and 'Porcelain'. If not, take a look at [this page](https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain) from the official Git book.

Recently, I was asked to prepare a Git workshop for our customer's developers. Most of the attendees were supposed to be beginners, with better experience in another VCS. It was challenging for me, to prepare a scope, which would be close to optimal.

## The scope

My initial idea was to prepare a bunch of most popular commands, which they could use on a daily basis. Commands like: `add`, `commit`, `fetch`, `merge`, `rebase`, `stage`, and few more, together with another bunch of options. An important drawback of this method was that they would very likely forget most of it, by the time they start working with Git on a daily basis (the migration is coming shortly).

Another option is going deep into internals and discuss how Git really works. It's the hard way of learning Git, but hopefully, this kind of knowledge will last longer.

## The plumbing

Git book defines plumbing commands group as the low-level and with worse UX (yeah, right, like Git had a nice UX elsewhere). The nice thing about them is that they are very close to Git internal model terms. And they are not consistent with other popular VCSs in use.

Knowing them leads to understanding of underlying abstraction, which is very simple - an immutable[^immutability] database of file trees (objects) and an acyclic graph of these trees. When you actually start operating on these, then I introduce refs (branch, tag, stash, remote branch). Now you don't have an understanding of these refs, as essentially different concepts. You may actually see, they are only convention for naming graph nodes.

You could say that [every abstraction sometimes leaks](http://www.joelonsoftware.com/articles/LeakyAbstractions.html). But with Git, in opposite to other VCSs I was using, the leakage is huge.

[^immutability]: Actually you may delete from it by running `purge` or `gc`, but it is quite rare.

## The learning

I imagine, that in a long perspective you would save a lot of time understanding that simple concept and search for useful options on StackOverflow, rather than in opposite case. To make that learning experience even stronger, I've asked participants to complete few exercises on these bare terms. For example, follow this simple flow. Fetch some data, rebase on top of it and make a merge with another branch. Sounds simple, right? Here comes the hard part - rollback to the initial state! It's not as hard as you might think it is, when you operate in very simple graph/tree terms.

## The feedback

I hope you enjoyed this note. I strongly wish to read your opinion on this approach. By leaving a comment you encourage me to create more blog posts, share even more knowledge and generally makes me a happier person!

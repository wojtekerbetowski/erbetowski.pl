---
layout: post
title: Git rebasing lesson learned
categories:
- technical
tags: []
status: publish
type: post
published: true
thumbnail: /img/posts/git.png
---
Some days ago I learned a painful lesson I want to share with you. Lately I discovered git rebasing (I'm a fresh git user) and rebasing is awesome. First let me explain what it is as some of you might not know.
<!--break-->
<h2>Rebasing</h2>
For me rebasing is merging 2.0. Assume you have a branch and some new code was introduced to master (or default or trunk, whatever). Now code tree looks like this (A, B, C, X, Y, Z are some commits) [sorry for those awful images of mine]:

<a style="color: #ff4b33;" href="http://blog.erbetowski.pl/wp-content/uploads/2011/11/codeTree-4.png"><img class="aligncenter size-full wp-image-68" style="border-style: initial; border-color: initial;" title="codeTree (4)" src="http://blog.erbetowski.pl/wp-content/uploads/2011/11/codeTree-4.png" alt="" width="412" height="100" /></a>
<div><span style="font-size: small;"><span class="Apple-style-span" style="line-height: 24px;"><span style="text-decoration: underline;">
</span></span></span>So when we want to check in the code we have to merge it. But instead of merging (which has it issues, like less clean history or unnecessary merge commit) let's try to delete commits X, Y, Z and apply them to our HEAD which is on top of C commit. After such operation our code tree looks like this:</div>
<a style="color: #ff4b33;" href="http://blog.erbetowski.pl/wp-content/uploads/2011/11/codeTree-3.png"><img class="aligncenter size-full wp-image-67" style="border-style: initial; border-color: initial;" title="codeTree (3)" src="http://blog.erbetowski.pl/wp-content/uploads/2011/11/codeTree-3.png" alt="" width="511" height="100" /></a><a href="http://blog.erbetowski.pl/wp-content/uploads/2011/11/codeTree-4.png">
</a><a href="http://blog.erbetowski.pl/wp-content/uploads/2011/11/codeTree-2.png">
</a>Pretty straitforward isn't it? History will be proud of you if you switch from merges to rebases. But remember X' is not the same as X (if i.e. there was a conflict between C and X, he had to resolve it while rebasing, so X changed to X').
<h2>More advanced example</h2>
Ok so let's get back to real world. Let's say we have some changes in branch feature1branch and we finished working on it. While waiting for code review to be done we want to start to work on feature2 in feature2branch, but we need some changes we made in first branch. So we build feature2branch on top of feature1branch. Here's the graph:

<a href="http://blog.erbetowski.pl/wp-content/uploads/2011/11/codeTree-5.png"><img class="aligncenter size-full wp-image-69" title="codeTree (5)" src="http://blog.erbetowski.pl/wp-content/uploads/2011/11/codeTree-5.png" alt="" width="570" height="152" /></a>Code review is done, and we are free to check in to master. So we go to branch feature1branch and execute <em>rebase master</em>
<h2>Crash</h2>
What would I expect to see is

<a style="color: #ff4b33; text-align: center;" href="http://blog.erbetowski.pl/wp-content/uploads/2011/11/codeTree-7.png"><img class="aligncenter size-full wp-image-70" style="border-style: initial; border-color: initial;" title="codeTree (7)" src="http://blog.erbetowski.pl/wp-content/uploads/2011/11/codeTree-7.png" alt="" width="795" height="151" /></a>
<p style="text-align: left;">and what we actually get is:</p>
<p style="text-align: left;"><a href="http://blog.erbetowski.pl/wp-content/uploads/2011/11/codeTree-6.png"><img class="aligncenter size-full wp-image-71" title="codeTree (6)" src="http://blog.erbetowski.pl/wp-content/uploads/2011/11/codeTree-6.png" alt="" width="570" height="152" /></a>See the difference? Branch feature2branch now has it's own copy of commits X, Y, Z and isn't changed a bit! Rebasing only worked for the branch we specified. Pretty cool is you think about it, but misunderstanding this costed me some time couple of days ago.</p>
<p style="text-align: center;"></p>
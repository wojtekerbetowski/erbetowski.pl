---
layout: blank
title: Git training plan
date: 2015-12-12 18:08:22
sitemap: false
---

# Init Git workshops script

## Before

* what projects are you working on?
* how well do you know Git (vs any VCS) - put your names
* about me

## Introduction

* who and why created it
* poor API
* huge community
* git command line vs UI
* the good parts
  * documented
  * fast
  * distributed
  * popular
* plan for next 3 days

## Simple commit

[Git book link](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)

Set author

```
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

* initialize a new repository
* list files in the directory
* create a simple commit
* view history

## Intro to config, aliases, history

Git book links: 
[history](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)
[config](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration)
[alias](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases)

* git log
* create an alias
* git hist

Hist alias:
```# ~/.gitconfig
[alias]
  hist = log --pretty=format:'%C(yellow)[%ad]%C(reset) %C(green)[%h]%C(reset) | %C(red)%s %C(bold red){{%an}}%C(reset) %C(blue)%d%C(reset)' --graph --date=short
```

## Branching
[Git book reference](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)

* prepare repository
* list branches
* create a branch
* activate a branch
* create a branch with checkout
* more complex example

## Conflicts
[Git book reference](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)

* create a simple case
* make a merge (no conflict)
* create a conflicting change
* make a conflicting merge
* make an opposite merge
* make a FF merge
* make an intermediate merge

## Cherry pick and rebasing

[Git book reference](https://git-scm.com/book/en/v2/Git-Branching-Rebasing)

* create a simple tree
* create branches in different places
* manipulate the tree (merge, checkout, merge again)
* cherry-pick a commit
* cherry-pick a branch
* rebase
* conflict rebase, abort, continue

## Interactive rebasing

* the command
* usages
* exercise

## More on configuration?
[Git book reference](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration)

e.g. `git config my.own.space.is here`

* custom entries
* common things (editor, signing, core, plugins, aliases)

## Advanced aliases 

[Git book reference](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases)

* creating simple alias (last, unstage, co, st)
* reading hist
* system command

# Using git help

[Git book reference](https://git-scm.com/book/en/v2/Getting-Started-Getting-Help)

`git help command`

## Annotate/blame

[Git book reference](https://git-scm.com/docs/git-blame)

* simple blame
* ex: limit lines

## Remote repository

[Git book reference](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)

* clone to local
* make an origin
* another clone
* work with these 3 repositories
* push, pull, fetch
* rebase/merge

## Git stash

[Git book reference](https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning)

* create, apply, pop, delete

## OSS flow

* prepare repositories
* explain flow and rationale
* exercise

## Interactive staging

[Git book reference](https://git-scm.com/book/en/v2/Git-Tools-Interactive-Staging)

* git add -p
* git commit -p

## Git revert and reset

* simple reverting a commit
* git reset --hard
* about git reset

## Git mental model

[Git book reference](https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain)

* git in git
* commits, add, merge, ...

## Git SVN

### Git vs SVN - comparison

Centralized vs decentralized
Access control
Partial Checkout (SVN)
Shorter and Predictable Revision Numbers (SVN)
Performance (Git)

### How to implement?

### Exercise

mkdir -p $HOME/.svnrepos/
svnadmin create ~/.svnrepos/my-repos
svn mkdir -m "Create directory structure." file://$HOME/.svnrepos/my-repos/trunk file://$HOME/.svnrepos/my-repos/branches file://$HOME/.svnrepos/my-repos/tags

mkdir my_svn_repo
cd my_svn_repo

svn checkout file://$HOME/.svnrepos/my-repos/trunk ./

touch first_file
svn add --force ./
svn commit -m "Initial import"
svn up

--------------

git commit ...

git svn dcommit

## Tags

* simple tagging
* annotated tags
* sign tags
* sign commits

## Git flow

* introduction and motivation
* exercise

## Submodules

[Git book reference](https://git-scm.com/book/en/v2/Git-Tools-Submodules)

* introduction
* clone & update
* clone recursive
* add submodule
* push


## This and that

Commit --amend
bisect
git pull & pull -r
git mv & git rm
.gitignore
alias
stash & apply & pop
annotate (jak byście napisali)
prune (czyści nieosiagalne)
git revert vs git reset --hard HEAD^
git tag

## Quiz

Command list:
* add
* cherry-pick
* bisect
* svn
* rebase
* pull
* commit
* cat-object
* fetch
* checkout
* clone
* status
* hist
* stash
* reset
* revert
* config
* tag
* gc
* prune
* blame
* help

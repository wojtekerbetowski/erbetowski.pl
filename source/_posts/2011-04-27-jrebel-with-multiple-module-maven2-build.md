---
layout: post
title: JRebel with multiple module Maven2 build
categories:
- technical
tags:
- Java
- JavaRebel
- JRebel
- Maven
status: publish
type: post
published: true
date: 04/27/2011
thumbnail: /img/posts/jrebel.png
comments: true
---
This post is dedicated to put together Maven2 project with JRebel reloading.

Until now i worked only with single module apps or apps I didn't need to reload dynamically
because of all the tests that didn't need application started.

But now is the day to do the configuration and I had some trouble with it.
I hope this post helps someone not to loose 2-3 hours senseless, because it is an extremely easy thing to do.

``` xml jrebel.xml
<?xml version="1.0" encoding="UTF-8"?>
<application
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns="http://www.zeroturnaround.com"
  xsi:schemaLocation="http://www.zeroturnaround.com http://www.zeroturnaround.com/alderaan/rebel-2_0.xsd">
  <classpath>
    <dir name="/home/wojtek/Projects/roche/multiapp/first/target/classes/" />
  </classpath>
</application>
```

Now when we add JRebel as javaagent to app it will start by reading this class and knows to check the directory
(instead of dir we can watch jars and other stuff). Like in our example we would probably like to exclude some paths
in directory not to scan the whole folder because it's just too expensive.

How to do that? Just add exclude/include tags in ```<dir>``` tag.

JRebel is a smart beast that can scan all the resources in classpath, including dependency jars.
All we need to do is to put proper rebel.xml into each one of the (each we want to follow).
Each has to say where JRebel can find new classes.

I just lost about 2 hours because I called the file ```jrebel.xml``` instead of rebel.xml and wondered why doesn't it scan path... :-/

Next thing to automate all of this is to add JRebel support to Maven build lifecycle,
then we don't need to create rebel.xml by had, and all of developers can use unified pom.xml
(which will add project root path to ```rebel.xml```). Remember to do this on all modules you want to have reloaded!
Not just root or web project! Here's how mine looks:

``` xml part of pom.xml
<plugin>
    <groupId>org.zeroturnaround</groupId>
    <artifactId>jrebel-maven-plugin</artifactId>
    <executions>
        <execution>
            <id>generate-rebel-xml</id>
            <phase>process-resources</phase>
            <goals>
                <goal>generate</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```



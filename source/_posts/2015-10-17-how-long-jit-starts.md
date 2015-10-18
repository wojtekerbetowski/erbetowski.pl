---
layout: post
title: How long does it take for JIT in JVM to start?
date: 2015-10-17 15:22:18
thumbnail: /img/posts/java-oracle.png
---
JIT stands for "just in time". In JVM it's a neat mechanism that makes it easy to go from low execution speed, common to interpreters, to speed similar to native code execution, without involving any of software developer's work (at least in theory).

Whenever I wrote a utility script in Groovy, I soon found myself translating it to bash or python. Why? Because of the **slow startup** phase. This made me curious of what exactly makes Java so slow at the start time. One of the ideas was JIT.
When you think of it - it's a kind of monitor, working alongside your application, counting method calls, compiling them to native code, skipping irrelevant code, etc. How expensive must that be, right?

Lately I noticed `-Xint` flag to <code>java</code> command, which makes Java Virtual Machine to start in *interpreter-only* mode. This means that JIT compiler will be turned off in that Java process.

This way we may check what is the overhead of starting JIT. Let's start with a very simple example, which will cause JIT to drop some of the code (since `Math.sqrt` doesn't have side effects, so it's safe for JIT to drop it).

```
public void doingNothingForALongTime() {
  Math.sqrt(10.0);
}

public static void main(String[] args) {
  for (long i = 0; i < LOOP_COUNT; i++) {
    new EmptyLoops().doingNothingForALongTime();
  }
  System.out.println("Done");
}```

After compilation we may run it with an insight to JIT actions:

```
$ java -XX:+PrintCompilation EmptyLoops
89    1       3       java.lang.String::hashCode (55 bytes)
...
// JIT noticed many calls to the constructor and method
111   29       3       EmptyLoops::<init> (5 bytes)
111   30       3       EmptyLoops::doingNothingForALongTime (8 bytes)
112   31       4       EmptyLoops::<init> (5 bytes)
112   29       3       EmptyLoops::<init> (5 bytes)   made not entrant
112   32       4       EmptyLoops::doingNothingForALongTime (8 bytes)
112   30       3       EmptyLoops::doingNothingForALongTime (8 bytes)   made not
entrant
Done```

What happened right there is out of this post's scope, so let's just execute that with `-Xint` flag:

```
$java -Xint -XX:+PrintCompilation EmptyLoops
Done```

It works. JIT didn't generate any outputs as it was disabled.

Let's see how it influenced execution times:

loops | jit enabled | jit disabled
-|-|-
10<sup>0</sup>|0.16s|0.15s
10<sup>7</sup>|0.19s | 2.77s

As expected - JIT dropped irrelevant code and ended up with a speed up for many loops. But that's not our target. When you look at the first scenario, you will notice there's no speedup in running that simple class. So JIT seems not to cause any overhead.

Next, let's check the same test for running a simple Groovy script (call system command, wait for it's finish, print output):

```
time groovy -e "println 'echo Hello from Groovy'.execute().text"```
Results (on avarage):

jit enabled | jit disabled
-|-
0.82s|1.01s

On avarage disabling JIT even caused execution time to increase by 23%! Which means that even when running the tiniest Groovy script, JIT already makes a big improvement. How much exactly work is being involved? Take a look:

```
$ JAVA_OPTS="-XX:+PrintCompilation" groovy -e "println 'echo Hello from Groovy'.execute().text" | wc -l
900```

That's it for now. There's no reason to disable JIT in order to make JVM start faster. Soon I'll take a look at some other things.

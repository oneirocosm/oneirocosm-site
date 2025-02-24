---
title: "Creating This Website"
layout: "../../layouts/MainLayout.astro"
description: "The trials and tribulations I went through to set up the initial version of this website."
---

## Why Make a Website?

I've wanted to create a personal website for a long time. I'm sure plenty of other people share that sentiment. And I'm sure many of them also found reasons to keep putting it off time and time again. I don't want to count the number of excuses I've made in the process. "I need to get better at web design first." "It will take up too much time." "It won't be good enough." And so on&mdash;plenty of excuses, but not a lot of progress.

The most difficult of these issues has been the perfectionism part for sure. After all, if I'm going to create a _public website_ on the _internet_, it had better be good, right? What's that thing people say about first impressions again? I honestly don't remember what the saying is, but I remember the idea is that they're important. And if I refer to this as something like a portfolio, then I need to make it really stand out. So, I make a small website or two in order to practice, and they kind of fall by the wayside and fade away. But soon enough, I will have learned what I need to. What's it going to take? Maybe another half-dozen more? Maybe then it will be good enough.

But here's the thing. Honestly, it will probably never feel good enough. There will always be something I'm not okay with. And what if I do eventually perfect what I'm trying to do? What then? I make the site and then that's it. I add a new article here and there, but I will always be too afraid to innovate on it. I will be too afraid of breaking something&mdash;and there's nothing necessarily wrong with that for a website, but there's a problem with that for me.

The truth is, I'm tired. To be specific, I'm tired of doing nothing. I'm tired of sitting by silently and trying to look perfect. I'm sooo tired of perfect. Perfect is boring. Perfect is stagnant. And yet, a large part of me is so obsessed with it and really struggles to let it go. Well, hopefully this site is a step in me learning to let it go. Not that I expect this to solve everything&mdash;on the contrary, I know I'll still struggle with this in the future. Instead, I'm trying to think of this as an experiment.

## An Experiment

Perhaps it's a little weird to suggest a personal website as an experiment. After all, experimental kind of flies in the face of everything I just said about maintaining appearances. And that is 100% correct. It flies in the face of it, and I am glad that it does! If it gives people a bad first impression because it doesn't work properly, then so what? At least I'm trying something. And I'm sure I'll have more fun this way instead of doing nothing.

And if I don't have fun with it, well, that's a valid result to an experiment too. Maybe I end up abandoning this completely in a week. Or maybe a month. Maybe it makes it half of a year and I decide it isn't for me. If it was a dedicated portfolio, I would have an obligation to maintain it constantly&mdash;even if I didn't enjoy it. But as an experiment, it doesn't have that same weight. If it isn't enjoyable, I'll leave it behind and move on to find something new. And at least I'll learn something along the way.

## Content

"Okay," I hear you asking, "what is this going to be about then?" I'm glad you asked. It's going to be about whatever I feel like it will be about in the moment. Maybe one week I'll write about electronics and the next I'll be talking about the hottest new dance craze (probably not, but you get the idea). I cannot let this project become something that boxes me in. I already feel too boxed-in as is. I am trying to embrace what comes to me and explore the topics that I'm drawn to. And if I'm lucky, this will be a good sounding-board for that. It may just be that the areas I write about more are the ones I'm most drawn to. (Then again, there could be plenty of other reasons for that such as accessability, but it's the best idea I've got for now.)

Some of you reading this might be thinking, "A blog without a central topic? Isn't that terrible for SEO?" And in response, I say, two things. First, the word blog is misleading. Second, yes&mdash;it's absolutely awful for SEO. And I don't care. This website is for me first and foremost. And my hope is that in pursuing that, I'll manage to reach those who connect with it as well.

But let me step back a bit. I said the word _blog_ was misleading. And that's mostly because I don't want to limit myself to just putting articles on here. Perhaps one day I'll have the urge to make some sort of interactive graph thing as well? Maybe I'll add something for video-streaming. Honestly, who knows. But I do know that I want to keep those possibilities open. Granted, I'm being pedantic there&mdash;you can call it a blog if you'd like. I'll probably slip up a few times and do the same thing myself.

## Disclaimer

And I should take a moment to step aside and say that this could read like I'm being extremely petulant and waxing poetic about extremely obvious ideas. And maybe I am. But it feels important to me to start off with this so everyone knows where I'm coming from. And maybe it will resonate with at least one person who feels the same way&mdash;I'd certainly consider that a win.

Anyway, if you want to avoid technical stuff, I'm about to get into the process of making the site, so this is probably a good point to bow out. I'll try to avoid making this first post too technical, but no promises. And if you are in that group leaving now, thanks for reading up to here&mdash;I really appreciate it.

## A Platform

When I first planned this site, one of the big questions I had was what sort of tools I would use to build it. On the one hand, I could keep things very simple with HTML and CSS. Or I could just use a regular static site generator like Hugo and just write markdown. Or maybe I could even lean into a javascript framework and use some of the nice tools from there.

All options are valid, but I have a few reasons to narrow it down. First of all, I don't want to limit this to just be markdown&mdash;perhaps one day, I'll want to add small javascript components or something like that. I don't want to be too pedantic with my planning, but I also don't want to force myself into a corner. While most static site generators have ways to work around this, they are often catered to pages being purely in markdown, and it can be a pain to work around that. So, that leaves the raw HTML/CSS and javascript framework options. Raw HTML/CSS can be an even bigger pain to write, so the frameworks look promising, but they have a major problem&mdash;almost everything written in them is reliant on javascript.

Originally, I was planning on writing everything using Svelte and Sveltekit. And don't get me wrong, it looks like a great framework&mdash;in fact, I am still planning on using Svelte for some areas of this. One of its main advantages compared to other frameworks is that it is capable of compiling javascript at build-time instead of waiting until the site is visited by a web-browser. But it seems that Sveltekit only has the means to do this if 100% of the page's javascript can be compiled out.

That may not seem like such a big deal, and maybe it isn't to most people, but it is to me. Not every device is capable of using javascript, and if a device like that visits your javascript site, they aren't going to be able to do much. So why use it at all? Well, there are a lot of things that need javasciprt to run. But there are also a lot of places were it's used and it isn't needed. For instance, a decent navigation bar can be written in pure HTML and CSS. And then it could even be extended with javascript that adds some quality-of-life features. If the browser visiting doesn't have javascript enabled, it will still be able to use the bar. But if the bar was entirely written in javascript, it wouldn't be able to interact at all. While I'm not sure that the version of this website that exists at the time of writing will be 100% navigable without javascript, that is a goal I absolutely want to attain.

So the obvious response is to write as little Javascript as possible. But this has its own issues&mspace;mainly, it's incredibly tedious. It would be nice to use some of the features that it has, but needs to be done in a way where the website isn't reliant on it. For this, one place to look is the framework called Svelte. Svelte is nice because it allows some of the javascript code to be "compiled" when the site is built. Then, it becomes possible to use the functionality of the javascript code without actually using javascript in the browser. It's a win-win situation. On top of that, it adds functionality such as "stores" which allow for even more javascript functionality to work even without the browser running it. And while that may seem a bit scary, it's very limited in terms of what it's capable of, so there aren't major security concerns to my knowledge.

So, Svelte becomes a great option! Granted, it isn't a full framework for a site&mdash;it's almost more like a language than a framework. For something more framework-like, it's ideal to turn toward something like Sveltekit. This adds the page routing and other additional features that turn a bunch of components into a full-fledged website. It's still in Beta, but it's quite stable despite that. So I decided to give it a try for this website, but I ran into a couple problems...

## Attempt Number One

First off, Sveltekit is fairly new. In addition to that causing the expected issues with stability, it also means there aren't as many resources available to people who want to use it. In particular, that means there aren't a ton of guides out there. I was able to find a few, but it was still a little more limited than I'd like. For instance, finding something making blogposts with Sveltekit, Typescript, and pnpm is a bit too niche to find exactly. So, you kind of have to cobble together things from different tutorials and try to make it work. And don't get me wrong&mdash;that's great for learning purposes, but it's less great when trying to make something quickly. And getting something out the door quickly is what I'm hoping for in this case. Hopefully, it will build momentum to carry me forward.

So, that's a pain, but it's one I'm able to work around. The bigger problem I ran into goes back to javascript. So, it turns out, Sveltekit (and Svelte itself) can only opt out of javascript on a per-page basis. Ideally, I'd like to be able to opt out of it on a per-component basis if not more granular than that. For this, I need to look for something that supports _partial hydration_, which is just a fancy way to say, it compiles the javascript it can ahead-of-time and leaves the rest to be used at runtime. It turns out this is a surprisingly new feature in front-end websites, so there aren't a ton of options, but there are enough. For instance, on the static site side, there's a framework called elder.js which has the goal of providing partial hydration to svelte. It seems like a good option, but I've never used it before. Instead, I opted for a different tool called _Astro Build_.

## Attempt Number Two

I've used Astro to do something in the past, but it wasn't my first choice for this because it is somewhat unstable at the time of writing. This is because, like Sveltekit and Elder.js, it is fairly new. Like the other two, it is also in beta, so there are a few things that need to be worked out. This gave me a few issues when I worked with it in the past, so I was hesitant to jump back to it so quickly, but after taking another look, it seems like it's stabilized quite a bit since I last used it. Not to mention, it has some other features that I really like.

For one, it isn't tied to any one particular javascript framework. You can mix and match components from various frameworks to your heart's content. Now, I might not actually need to do that, but it's pretty cool to consider. But the main reason I'm using it is that it is kind of the beacon that seems to really be popularizing partial hydration. And that means it has a fairly large community with a lot of resources. And since I'm trying to get to a result quickly without too much finagling on my side, this is just what I need. And maybe it turns out, this isn't what I end up needing. But until then, this seems like a perfect fit.

## The Process of Building

First thing first, I needed to get a better idea for where Astro is at the moment. So I build a few of the templates to see what they were offering&mdash;in particular, I looked at the "Blog" theme and the "Svelte-Portfolio" theme. There's certainly a lot of good there, but they weren't exactly what I was looking for. So I decided to start with the blank project instead.

I'm a bit particular about my development environment, so I set up my repository to have the ability to use sass for css styling and Typescript for Javascript. I also, set up prettier.js for code formatting and eslint as a linting tool. And I should also mention, that I decided to use pnpm as a package manager&mdash;it's not the most popular, but it has a lot of really nice features that I could write an entire post on. In any case, these tools aren't strictly necessary, but they are useful if you know how to use them (which is something I will be getting into a bit later).

I should also mention that, I'm writing this website using vscode as an editor. Astro has a plugin for vscode that can make development easier, but the code-oss version (which uses the open-vsx registry) of it that exists on Arch Linux doesn't have the plugin in the available extensions. So, I had to manually download it and install via the command line. It looks like there has been a plan to add it to the open-vsx registry for quite some time, but it hasn't been done yet. So I may try to do that in the future if I get a bit of spare time.

Anyway, from there, the next thing to do was to actually write posts. So, I began writing this post and the Nintendo Switch battery post as a good starting point. I did this using the markdown component astro provided which makes everything easy to format. This isn't permanent, but it is a great starting point to have something on the page. Then, I moved on to writing the basic structure for the home page. At this point, the site isn't exactly pretty, but it at least has some content that will let me see what the styling looks like. Which makes it the perfect next step.

## Styling

I've written some CSS in the past, but I'm by no means an expert at it. Furthermore, when I look at the Astro recommendations, they recommend something called Utility-first CSS which isn't something I've ever used. But, it turns out, that isn't an issue because there's a great library that will take care of that for me. Tailwind CSS to the rescue.

Basically, the idea here is that Tailwind creates a bunch of CSS classes that I sprinkle onto my HTML elements to style them. Some argue that this violates something called the Separation of Concerns&mdash;that is, the idea that HTML handles the structure of the content and CSS handles the styling. But honestly, I've never been super keen on that idea in the first place. Don't get me wrong, it's a great idea in theory; but in practice, it's caused me me no shortage of trouble. Nothing against anyone who prefers that, but I just have had trouble making it work for me.

Technically, I could style my CSS this way and avoid using a library altogether, but in the interest of getting things together quickly, a library is a good fit. With this, I began looking up examples for the navigation bar at the top. And then, with that in place, I began looking into setting up dark mode. Unfortunately, dark mode is dependent on javascript in the browser, but that's something I'm going to need to be okay with until I can figure something else out.

## Markdown

At this point, I ran into a small issue. It would be ideal for me to use markdown for long strings of text like the one you're needing right now. Astro makes this easy with the included Markdown component; however, there is a small issue. Because Markdown hides the individual details of text, lists, headers, tables, etc., it becomes impossible to add classes to those individual component. Which isn't an issue with Astro itself&mdash;it's more of an issue with how CSS classes interact with Markdown. It's possible to write some generic CSS to get around it, but without access to the Markdown component, I'd have to jump through a bunch of hoops.

Luckily, I'm not the first person to run into this issue. And even more importantly, I'm not the first person to run into this issue while using Tailwind CSS. Someone took the liberty of creating a plugin that handles this exact case. I added the plugin, and the formatting worked almost perfectly&mdash;I say almost because it didn't update properly with dark mode. But after a little more searching, I found some options I could add to the tailwind config file to correct that.

## Finishing Up

With all of that out of the way, I began tweaking a few places that could use improvement. I added the correct favicon and threw in some fun things like a 404 page because why not. All that was left at this point was to actually put the site on the internet. While I do eventually want to manually set up some website stuff on a server, in the interest of getting things done quickly, I turned to gitlab. I already use it for hosting my git repositories, so it made sense to start there. I added a config file and it was all set. From there, I just had to point it to the proper url, and everything was set.

## What's Next?

Well, hopefully, this is just the beginning of this, but who can say? After all, I'm back to work tomorrow, and with that I'll lose a lot of the time that I had available to me over the past week. That said, I'm glad I got this set-up in the first place. Even if it doesn't end up going anywhere, I learned quite a bit from it, and now I'm pretty proud of what I made&mdash;even if it doesn't 100% work right.

But I do expect I will have a couple other things to post here. For instance, I'm still halfway through my Nintendo Switch fiasco, so it will be interesting to see where that goes. Not to mention, I have a ton of other small things I want to work on&mdash;and any one of them could end up being a post here depending on how I feel about it. This website exists to open my possibilities in the future instead of limiting them. And I'm really looking forward to that!

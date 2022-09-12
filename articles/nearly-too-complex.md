---
title: 'I nearly made this website WAY too complex'
metaDesc: 'Here is what I ended up using instead.'
date: '2022-09-11'
tags:
  - nextjs
---

Yes, this very website you're looking at now.

For a few weeks now I've been planning to re-build my portfolio site to showcase my experience, and share a bit about myself. It's been nearly three years since the last time I compiled my portfolio, as I've since been heads down building UIs across [Trader Interactive](https://www.crunchbase.com/organization/trader-interactive)'s many web apps.

The requirements I had for this version of my site were:

- A resume + skills summary
- A blog posting area
- My portfolio projects with:
  - A way to browse projects
  - Expanded project details 
  - Links to live sites
- Contact info and social links

## Plan A

With my requirements defined, I started exploring how I'd handle the data side of things. This was totally brand new territory for me - I'm a front end guy, I don't do data.

In the past, when I've needed to spin up similar projects that need a good chunk of data, I've defaulted to Wordpress since it's such a standard tool and has huge support. But I really didn't want to do that this time around. It just felt wrong in 2022.

So I kept exploring.

I looked into some headless CMS options. I demoed [Strapi](https://strapi.io/) which seemed neat and feature-rich, and read about alternatives like [Sanity](https://www.sanity.io/) and [Contentful](https://www.contentful.com/). I also wondered if some other solutions like Firebase could do the trick? Firebase sounds cool.

Then I started to worry that it might be bad to use some of these pre-built tools. Maybe I should set up my own database!

My first instinct was to reach for SQL since it's the DB I've used the most in the past (albeit not very much). It's the tried and true solution. But what about MongoDB?! That might open some cool doors down the line when I decide to add big new features to the site! But on the other hand, maybe there are even cooler, newer DBs now that I need to explore!

I ended up deciding to stick with SQL. 

## Change of plans

Then I had something of an epiphany:

I don't really have any personal projects put together that I'd be proud to showcase... that's a problem.

I have hard drives with web apps half-built but never deployed, and I have dozens of [chaotic codepen prototypes](https://codepen.io/josh-howson), but  

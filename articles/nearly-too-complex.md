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

With my requirements defined, I started exploring how I'd handle the data side of things. This was brand new territory for me - I'm a front end guy, I don't do data.

In the past, when I've needed to spin up similar projects that need a good chunk of data, I've defaulted to Wordpress since it's such a standard tool and has huge support. But I wanted to avoid that this time. It feels wrong in 2022.

So I kept exploring.

I looked into some headless CMS options. I demoed [Strapi](https://strapi.io/) which seemed neat and feature-rich, and read about alternatives like [Sanity](https://www.sanity.io/) and [Contentful](https://www.contentful.com/). I also wondered if some other solutions like Firebase could do the trick? Firebase seems good.

Then I started to worry that it might be bad to use these pre-built tools. Maybe I should set up my own database!

My first instinct was to reach for SQL since it's the DB I've used the most in the past (albeit not very much). It's the tried and true solution. But what about MongoDB?! That might open some cool doors when I add big new features to the site! But on the other hand, maybe there are even cooler, newer DBs now that I need to explore!

I ended up deciding to stick with SQL. 

## But there was a change of plans

I then had something of an epiphany:

I don't *really* have any personal projects put together that I'd be proud to showcase... and that's a problem if I'm trying to build a *portfolio* website.

I have hard drives with web apps half-built but never finalized, as well as dozens of [chaotic codepen prototypes](https://codepen.io/josh-howson), but I have no personal project I would consider worth sharing.

In light of this, I decided I'd shift the purpose of this website from a portfolio with samples of my work, to a blog where I talk about problems I encountered during my work projects, as well as things I've learned along the way. I will also probably post about non-development things that are worth sharing.

## My stack

I remember once hearing a developer say that they store markdown on GitHub to generate their website blog. If the only dynamic data on my site was now the blog section, this would be the perfect, simple solution for my use case. And that's what I did.


So here is the final stack I ended up using to build this site:

##### Framework: Next.js (with TypeScript)

I mainly chose to build in Next.js because I am most familiar with it, and the developer experience is great. I am also a big fan of component-based architecture, so I enjoy building in React or similar frameworks.

It has a few features worth noting, which work well for a simple blog like this one:

- Server side generation, and dynamic routes for the article pages
- `getStaticPaths` - pre-generates said routes at build time for speed
- `getStaticProps` - pre-generates the actual article page data at build time, also speed

I made it a TypeScript project out of principle. Recently I've begun writing all new JS as TS whenever possible to encourage better coding practices. But I'm confident this website will never grow to reap the benefits TypeScript offers.

##### Styles: SCSS, CSS Modules, styled-jsx

###### SCSS

I opt for SCSS whenever possible, more than anything for the nested styles. But I'm already seeing other benefits, one being mixins. I've created a mixin which is a media query for users who prefer light mode. I'm building this site dark-mode-first, but also adding support for light mode.

###### CSS Modules

CSS Modules is enabled out of the box in Next.js, and combining it with SCSS has become my preferred way to write styles in Next.js apps. It provides the style scoping of styled-jsx, but keeps component files tidier while providing a more familiar stylesheet developer experience.

###### styled-jsx

CSS Modules can solve almost every problem, but one thing it can't do is run some JS to conditionally render styles.

That's where styled-jsx comes in. It can work in tandem with CSS Modules to pass computed JS values to custom properties, which can be used around the stylesheet. Dynamic styles!!

##### Blog setup

In concept I mimicked [this blog post on OpenRelay](https://blog.openreplay.com/creating-a-markdown-blog-powered-by-next-js-in-under-an-hour) to parse my markdown into html.

##### Deployment: Vercel

I tried [Railway.app](https://railway.app/), but surprisingly it didn't play nice with my repo, and I couldn't get it to build. So I went with [Vercel](https://vercel.com/), which always tends to work.

Both of these are completely free for hobby use, which is incredible.

## Close call

In the end I'm glad I opted for a much simpler, more familiar solution. I'm the only developer who's ever going to be working on this site, and it won't need to scale very much. So in reality, this stack is overkill for my use case.

I also enjoyed looking into the alternative technologies. Now I have some ideas for what I might pick next time I have a project that requires a different level of data complexity.

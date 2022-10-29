---
title: 'Centered content that scrolls right off the screen'
metaDesc: 'A cool trick using CSS calc(), min() and margins.'
date: '2022-09-26'
tags:
  - nextjs
active: false
---

I often find myself building components that scroll horizontally, but need to be aligned with the page's main content. Components like these work fine on mobile because the screen is so slim that the content can appear on one side, then disappear out the other without any problem. Easy.

But what if we wanted to build this sort of component for a large desktop screen? That becomes tricky. When the content is larger than the site's max content width, should the overflowing elements wrap? Should they keep scrolling horizontally but get cut off in line with the far edge of the main content? Or should it break out of its parent and reach edge to edge?? That sounds like a lot of work. hmm 🤔

Let's consider this simple blog layout:

[comment]: <> (Simple blog codepen)
[CODEPEN_EMBED:GRGRPGq]

We don't want the blog post's text to be too wide, so we've added a `max-width: 35ch;` property to the post's wrapper, which is our `<main>` element. This is the typical way I'd assign a width to some content. Simply say "Nothing can grow bigger than *this* wide".

Now let's say we wanted to show a list of related articles at the bottom. We can add the following code at the end:

[code snippet - CSS + html]

Great, now we have a horizontally scrolling list of related blog posts. It goes edge to edge, making for a pretty nice experience... at least on mobile. On larger screens, not so much. The content is abruptly cut off at the end of the wrapper. Doesn't look great. But what can you do about it? We want the content to be lined up with the rest of the blog post so the first item needs to be left-justified. We could do some magic with Javascript but that sounds like a lot of work and will probably be buggy. There has to be a better way.

What if we reconsidered the strategy of our blog post's overarching layout? Currently our `<main>` is forbidding its children from growing any bigger than itself. That's quite limiting - there are plenty of situations where we would want to have content grow larger than its parent.

Consider the following code:

[CODEPEN_EMBED:gOKOZKw]

It looks almost the same. The difference? We've switched the `<main>` from a block container to a Flexbox container, and gave it a column layout using `flex-direction: column`. The only real difference is the margins between the text elements, which have gotten a bit larger than before. This is because Flexbox children do not have collapsing margins.

The real benefit here is that out page elements are no longer constrained to the max width imposed by their parent. They can grow in either direction to take up as much of the available space as you'd like them to. So let's make the list of fruits grow as much as possible by removing the `.fruits` selector from the style declaration on line 17:

[CODEPEN_EMBED:VwdwgvK]

Awesome. Now, even though the blog's text content and the `.fruits` list are siblings, they can have different lengths, stretching even from one edge of the page to the other! Very cool.

But we still want the list of fruits to be left-justified with the start of the blog's content.

We can use a cool trick with custom properties, calc(), min() and viewport units to accomplish this:

[code snippet]

[CODEPEN_EMBED:VwdwgvK]
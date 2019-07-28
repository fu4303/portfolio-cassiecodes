---
title: Creating my logo animation
date: '2022-07-28'
tags:
---

Last week I posted my new logo animation on the [bird website](https://twitter.com).

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">🙌 I finally got a break from all the talk prepping and had a long overdue play around on <a href="https://twitter.com/CodePen?ref_src=twsrc%5Etfw">@CodePen</a> again.<br><br>💜 Pleased with how this little logo animation turned out.<a href="https://t.co/RLUxfJUWGZ">https://t.co/RLUxfJUWGZ</a> <a href="https://t.co/2XY927q5zH">pic.twitter.com/2XY927q5zH</a></p>&mdash; Cassie Evans (@cassiecodes) <a href="https://twitter.com/cassiecodes/status/1154650488681435137?ref_src=twsrc%5Etfw">July 26, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Amongst everyone saying lovely things there was a resounding cry of "tutorial", so I'm going to try and break it down for you. Hope this helps someone, I had a ton of fun making it.

There's a few things going on in this logo animation. We've got:

- [SVG stroke dasharray](#heading-svg-stroke-dasharray) path Animation
- SVG [Clip-path](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/clipPath)
- [Greensock](https://greensock.com) for the animation
- Greensock's [Custom Bounce](https://greensock.com/docs/Easing/CustomBounce) plugin
- and a _whole_ load of drawing stuff out in illustrator.

---

I went with Greensock because I love it. As [Sara Soueidan](https://twitter.com/SaraSoueidan) has said

>It's the best thing for SVG animation since SVG animation. 

Greensock gives you a ton of really precise control over your animations.

I'd also been side-eying their custom bounce plugin for a while, so when I saw an chance to use it to give the little dot some character I jumped (bounced?) at the chance.

Sorry.

The good news though is that you can do SVG path animations with CSS too, so I'll run through a couple of different ways to create the same effect.

You can also do path animations without masking and without drawing out _too_ much in illustrator.

So let's get going. First up...

---

## SVG `stroke-dasharray`

Sometimes you want to break your components out of the constraints that they find themselves in. A common situation where this occurs is when you don’t have much control of the container that it exists in, such as a CMS main content area.

This is even more the case with editing tools such as the [WordPress Gutenberg editor](https://wordpress.org/gutenberg/), where in theory, you could pull in a component from a design system and utilise it in the main content of your web page. In these situations, it can be pretty darn handy to have a little utility that makes the element 100% of the viewport’s width _and_ still maintain its flow within its parent container.

This is when I normally pull the `.full-bleed` utility class out of my back pocket.

## The `.full-bleed` utility

It’s small, but hella mighty:

```css
.full-bleed {
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
}
```

Here it is in a context where it makes a fancy `<aside>` and a `<figure>` element bleed out of their parent container.

<iframe height="300" style="width: 100%;" scrolling="no" title="Piccalilli CSS Utility — Issue  #2 — Full bleed utility" src="//codepen.io/andybelldesign/embed/Nmxrwv/?height=300&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/andybelldesign/pen/Nmxrwv/'>Piccalilli CSS Utility — Issue  #2 — Full bleed utility</a> by Andy Bell
  (<a href='https://codepen.io/andybelldesign'>@andybelldesign</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The `.full-bleed` utility gives those elements prominence and _importantly_ keeps their semantic place in the page. Just how I like it.

---

🔥 **Pro tip**: When working with a utility like `.full-bleed`, it’s a good idea to add an inner container that has a max-width and auto horizontal margin. For this, I normal create a shared `.wrapper` component like this:

```css
.wrapper {
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}
```

Having a container like `.wrapper` helps to create consistent, centred content.

---

### How the `.full-bleed` utility works

We set the container to be `width: 100vw`, which equates to the full viewport width. We couldn’t set it to `width: 100%` because it would only fill the space of its parent element. The parent element’s width _is_ useful though, because by setting `margin-left: 50%`, we are telling the component to align its **left edge** to the center of its parent element, because `50%` is half of the **parent element’s** width.

Finally, we use CSS transforms to `translateX(-50%)`. Because the transform works off the element’s dimensions and not the parent’s dimensions, it’ll pull the element back `50vw`, because it’s `100vw` wide, thus making it sit perfectly flush with the viewport’s edges.

## Wrapping up

Hopefully this short and sweet trick will help you out on your projects. If it does, [drop me a tweet](https://twitter.com/andybelldesign), because I’d love to see it!

---
title: Creating my logo animation
date: '2019-07-29'
tags:
 - demo-content
  - code
  - blog
---

Last week I posted my new logo animation on [twitter](https://twitter.com/cassiecodes/status/1154650488681435137?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1154650488681435137&ref_url=http%3A%2F%2Flocalhost%3A8080%2Fposts%2Fcreating-my-logo-animation%2F%23heading-svg-stroke-dasharray).

Amongst everyone saying *a ton* of lovely things, (thankyou) there was a resounding cry of "tutorial". So I'm going to try and break it down for you. Hope this helps someone, I had a ton of fun making it!

There's a few things going on in this logo animation. We've got -

- SVG stroke dasharray path animation [jump to section >](#heading-svg-stroke-dasharray)
- SVG Clip-path [jump to section >](#heading-svg-lessclippathgreater)
- Greensock for the animation
- Greensock's Custom Bounce plugin
- and a _whole_ load of drawing stuff out in illustrator.

---

I use [Greensock](https://greensock.com/) for all my SVG animation. As [Sara Soueidan](https://twitter.com/SaraSoueidan) has said

>Greensock is the best thing that happened to SVG animations since SVG animations.

When it comes to more complex animation it gives you a ton of really precise control that you just don't get with CSS.

I've also been side-eying their custom bounce plugin for a while, so when I saw an chance to use it to give the little dot some character I jumped (bounced?) at the chance. 

😬 Sorry.

The good news though is that you can do SVG path animations with CSS too, so I'll run through a couple of different ways to create the same effect.

So let's get going. First up...

---

## SVG `stroke-dasharray`

`stroke-dasharray` is a SVG presentation attribute (which we can use as a CSS property) to make our SVG paths dashed instead of solid. The higher the number is, the the bigger the gap between dashes.

```svg
<path stroke-dasharray="10" ... />
```

```css
.dashedPath {
  stroke-dasharray: 10;
}
```
You can play around with what these values look like in this pen.

<p class="codepen" data-height="400" data-theme-id="0" data-default-tab="result" data-user="cassie-codes" data-slug-hash="EqZqXL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="SVG stroke dasharray demo">
  <span>See the Pen <a href="https://codepen.io/cassie-codes/pen/EqZqXL/">
  SVG stroke dasharray demo</a> by Cassie Evans (<a href="https://codepen.io/cassie-codes">@cassie-codes</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

As well as making the dashes different lengths with `stroke-dasharray`, we can also offset the stroke position with `stroke-dashoffset`. If we change this property it looks like our dashes are moving along the path.

Like so...

<p class="codepen" data-height="400" data-theme-id="0" data-default-tab="result" data-user="cassie-codes" data-slug-hash="XvMraQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="SVG stroke dashoffset demo">
  <span>See the Pen <a href="https://codepen.io/cassie-codes/pen/XvMraQ/">
  SVG stroke dashoffset demo</a> by Cassie Evans (<a href="https://codepen.io/cassie-codes">@cassie-codes</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

If we make the gap between the dashes big enough and then change the offset we can create a path "drawing" effect.

<p class="codepen" data-height="400" data-theme-id="0" data-default-tab="result" data-user="cassie-codes" data-slug-hash="jgBNgd" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="SVG stroke dashoffset demo - animating">
  <span>See the Pen <a href="https://codepen.io/cassie-codes/pen/jgBNgd/">
  SVG stroke dashoffset demo - animating</a> by Cassie Evans (<a href="https://codepen.io/cassie-codes">@cassie-codes</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Up until now we've been changing the value using a range input, but dashoffset and dasharray are animatable properties, so we can animate them with CSS like so -

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="cassie-codes" data-slug-hash="bd0b3722e1497cdfefdcf674a1b11598" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="SVG stroke dashoffset demo - animated with CSS">
  <span>See the Pen <a href="https://codepen.io/cassie-codes/pen/bd0b3722e1497cdfefdcf674a1b11598/">
  SVG stroke dashoffset demo - animated with CSS</a> by Cassie Evans (<a href="https://codepen.io/cassie-codes">@cassie-codes</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

We can also use Greensock's [draw svg plugin](https://greensock.com/drawSVG) to animate the stroke.

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="js,result" data-user="cassie-codes" data-slug-hash="6d0d3360d5801575db3f47e957fe2c67" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="SVG stroke dashoffset demo - animated with GSAP">
  <span>See the Pen <a href="https://codepen.io/cassie-codes/pen/6d0d3360d5801575db3f47e957fe2c67/">
  SVG stroke dashoffset demo - animated with GSAP</a> by Cassie Evans (<a href="https://codepen.io/cassie-codes">@cassie-codes</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


Under the hood, this is how my logo animation works, but rather than having one continuous line I've broken the path up into nine separate sections. This gives me more control over the timing and helps to avoid any clipping overlaps, which we'll get to in a minute.

<p class="codepen" data-height="400" data-theme-id="0" data-default-tab="result" data-user="cassie-codes" data-slug-hash="85df19ba523672229f92e5aa4ac675af" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Cassie! - without clip paths - break down">
  <span>See the Pen <a href="https://codepen.io/cassie-codes/pen/85df19ba523672229f92e5aa4ac675af/">
  Cassie! - without clip paths - break down</a> by Cassie Evans (<a href="https://codepen.io/cassie-codes">@cassie-codes</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Chaining animations in CSS is a bit of a nightmare as we have to do it with `animation-delay`.
With Greensock, you can line these animations (or tweens) up on a timeline and easily tweak the timings of each tween in relation to the others.

You may have noticed that this version of my logo looks a little... messy though? SVG paths are a fixed width, but we can make them look more stylised by using `<clipPath>`


## SVG `<clipPath>`

SVG [clip path](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/clipPath) can be used to clip (or hide) parts of SVG elements according to a certain path. The parts of the shape inside the `<clipPath>` are visible, and the parts outside are hidden.

[This is a great CSS tricks article](https://css-tricks.com/masking-vs-clipping-use/) if you want to know more.

Lets go back to our little line animation.

In illustrator I drew out the path that we animated (purple), and then I drew a shape over the top (black). This will be used as a clip path.


<svg viewBox="0 0 403.44 74.33" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.2 65.54s36-36.79 56.31-35.66 38.6 27.31 58.13 26.56 26.34-5.91 37.6-13 30.53-19.52 39.48-19.14 19.48 8.23 31.12 19.87 18.91 13.2 25.25 13.16S278.24 58 297 40.76s25.86-17.86 31.49-17.86 48.11 15.42 65 13.27" fill="none" stroke="#a387be" stroke-miterlimit="10" stroke-width="18"/>
  <path d="M40.88 48.72c2.09-1.26 4.21-2.4 6.33-3.57a61.49 61.49 0 0 1 16.3-6.58 32.75 32.75 0 0 1 10.73-.15 33.22 33.22 0 0 1 9.43 3.8c2.66 1.78 5.21 3.78 7.78 5.72 1.2.93 2.41 1.85 3.61 2.76a97.59 97.59 0 0 0 8.6 5.81 55 55 0 0 0 16 6.55 58.77 58.77 0 0 0 8.59 1.43 39.39 39.39 0 0 0 9.2-.42 66.56 66.56 0 0 0 8.96-2.07c1.11-.34 2.2-.79 3.3-1.18 2-.73 4-1.6 6-2.47a123.39 123.39 0 0 0 11.34-6c2.8-1.6 5.57-3.37 8.32-5.14l8.14-5.21c5.65-3.46 11.36-6.86 17.43-8.32a33.76 33.76 0 0 1 10.94.15 23.85 23.85 0 0 1 6 2.26c3.37 2.35 6.3 5.78 9.27 9.06 1.47 1.62 2.92 3.27 4.41 4.83 1.74 1.81 3.48 3.61 5.26 5.35a36.51 36.51 0 0 0 4.73 4 31.73 31.73 0 0 0 8.57 4.17 52 52 0 0 0 8.44 1.85 28.21 28.21 0 0 0 9.04-.35 46.66 46.66 0 0 0 8.76-2.45c1.42-.55 2.78-1.24 4.16-1.93L283.6 59c.93-.47 1.83-1.12 2.74-1.68l2.72-1.67C290.4 54.86 291.7 54 293 53c3.86-2.71 7.65-5.62 11.48-8.42 2-1.44 3.95-2.87 5.94-4.26 1.68-1.18 3.37-2.29 5.08-3.39a41.5 41.5 0 0 1 9.33-4.21 18.42 18.42 0 0 1 5 .19c2 .44 3.95 1 5.91 1.59s4.06 1.16 6.1 1.68c2.56.67 5.13 1.21 7.71 1.69a54.25 54.25 0 0 0 6.22.68 56.33 56.33 0 0 0 5.81-.11c2-.07 4-.39 6-.62 4-.45 7.9-1.29 11.82-2.08l11.07-2.28c-3.92-.95-7.82-1.95-11.73-2.93-3.62-.9-7.24-1.75-10.85-2.69-4-1-8-1.94-11.92-3.27-1.08-.37-2.15-.72-3.23-1.07s-2.1-.86-3.15-1.28c-2-.79-3.91-1.67-5.87-2.49-1.72-.73-3.44-1.52-5.19-2.11-1.18-.4-2.36-.78-3.55-1.15a30.15 30.15 0 0 0-7.24-1.27h-.8a20.44 20.44 0 0 0-8.27 2.07c-1.05.47-2.08 1-3.13 1.53s-1.8 1.07-2.69 1.6c-1.2.71-2.38 1.46-3.55 2.28-7.3 5.03-14.3 11.09-21.52 16.24-1.18.84-2.35 1.72-3.56 2.47l-3.55 2.19-4.53 2.3a38 38 0 0 1-9 3.16 28.53 28.53 0 0 1-9.22.07 37.35 37.35 0 0 1-10.37-3.62 45 45 0 0 1-7.3-6.36 336.02 336.02 0 0 1-5.15-5.48l-4.93-5.43a42.6 42.6 0 0 0-6.17-5.71 24.46 24.46 0 0 0-8.47-4 40.78 40.78 0 0 0-8.75-1.2 32.93 32.93 0 0 0-9.67 1.27 51.07 51.07 0 0 0-8.3 3.44c-1 .46-1.94 1.07-2.91 1.6-.74.41-1.49.81-2.22 1.26-2.2 1.33-4.41 2.65-6.6 4Q173 31.54 169 34.09c-10.14 6-20.46 11.87-31.35 14.23a42.57 42.57 0 0 1-7.2.66 37.68 37.68 0 0 1-7-.69 58.59 58.59 0 0 1-17.59-7.06c-3.4-2.17-6.7-4.67-10-7.13l-3.44-2.57a57.38 57.38 0 0 0-6.48-4.08 31.29 31.29 0 0 0-7.7-3 27.64 27.64 0 0 0-9.78-.73 34.81 34.81 0 0 0-13.73 5l-2.89 1.75c-1.28.78-2.51 1.7-3.75 2.6-1.83 1.31-3.59 2.76-5.36 4.24-3.65 3-7.14 6.48-10.63 9.9-.54.54-1.06 1.18-1.58 1.78q-1.91 2.18-3.8 4.39c-1.19 1.38-2.37 2.78-3.55 4.18-1.41 1.68-2.74 3.49-4.09 5.27 1.56-1.09 3.11-2.24 4.69-3.27 1.21-.77 2.41-1.56 3.61-2.36 2.19-1.45 4.38-2.93 6.55-4.42 2.3-1.28 4.63-2.66 6.95-4.06z" fill="#171717"/>
</svg>

This is what the syntax for a clip path looks like in SVG

```svg
<svg>
  <clipPath id="myClipPath">
    <circle cx="40" cy="35" r="35" />
  </clipPath>
 
  <path clip-path="url(#myClipPath)"... />
</svg>
```

Anything you put inside the clip path element will be used as a clipping object. 
You reference a clip path on the clipping target using an ID

You can also reference a clip path in CSS like this:

```css
.element {
    clip-path: url("#myClipPath");
}
```

This is what the line animation looks like with a clip path applied. Much Nicer!

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-user="cassie-codes" data-slug-hash="0cdbc3747ec7c7873758bc215bc6873c" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="SVG stroke dashoffset demo - clip-path">
  <span>See the Pen <a href="https://codepen.io/cassie-codes/pen/0cdbc3747ec7c7873758bc215bc6873c/">
  SVG stroke dashoffset demo - clip-path</a> by Cassie Evans (<a href="https://codepen.io/cassie-codes">@cassie-codes</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>






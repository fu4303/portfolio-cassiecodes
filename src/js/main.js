(function() {
  TweenMax.set('.path', {
    drawSVG: '0% 0%'
  });
  TweenMax.set('.dot-group', {
    yPercent: 100
  });

  CustomBounce.create('myBounce', {strength: 0.6, squash: 2});

  tl = new TimelineMax({delay: 0.5});

  tl.addLabel('i', 2.85)
    .set('.logo', {autoAlpha: 1})
    .timeScale(1.2)
    .staggerTo('.cPath', 0.5, {drawSVG: '100%', ease: Linear.easeNone}, 0.2)
    .staggerTo('.a1Path', 0.25, {drawSVG: '100%', ease: Linear.easeNone}, 0.2, '-=0.35')
    .staggerTo('.a2Path', 0.25, {drawSVG: '100%', ease: Linear.easeNone}, 0.1, '-=0.04')
    .staggerTo('.s1Path', 0.4, {drawSVG: '100%', ease: Linear.easeNone}, 0.1, '-=0.02')
    .staggerTo('.s2Path', 0.3, {drawSVG: '100%', ease: Linear.easeNone}, 0.07, '-=0.1')
    .staggerTo('.s3Path', 0.4, {drawSVG: '100%', ease: Linear.easeNone}, 0.1, '-=0.4')
    .staggerTo('.s4Path', 0.2, {drawSVG: '100%', ease: Linear.easeNone}, 0.07, '-=0.1')
    .from('#dot', 0.01, {autoAlpha: 0}, '-=0.03')
    .to('#dot', 0.4, {yPercent: -300, ease: Power4.easeOut}, '-=0.01')
    .to('.dot-group', 0.4, {scale: 1.4, ease: Power4.easeOut}, '-=0.4')
    .to('#dot', 0.9, {yPercent: -150, ease: 'myBounce'})
    .to('#dot', 0.9, {
      scaleY: 0.6,
      scaleX: 1.2,
      ease: 'myBounce-squash',
      transformOrigin: 'bottom',
      delay: -0.9
    })
    .staggerTo('.iPath', 0.5, {drawSVG: '100%', ease: Linear.easeNone}, 0.05, 'i')
    .staggerTo('.ePath', 0.5, {drawSVG: '100%', ease: Linear.easeNone}, 0.05, '-=0.3');
})();

(function() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('night');
  }

  let light = document.querySelector('#light');

  if (!light) {
    return;
  }

  light.addEventListener('click', e => {
    document.documentElement.classList.toggle('night');
  });
})();

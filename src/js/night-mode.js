// setting dark vars before DOM content is loading to avoid flicker
(function() {
  
  if (
    window.localStorage.darkMode === 'true' ||
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    localStorage.setItem('darkMode', true);

    document.documentElement.style.setProperty('--color-mint', 'hsl(316, 30%, 36%)');
    document.documentElement.style.setProperty('--color-highlight', 'hsl(240, 33%, 77%)');
    document.documentElement.style.setProperty('--color-lilac', 'hsl(263, 29%, 32%)');
    document.documentElement.style.setProperty('--color-lilac-up', 'hsl(257, 17%, 41%)');
    document.documentElement.style.setProperty('--color-sherbet', 'hsl(260, 24%, 18%)');
    document.documentElement.style.setProperty('--color-light', 'hsl(274, 4%, 15%)');
    document.documentElement.style.setProperty('--color-light-down', 'hsl(210, 4%, 98%)');
    document.documentElement.style.setProperty(
      '--color-light-down-2',
      'hsl(210, 4%, 95%)'
    );
    document.documentElement.style.setProperty(
      '--color-light-down-3',
      'hsl(210, 4%, 80%)'
    );
    document.documentElement.style.setProperty('--color-mid', 'hsl(0, 0%, 80%)');
    document.documentElement.style.setProperty('--color-dark', 'hsl(0, 0%, 98%)');
    document.documentElement.style.setProperty('--color-dark-down', 'hsl(0, 0%, 98%)');
  }
})();

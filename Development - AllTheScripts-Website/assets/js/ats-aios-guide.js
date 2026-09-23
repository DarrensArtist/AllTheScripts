(() => {
  const sidebar = document.querySelector('#guide-sidebar');
  const menu = document.querySelector('[data-guide-menu]');
  const links = [...document.querySelectorAll('.guide-nav [data-route]')];
  const views = [...document.querySelectorAll('[data-view]')];
  const title = document.querySelector('[data-current-title]');

  const titleFor = (id) => links.find((link) => link.dataset.route === id)?.textContent.trim()
    || document.querySelector(`[data-view="${CSS.escape(id)}"] h1`)?.textContent.trim()
    || 'App guide';
  const showRoute = () => {
    const route = location.hash.replace(/^#/, '') || 'home';
    const current = views.some((view) => view.dataset.view === route) ? route : 'home';
    views.forEach((view) => { view.hidden = view.dataset.view !== current; });
    links.forEach((link) => {
      if (link.dataset.route === current) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    title.textContent = titleFor(current);
    document.title = `${titleFor(current)} — ATS-AIOS | AllTheScripts`;
    sidebar.classList.remove('is-open');
    menu?.setAttribute('aria-expanded', 'false');
    menu?.setAttribute('aria-label', 'Open guide navigation');
  };
  window.addEventListener('hashchange', showRoute);
  showRoute();

  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close guide navigation' : 'Open guide navigation');
    sidebar.classList.toggle('is-open', open);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && sidebar.classList.contains('is-open')) {
      sidebar.classList.remove('is-open');
      menu?.setAttribute('aria-expanded', 'false');
      menu?.setAttribute('aria-label', 'Open guide navigation');
      menu?.focus();
    }
  });

  const games = [
    { name: 'Seven Is Watching', subtitle: 'Unity project', colour: '#d8ae62' },
    { name: 'Crownfall', subtitle: 'Unity project', colour: '#a874d4' },
    { name: 'AgainstTheHorde', subtitle: 'Roblox project', colour: '#5dbb72' },
    { name: 'Morphlings', subtitle: 'Roblox project', colour: '#4fc4d1' },
  ];
  const preview = document.querySelector('[data-game-preview]');
  if (!preview) return;
  const name = preview.querySelector('[data-game-name]');
  const subtitle = preview.querySelector('[data-game-subtitle]');
  const number = preview.querySelector('[data-game-number]');
  const scene = preview.querySelector('[data-game-scene]');
  const pause = preview.querySelector('[data-game-pause]');
  let selected = 0;
  let timer;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const render = () => {
    const game = games[selected];
    name.textContent = game.name;
    subtitle.textContent = game.subtitle;
    number.textContent = String(selected + 1).padStart(2, '0');
    scene.style.setProperty('--scene-accent', game.colour);
    document.querySelector('[data-detail-game]').textContent = game.name;
    document.querySelector('[data-detail-subtitle]').textContent = `${game.subtitle} · Illustrative`;
  };
  const stop = () => { clearInterval(timer); timer = undefined; };
  const start = () => {
    stop();
    if (!reducedMotion.matches && pause?.getAttribute('aria-pressed') !== 'true') {
      timer = setInterval(() => { selected = (selected + 1) % games.length; render(); }, 5200);
    }
  };
  const move = (amount) => { selected = (selected + amount + games.length) % games.length; render(); start(); };
  preview.querySelector('[data-game-prev]')?.addEventListener('click', () => move(-1));
  preview.querySelector('[data-game-next]')?.addEventListener('click', () => move(1));
  pause?.addEventListener('click', () => {
    const paused = pause.getAttribute('aria-pressed') !== 'true';
    pause.setAttribute('aria-pressed', String(paused));
    pause.textContent = paused ? 'Play preview' : 'Pause preview';
    start();
  });
  reducedMotion.addEventListener?.('change', start);
  render();
  start();
})();

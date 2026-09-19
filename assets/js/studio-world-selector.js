const worldSelector = document.querySelector('[data-world-selector]');

if (worldSelector) {
    const worlds = {
        seven: { number: '01', title: 'Seven Is Watching', meta: 'Unity title · Wiki portal', colour: '#d8ae62', url: '/pages/work/7-is-watching.html' },
        crownfall: { number: '02', title: 'Crownfall', meta: 'Unity title · Wiki portal', colour: '#a874d4', url: '/pages/work/crownfall.html' },
        horde: { number: '03', title: 'AgainstTheHorde', meta: 'Roblox title · Wiki portal', colour: '#5dbb72', url: '/pages/work/against-the-horde.html' },
        morphlings: { number: '04', title: 'Morphlings', meta: 'Roblox title · Wiki portal', colour: '#4fc4d1', url: '/pages/work/morphlings.html' }
    };
    const number = document.querySelector('[data-world-number]');
    const title = document.querySelector('[data-world-title]');
    const meta = document.querySelector('[data-world-meta]');
    const link = document.querySelector('[data-world-link]');

    const selectWorld = (id) => {
        const world = worlds[id];
        if (!world) return;
        worldSelector.style.setProperty('--world-accent', world.colour);
        number.textContent = world.number;
        title.textContent = world.title;
        meta.textContent = world.meta;
        link.href = world.url;
        link.textContent = `Enter ${world.title}`;
        worldSelector.querySelectorAll('[data-world]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.world === id)));
    };

    worldSelector.querySelectorAll('[data-world]').forEach((button) => button.addEventListener('click', () => selectWorld(button.dataset.world)));
    selectWorld('seven');
}

const placementResult = document.querySelector('[data-placement-result]');

document.querySelectorAll('[data-placement]').forEach((button) => {
    button.addEventListener('click', () => {
        document.querySelectorAll('[data-placement]').forEach((item) => item.setAttribute('aria-pressed', 'false'));
        button.setAttribute('aria-pressed', 'true');

        const data = JSON.parse(button.dataset.placement);
        placementResult.innerHTML = `<span class="mini-heading">Recommended home</span><h3>${data.name}</h3><code>${data.path}</code><dl><div><dt>Owner</dt><dd>${data.owner}</dd></div><div><dt>Why</dt><dd>${data.reason}</dd></div></dl>`;
    });
});

const explorer = document.querySelector('[data-workflow-explorer]');

if (explorer) {
    const detail = explorer.querySelector('[data-explorer-detail]');
    const buttons = [...explorer.querySelectorAll('[data-explorer-stage]')];

    const renderStage = (stage, trackName) => {
        detail.innerHTML = `
            <span class="mini-heading">${trackName} · ${stage.type}</span>
            <h3>${stage.short}</h3>
            <dl class="explorer-facts">
                <div><dt>What is this?</dt><dd>${stage.workspace}</dd></div>
                <div><dt>Who performs it?</dt><dd>${stage.agent}</dd></div>
                <div><dt>What does it receive?</dt><dd>${stage.receives}</dd></div>
                <div><dt>What does it produce?</dt><dd>${stage.produces}</dd></div>
                <div><dt>When is it complete?</dt><dd>${stage.complete}</dd></div>
                <div><dt>When do I return?</dt><dd>${stage.return}</dd></div>
            </dl>`;
    };

    fetch('/content/workflow/workflow-model.json')
        .then((response) => response.ok ? response.json() : Promise.reject(new Error('Workflow data unavailable')))
        .then((model) => {
            const stages = new Map();
            model.tracks.forEach((track) => track.stages.forEach((stage) => stages.set(stage.id, { stage, trackName: track.name })));
            buttons.forEach((button) => button.addEventListener('click', () => {
                buttons.forEach((item) => item.setAttribute('aria-pressed', 'false'));
                button.setAttribute('aria-pressed', 'true');
                const record = stages.get(button.dataset.explorerStage);
                if (record) renderStage(record.stage, record.trackName);
            }));
            buttons.forEach((button, index) => button.addEventListener('keydown', (event) => {
                if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return;
                event.preventDefault();
                const backwards = event.key === 'ArrowLeft' || event.key === 'ArrowUp';
                const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1 : (index + (backwards ? -1 : 1) + buttons.length) % buttons.length;
                buttons[nextIndex].focus();
                buttons[nextIndex].click();
            }));
        })
        .catch(() => {
            detail.querySelector('[data-explorer-status]')?.removeAttribute('hidden');
        });
}

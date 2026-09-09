const promptLibrary = document.querySelector('[data-prompt-library]');

if (promptLibrary) {
    const groups = ['Workspace setup', 'Specialist agents', 'Workflow operations'];

    const addFact = (list, term, value) => {
        const wrapper = document.createElement('div');
        const dt = document.createElement('dt');
        const dd = document.createElement('dd');
        dt.textContent = term;
        dd.textContent = value;
        wrapper.append(dt, dd);
        list.append(wrapper);
    };

    fetch('/content/workflow/prompts.json')
        .then((response) => response.ok ? response.json() : Promise.reject(new Error('Prompt source unavailable')))
        .then((prompts) => {
            promptLibrary.replaceChildren();
            groups.forEach((groupName) => {
                const section = document.createElement('section');
                section.className = 'prompt-group';
                const heading = document.createElement('h2');
                heading.textContent = groupName;
                section.append(heading);
                const grid = document.createElement('div');
                grid.className = 'prompt-grid';

                prompts.filter((prompt) => prompt.group === groupName).forEach((prompt) => {
                    const article = document.createElement('article');
                    article.className = 'prompt-entry';
                    article.id = prompt.id;
                    const meta = document.createElement('span');
                    meta.className = 'mini-heading';
                    meta.textContent = prompt.owner;
                    const title = document.createElement('h3');
                    title.textContent = prompt.name;
                    const purpose = document.createElement('p');
                    purpose.textContent = prompt.purpose;
                    const details = document.createElement('details');
                    const summary = document.createElement('summary');
                    summary.textContent = 'View prompt contract';
                    const facts = document.createElement('dl');
                    facts.className = 'prompt-facts';
                    addFact(facts, 'When to use', prompt.whenToUse);
                    addFact(facts, 'Required authority', prompt.requiredContext);
                    addFact(facts, 'Expected output', prompt.expectedOutput);
                    addFact(facts, 'Stop conditions', prompt.stopConditions);
                    addFact(facts, 'Related prompts', prompt.related.join(', '));
                    addFact(facts, 'Last reviewed', prompt.lastReviewed || 'Awaiting approved body');
                    details.append(summary, facts);
                    const status = document.createElement('span');
                    status.className = 'content-status';
                    status.textContent = 'Prompt body · Content needed';
                    article.append(meta, title, purpose, details, status);
                    grid.append(article);
                });
                section.append(grid);
                promptLibrary.append(section);
            });
            const deepLink = document.getElementById(window.location.hash.slice(1));
            if (deepLink) deepLink.scrollIntoView({ block: 'start' });
        })
        .catch(() => {
            const status = promptLibrary.querySelector('[data-library-status]');
            if (status) status.textContent = 'Prompt metadata could not be loaded. Please retry when the site connection is available.';
        });
}

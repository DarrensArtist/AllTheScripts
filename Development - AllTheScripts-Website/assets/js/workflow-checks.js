document.querySelectorAll('[data-check-group]').forEach((group) => {
    const boxes = [...group.querySelectorAll('input[type="checkbox"]')];
    const output = group.querySelector('[data-check-result]');
    const update = () => {
        if (!output) return;
        const checked = boxes.filter((box) => box.checked).length;
        const ready = checked === boxes.length;
        output.textContent = ready
            ? group.dataset.completeMessage
            : `${checked} of ${boxes.length} conditions confirmed. ${group.dataset.incompleteMessage}`;
        output.dataset.ready = String(ready);
    };
    boxes.forEach((box) => box.addEventListener('change', update));
    update();
});

document.querySelectorAll('[data-copy-button]').forEach((button) => {
    const target = document.getElementById(button.getAttribute('aria-controls'));
    const feedback = button.parentElement.querySelector('[data-copy-feedback]');

    button.addEventListener('click', async () => {
        if (!target || !feedback) return;

        try {
            await navigator.clipboard.writeText(target.textContent.trim());
            feedback.textContent = 'Copied to clipboard.';
        } catch {
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(target);
            selection.removeAllRanges();
            selection.addRange(range);
            feedback.textContent = 'Clipboard access was unavailable. The text is selected for manual copying.';
        }
    });
});

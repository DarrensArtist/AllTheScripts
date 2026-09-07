document.querySelectorAll('[data-copy-button]').forEach((button) => {
    const target = document.getElementById(button.getAttribute('aria-controls'));
    const feedback = button.parentElement.querySelector('[data-copy-feedback]');

    button.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(target.textContent.trim());
            feedback.textContent = 'Copied to clipboard.';
        } catch {
            feedback.textContent = 'Copy failed. Select and copy the text manually.';
        }
    });
});

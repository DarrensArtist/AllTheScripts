const hamburgerBtn = document.getElementById('hamburger-btn');
const overlayNav = document.getElementById('navigation-overlay');

if (hamburgerBtn && overlayNav) {
    const closeOverlay = () => {
        overlayNav.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        if (typeof window.syncResponsiveHeaderLayout === 'function') {
            window.syncResponsiveHeaderLayout();
        }
    };

    hamburgerBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        const isOpen = overlayNav.classList.toggle('open');
        hamburgerBtn.setAttribute('aria-expanded', String(isOpen));

        if (typeof window.syncResponsiveHeaderLayout === 'function') {
            window.syncResponsiveHeaderLayout({ forceVisible: isOpen });
        }
    });

    document.addEventListener('click', (event) => {
        if (!overlayNav.contains(event.target) && !hamburgerBtn.contains(event.target)) {
            closeOverlay();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeOverlay();
        }
    });
}

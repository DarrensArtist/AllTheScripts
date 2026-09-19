const menuButton = document.querySelector('[data-menu-button]');
const siteNavigation = document.querySelector('[data-site-navigation]');
const mobileNavigationQuery = window.matchMedia('(max-width: 48rem)');

const normalisePath = (path) => path.replace(/index\.html$/, '').replace(/\/$/, '') || '/';
const currentPath = normalisePath(window.location.pathname);

document.querySelectorAll('.site-nav a, .site-footer__links a, .workflow-local-nav a').forEach((link) => {
    const linkPath = normalisePath(new URL(link.href, window.location.href).pathname);
    const isGlobalWorldsLink = link.closest('.site-nav, .site-footer__links') && linkPath === '/pages/work.html';
    const isGlobalWorkflowLink = link.closest('.site-nav, .site-footer__links') && linkPath === '/workflow';
    const isWorldsParent = isGlobalWorldsLink && (currentPath.startsWith('/pages/work/') || currentPath.startsWith('/pages/wiki/'));
    const isWorkflowParent = isGlobalWorkflowLink && currentPath.startsWith('/workflow');

    if (link.origin === window.location.origin && (linkPath === currentPath || isWorldsParent || isWorkflowParent)) {
        link.setAttribute('aria-current', 'page');
    }
});

if (menuButton && siteNavigation) {
    const navigationLinks = [...siteNavigation.querySelectorAll('a')];
    let returnFocus = null;

    const setMenuState = (isOpen, { restoreFocus = false } = {}) => {
        const isMobile = mobileNavigationQuery.matches;

        siteNavigation.hidden = isMobile && !isOpen;
        menuButton.setAttribute('aria-expanded', String(isMobile && isOpen));
        menuButton.setAttribute('aria-label', isMobile && isOpen ? 'Close navigation' : 'Open navigation');
        document.body.classList.toggle('menu-open', isMobile && isOpen);

        if (isMobile && isOpen) {
            returnFocus = document.activeElement;
            navigationLinks[0]?.focus();
        } else if (restoreFocus && returnFocus instanceof HTMLElement) {
            returnFocus.focus();
            returnFocus = null;
        }
    };

    const closeMenu = (restoreFocus = false) => setMenuState(false, { restoreFocus });

    menuButton.addEventListener('click', () => {
        const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
        setMenuState(!isOpen, { restoreFocus: isOpen });
    });

    navigationLinks.forEach((link) => {
        link.addEventListener('click', () => closeMenu());
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
            closeMenu(true);
            return;
        }

        if (event.key !== 'Tab' || menuButton.getAttribute('aria-expanded') !== 'true') {
            return;
        }

        const focusableItems = [menuButton, ...navigationLinks];
        const firstItem = focusableItems[0];
        const lastItem = focusableItems[focusableItems.length - 1];

        if (event.shiftKey && document.activeElement === firstItem) {
            event.preventDefault();
            lastItem.focus();
        } else if (!event.shiftKey && document.activeElement === lastItem) {
            event.preventDefault();
            firstItem.focus();
        }
    });

    mobileNavigationQuery.addEventListener('change', () => setMenuState(false));
    setMenuState(false);
}

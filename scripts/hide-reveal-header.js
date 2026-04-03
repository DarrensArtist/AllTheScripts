let lastScrollTop = 0;
const header = document.querySelector('.responsive-design-header');
const mobileMediaQuery = window.matchMedia('(max-width: 825px)');

function getHeaderOffset() {
    return header ? `${header.offsetHeight}px` : '0px';
}

function setHeaderOffset(offset) {
    document.documentElement.style.setProperty('--mobile-header-offset', offset);
}

function syncHeaderLayout({ forceVisible = false } = {}) {
    if (!header) {
        setHeaderOffset('0px');
        return;
    }

    if (!mobileMediaQuery.matches) {
        header.classList.remove('hidden');
        setHeaderOffset('0px');
        return;
    }

    if (forceVisible) {
        header.classList.remove('hidden');
    }

    const isVisible = !header.classList.contains('hidden');
    setHeaderOffset(isVisible ? getHeaderOffset() : '0px');
}

if (header) {
    window.syncResponsiveHeaderLayout = syncHeaderLayout;
    syncHeaderLayout();

    window.addEventListener('scroll', () => {
        if (!mobileMediaQuery.matches) {
            lastScrollTop = 0;
            syncHeaderLayout();
            return;
        }

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const isScrollingDown = scrollTop > lastScrollTop;
        const overlayNav = document.getElementById('navigation-overlay');
        const overlayOpen = overlayNav ? overlayNav.classList.contains('open') : false;

        if (!overlayOpen && scrollTop > 80 && isScrollingDown) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }

        syncHeaderLayout();
        lastScrollTop = Math.max(scrollTop, 0);
    });

    window.addEventListener('resize', () => {
        syncHeaderLayout();
    });

    mobileMediaQuery.addEventListener('change', () => {
        lastScrollTop = 0;
        syncHeaderLayout();
    });

    window.addEventListener('load', () => {
        syncHeaderLayout();
    });
}

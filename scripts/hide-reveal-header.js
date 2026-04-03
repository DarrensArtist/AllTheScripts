let lastScrollTop = 0;
const header = document.querySelector('.responsive-design-header');

if (header) {
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const isScrollingDown = scrollTop > lastScrollTop;

        if (scrollTop > 80 && isScrollingDown) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }

        lastScrollTop = Math.max(scrollTop, 0);
    });
}

// Scroll behavior to hide/reveal the header
let lastScrollTop = 0;
const header = document.querySelector('.responsive-design-header');

// Event listener for scrolling
window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Hide header on scroll down, show on scroll up
    if (scrollTop > lastScrollTop) {
        header.classList.add('hidden'); // Hide header
    } else {
        header.classList.remove('hidden'); // Show header
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
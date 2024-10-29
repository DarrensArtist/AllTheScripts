// Select the menu elements
const hamburgerBtn = document.getElementById('hamburger-btn');
const overlayNav = document.getElementById('overlay-nav');

// Toggle the overlay menu on hamburger click
hamburgerBtn.addEventListener('click', () => {
    overlayNav.classList.toggle('open');
});

// Close the overlay when clicking outside it
document.addEventListener('click', (event) => {
    if (!overlayNav.contains(event.target) && !hamburgerBtn.contains(event.target)) {
        overlayNav.classList.remove('open');
    }
});

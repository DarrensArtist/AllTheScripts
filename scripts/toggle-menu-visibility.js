// Hamburger menu toggle
const hamburger = document.getElementById('hamburger-btn');
const navigationMain = document.querySelector('.navigation-main'); // Your main nav
const navigationContent = document.querySelector('.navigation-content'); // Content nav

hamburger.addEventListener('click', function () {
    navigationMain.classList.toggle('active');
    navigationContent.classList.toggle('active');
});
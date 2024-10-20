// JavaScript to toggle navigation on hamburger click
const hamburger = document.querySelector('.hamburger');
const navMain = document.querySelector('.navigation-main');
const navSocial = document.querySelector('.navigation-social');
const navContent = document.querySelector('.navigation-content');

hamburger.addEventListener('click', () => {
    navMain.classList.toggle('active');
    navSocial.classList.toggle('active');
    navContent.classList.toggle('active');
});

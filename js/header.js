let menuIconBtn = document.querySelector('.menu-icon');
let navBar = document.querySelector('.navbar');
let navBarCloseBtn = document.getElementById('close');

// Toggle Nav Bar
menuIconBtn.addEventListener('click', () => {
    navBar.style.transform = 'translateX(0)';
});

// Close Nav Bar
navBarCloseBtn.addEventListener('click', () => {
    navBar.style.transform = 'translateX(-100%)';
});

window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    let innerHeader = document.querySelector('.head');
    header.classList.toggle('sticky', window.scrollY > 0);
    innerHeader.classList.toggle('sticky', window.scrollY > 0);
});
const closeBtn = document.querySelector('.menu-list-close-btn');
const menuMobile = document.querySelector('.box');
const burgerBtn = document.querySelector('.menu-btn');
burgerBtn.addEventListener('click', () => {
    menuMobile.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
    menuMobile.style.display = 'none';
})
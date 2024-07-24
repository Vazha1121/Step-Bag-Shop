const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

/* register */

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.registered-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close')

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})


loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    wrapper.style.display = "block";
})
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    wrapper.style.display = "none";
});


/* function myFunction() {
    document.getElementById("panel").style.display = "none";
} */
const wrapper = document.querySelector('.wrapper');
const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btn-Login-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    loginForm.style.display = 'none';   // Hide login form
    registerForm.style.display = 'block'; // Show register form
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
    loginForm.style.display = 'block';  // Show login form
    registerForm.style.display = 'none'; // Hide register form
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    wrapper.style.transform = 'scale(1)';
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    wrapper.style.transform = 'scale(0)';
});
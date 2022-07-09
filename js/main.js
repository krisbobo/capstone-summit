const hamburger = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('fa-times');

  navbar.classList.toggle('active');
});

window.onscroll = () => {
  hamburger.classList.remove('fa-times');

  navbar.classList.remove('active');
};

document.addEventListener('DOMContentLoaded', () => {
  const modalOrder = document.querySelector('.modal-your-order');
  const closeButtonOrder = document.querySelector('.close-button');

  const modalThankYou = document.querySelector('.modal-thank-you');
  const xButtonThankYou = document.querySelector('.x-button');

  const hamburger = document.querySelector('.hamburger');
  const xButtonHamburger = document.querySelector('.x-button-hamburger');
  const hamMenuButton = document.querySelector('.ham-menu-button');
  const navLinksHam = document.querySelectorAll('.nav-link-ham');

  closeButtonOrder.addEventListener('click', () => {
    modalOrder.classList.toggle('is-open');
  });

  xButtonThankYou.addEventListener('click', () => {
    modalThankYou.classList.toggle('is-open');
  });

  xButtonHamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-open-hamburger');
  });

  hamMenuButton.addEventListener('click', () => {
    hamburger.classList.toggle('is-open-hamburger');
  });

  navLinksHam.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.toggle('is-open-hamburger');
    });
  });
});

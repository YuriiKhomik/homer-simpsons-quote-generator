import { quotes } from './js/quotes';

const nextBtn = document.querySelector('.js-next-btn');
const quoteOriginal = document.querySelector('.quote__text');
const quoteTranslated = document.querySelector('.quote__translated-text');
const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');

nextBtn.addEventListener('click', generateQuote);
menuBtn.addEventListener('click', onMenuBtnClick);

function generateQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  quoteOriginal.textContent = quotes[random].quote;
}

function onMenuBtnClick() {
  menuBtn.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active');
}

generateQuote();

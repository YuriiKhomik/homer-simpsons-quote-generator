import { quotes } from './js/quotes';

const nextBtn = document.querySelector('.js-next-btn');
const quoteOriginal = document.querySelector('.quote__text');
const quoteTranslated = document.querySelector('.quote__translated-text');

nextBtn.addEventListener('click', generateQuote);

function generateQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  quoteOriginal.textContent = quotes[random].quote;
}

generateQuote();

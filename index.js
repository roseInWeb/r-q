const audio = document.querySelector('audio');
const btn = document.querySelector('.button');
const quotes = document.querySelector('.quotation');
const langBtns = document.querySelectorAll('.lang');
const urlEn = 'quotation.json';
const urlRu = 'quotes.json';
let randomNumber = Math.round(Math.random() * 125);
const body = document.querySelector('.body');
async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  quotes.textContent = data[randomNumber].text;
}
let num = 0;
btn.textContent = 'Next quotation';

const checkFunc = () => {
    if (num == 0) {
        getData(urlEn);
        randomNumber = Math.round(Math.random() * 125);
    } else {
        getData(urlRu);
        randomNumber = Math.round(Math.random() * 125);
    }
    audio.play();
}
checkFunc();

langBtns[0].addEventListener('click', () => {
    if (num !== 0) {
        num = 0;
        langBtns[1].classList.remove('lang-act');
        langBtns[0].classList.add('lang-act');
        btn.textContent = 'Next quotation';
    }
    checkFunc();
});

langBtns[1].addEventListener('click', () => {
    if (num !== 1) {
        num = 1;
        langBtns[0].classList.remove('lang-act');
        langBtns[1].classList.add('lang-act');
        btn.textContent = 'Следующая цитата';
    }
    checkFunc();
});

btn.addEventListener('click', checkFunc);
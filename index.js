const root = document.documentElement;
const number = document.getElementById('number');

let counter = 0;
const decreaseTextShadow = 'text-shadow: 0 0 10px var(--clr-btn-decrease)';
const resetTextShadow = 'text-shadow: 0 0 10px var(--clr-btn-reset)';
const increaseTextShadow = 'text-shadow: 0 0 10px var(--clr-btn-increase)';

document.body.addEventListener('click', e => {
  switch(e.target.id) {
    case 'decrease':
      counter--;
      break;
    case 'reset':
      counter = 0;
      break;
    case 'increase':
      counter++;
      break;
  }
  let textShadow = (counter > 0) ? increaseTextShadow : (counter < 0) ? decreaseTextShadow : resetTextShadow;
  number.textContent = counter;
  number.style = ('text-shadow', textShadow);
});
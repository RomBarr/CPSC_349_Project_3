import { Stage, createWordHolder } from './modules/stages.js'
import { CreateLetters } from './modules/letters.js'

const stage = new Stage()

let word = 'computer'

word = word.toUpperCase()

createWordHolder(word)

CreateLetters(word)

export { stage }


const page2 = document.getElementById('page2');

const btn = document.getElementById('btn');



btn.addEventListener('click', function handleClick() {
  if (page2.style.display === 'none') {
    page2.style.display = 'block';

    btn.textContent = 'End Game';}
   else {
    page2.style.display = 'none';

    btn.textContent = 'Lets Play';
  }
});
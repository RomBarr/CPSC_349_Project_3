import { Gallows } from './modules/canvas.js';
import { CreateLetters } from './modules/letters.js';

const gallows = new Gallows('500', '500', document.querySelector('div'));

gallows.createGallows();

const letters = new CreateLetters();

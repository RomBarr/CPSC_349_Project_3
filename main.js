import { Stage, createWordHolder } from './modules/stages.js'
import { CreateLetters } from './modules/letters.js'

const stage = new Stage()

let word = 'computer'

word = word.toUpperCase()

createWordHolder(word)

CreateLetters(word)

export { stage }

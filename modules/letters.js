import { fillLetter } from './stages.js'
import { stage } from '../main.js'

function CreateLetters (word) {
  const alphabet = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'

  const letters = alphabet.split(' ')

  for (let i = 0; i < letters.length; ++i) {
    const button = document.createElement('input')
    button.type = 'button'
    button.value = letters[i]
    button.classList = 'btn btn-primary text-3xl'

    const btnIsDisabled = localStorage.getItem(button.value)
    console.log("button " + letters[i] + " is " + btnIsDisabled)

    // only change the button's disabled property if the button's disabled
    // property value was saved in the local storage. 
    if (btnIsDisabled !== null) {
      button.disabled = btnIsDisabled
    }

    document.getElementById('letters').appendChild(button)
    button.addEventListener('click', function () {
      if (!fillLetter(word, button.value)) {
        stage.changeStage(stage.getStage() + 1)
      }

      button.disabled = true
      
      // save the button.disabled value into local storage
      localStorage.setItem(button.value, button.disabled)
    })
  }
}

export { CreateLetters }

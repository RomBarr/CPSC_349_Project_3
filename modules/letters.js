function CreateLetters() {
  const alphabet = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';

  const letters = alphabet.split(' ');

  for (let i = 0; i < letters.length; ++i) {
    const button = document.createElement('button');
    button.textContent = letters[i];
    button.classList = 'btn btn-primary text-3xl';
    document.getElementsByClassName('letters')[0].appendChild(button);
  } 
}

export { CreateLetters };
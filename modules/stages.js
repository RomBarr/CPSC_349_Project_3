function changeStage (stage) {
  const img = document.getElementById('stage');
  img.src = `/assets/images/hangman-${stage}.png`;
  img.alt = `Stage ${stage} of Hangman`;
}

function createWordHolder (word) {
  const table = document.getElementById('word-holder');

  // create row 
  const row = document.createElement('tr');

  row.classList = "flex space-x-5";

  for (let i = 0; i < word.length; ++i) {
    const cell = document.createElement('td');
    cell.classList = "text-4xl w-10  border-b-4 border-indigo-500 text-center";
    row.appendChild(cell);
  }

  table.appendChild(row);
}

function fillLetter (word, letter) {
  const cells = document.getElementsByTagName('td'); 
  
  // fill in a letter only if the word contains the letter
  // word[i] = cells[i]

  // if letter can be filled (match was found): 
    cells[0].textContent = letter;
    return true;
  // else {
  //   return false 
  // }
  
}

export { changeStage, createWordHolder, fillLetter };
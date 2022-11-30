function changeStage (stage) {
  const img = document.getElementById('stage');
  img.src = `/assets/images/hangman-${stage}.png`;
  img.alt = `Stage ${stage} of Hangman`;
}

export { changeStage};
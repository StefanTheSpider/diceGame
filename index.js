'use strict';

const playButton = document.querySelector('.btn_play');

const player1 = document.querySelector(`.p1`);
const player2 = document.querySelector(`.p2`);

const img1p1 = document.querySelector(`.img1-p1`);
const img2p1 = document.querySelector(`.img2-p1`);
const img3p1 = document.querySelector(`.img3-p1`);
const img4p1 = document.querySelector(`.img4-p1`);
const img5p1 = document.querySelector(`.img5-p1`);
const img6p1 = document.querySelector(`.img6-p1`);

const img1p2 = document.querySelector(`.img1-p2`);
const img2p2 = document.querySelector(`.img2-p2`);
const img3p2 = document.querySelector(`.img3-p2`);
const img4p2 = document.querySelector(`.img4-p2`);
const img5p2 = document.querySelector(`.img5-p2`);
const img6p2 = document.querySelector(`.img6-p2`);

const h2 = document.querySelector(`h2`);
const h3 = document.querySelector(`h3`);
const winner = document.querySelector(`.winner-announcement`);

const player1NameElement = document.querySelector('.p1');
const player1NameInput = document.querySelector('#player1Name');
function updatePlayer1Name() {
  player1NameElement.textContent = player1NameInput.value;
}
const player2NameElement = document.querySelector('.p2');
const player2NameInput = document.querySelector('#player2Name');
function updatePlayer2Name() {
  player2NameElement.textContent = player2NameInput.value;
}

function name2(event) {
  if (event.key === 'Enter') {
    player2NameInput.classList.add('hidden');
  }
}
function name1(event) {
  if (event.key === 'Enter') {
    player1NameInput.classList.add('hidden');
  }
}

player1NameInput.addEventListener('keydown', name1)
player2NameInput.addEventListener('keydown', name2)

player1NameInput.addEventListener('input', updatePlayer1Name);
player2NameInput.addEventListener('input', updatePlayer2Name);


function playAgain() {
  let diceRollp1 = Math.floor(Math.random() * 6 + 1);
  let diceRollp2 = Math.floor(Math.random() * 6 + 1);
  const imagesp1 = [img1p1, img2p1, img3p1, img4p1, img5p1, img6p1];
  const imagesp2 = [img1p2, img2p2, img3p2, img4p2, img5p2, img6p2];
  imagesp1.forEach(image => image.classList.add(`hidden`))
  imagesp2.forEach(image => image.classList.add(`hidden`))

  imagesp1[diceRollp1 - 1].classList.remove(`hidden`)
  imagesp2[diceRollp2 - 1].classList.remove(`hidden`)

  if (diceRollp1 === diceRollp2) {
    winner.textContent = 'Ita a Draw!'
  } else if (diceRollp2 > diceRollp1) {
    winner.textContent = player2NameInput.value + ' wins'
  } else if (diceRollp2 < diceRollp1) {
    winner.textContent = player1NameInput.value + ' wins'
  }

  playButton.textContent = 'play again'
  h2.classList.add('hidden')
  h3.classList.add('hidden')
};

playButton.addEventListener('click', playAgain);

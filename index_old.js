// Import stylesheets
import './style.css';

const app = document.getElementById('app');

// State
const winningStates = [
  // Diagonal
  [0, 4, 8],
  [2, 4, 6],

  // Columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // Rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

let xState = [];
let oState = [];

let xTurn = true;

// Draw
const grid = document.createElement('div');
grid.classList.add('grid');

for (let i = 0; i < 9; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');

  cell.dataset.id = i;

  grid.appendChild(cell);
}

const result = document.createElement('div');
result.classList.add('result');

const resultText = document.createElement('p');
resultText.textContent = 'Game over!';

const restartButton = document.createElement('button');
restartButton.textContent = 'Restart';

// added game over
restartButton.addEventListener('click', () => {
  result.remove();

  const cellDiv = document.querySelectorAll('.cell');
  cellDiv.forEach((cell) => cell.classList.remove('x', 'o'));

  // reset state
  xState = [];
  oState = [];

  resultText.textContent = 'Game over!';

  xTurn = true;
});

result.appendChild(resultText);
result.appendChild(restartButton);

app.appendChild(grid);

// app.appendChild(result);

// Events
const cellDiv = document.querySelectorAll('.cell');

const drawCell = (element, xTurn) =>
  xTurn ? element.classList.add('x') : element.classList.add('o');

const saveTurn = (value, xTurn) =>
  xTurn ? xState.push(value) : oState.push(value);

const checkWin = (winningState, state) =>
  winningState.every((number) => state.includes(number));

const turn = (event) => {
  // click validation
  const element = event.target;
  if (element.classList.contains('x') || element.classList.contains('o'))
    return;

  // draw x/o
  drawCell(element, xTurn);

  // save cell index
  saveTurn(parseInt(element.dataset.id), xTurn);

  console.log(xState, oState);

  // winner
  winningStates.forEach((winningState) => {
    const xWins = checkWin(winningState, xState);
    const oWins = checkWin(winningState, oState);

    if (xWins || oWins) {
      resultText.textContent = xWins ? 'X win!' : 'O win!';

      app.appendChild(result);

      return;
    }
  });

  // game over
  if (xState.length + oState.length === 9) {
    app.appendChild(result);

    return;
  }

  // x or o
  xTurn = !xTurn;
};

cellDiv.forEach((cell) => cell.addEventListener('click', turn));

// game
// - start game
// - calculate winner
// - calculate game over
// - restart game

// winning state

// turn
// - validation turn +++

//// Components

// Grid (Board) +++
// Cell +++
// Result
// Button

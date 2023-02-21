// Import stylesheets
import './style.css';

const app = document.getElementById('app');

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

result.appendChild(resultText);
result.appendChild(restartButton);

app.appendChild(grid);

// app.appendChild(result);

import { Cell } from './Cell';

export const Grid = ({ onClickCell }) => {
  const grid = document.createElement('div');
  grid.classList.add('grid');

  for (let i = 0; i < 9; i++) {
    const cell = Cell({ id: i, onClick: onClickCell });

    grid.appendChild(cell);
  }

  return grid;
};

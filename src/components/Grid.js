import { Cell } from './Cell';

export const Grid = ({ onClickCell }) => {
  const gridParent = document.createElement('div');
  gridParent.classList.add('grid');

  const grid = document.createElement('div');
  grid.classList.add('grid');

  for (let i = 0; i < 9; i++) {
    const cell = Cell({ id: i, onClick: onClickCell });

    grid.appendChild(cell);
  }

  gridParent.appendChild(grid);

  return gridParent;
};

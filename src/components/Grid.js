import { Cell } from './Cell';
import { turnIsRecorded } from '../utils/turn';

export const Grid = () => {
  const grid = document.createElement('div');
  grid.classList.add('grid');

  let xState = [];
  let oState = [];

  let xTurn = true;

  const onClick = (event) => {
    const element = event.target;
    const id = parseInt(element.dataset.id);

    if (turnIsRecorded([...xState, ...oState], id)) return;

    xTurn ? xState.push(id) : oState.push(id);

    element.classList.add(xTurn ? 'x' : 'o');

    xTurn = !xTurn;

    console.log(xState, oState);
  };

  for (let i = 0; i < 9; i++) {
    const cell = Cell({ id: i, onClick });

    grid.appendChild(cell);
  }

  return grid;
};

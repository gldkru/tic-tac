import { turnIsRecorded } from '../utils/turn';
import { Grid } from './Grid';

export const App = () => {
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

  return Grid({ onClickCell: onClick });
};

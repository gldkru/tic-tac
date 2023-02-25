import { turnIsRecorded } from './turn';

export const startGame = () => {
  let xState = [];
  let oState = [];

  let xTurn = true;

  const turn = ({ id }) => {
    if (turnIsRecorded([...xState, ...oState], id)) return;

    xTurn ? xState.push(id) : oState.push(id);

    xTurn = !xTurn;

    console.log(xState, oState);
  };

  const resetGame = () => {};

  return {
    xState,
    oState,
    turn,
    resetGame,
  };
};

import { turnIsRecorded, calculateWinner, calculateGameOver } from './turn';
import { winningStates } from './consts';

export const startGame = () => {
  let xState = [];
  let oState = [];

  let xTurn = true;

  const turn = ({ id }) => {
    if (turnIsRecorded([...xState, ...oState], id)) return;

    xTurn ? xState.push(id) : oState.push(id);

    // calculate winner

    // calculate game over
    if (calculateGameOver([...xState, ...oState])) {
      console.log('Game over!');

      return;
    }

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

import { turnIsRecorded, calculateWinner, calculateGameOver } from './turn';
import { winningStates } from './consts';

export const startGame = ({ showGameResult }) => {
  const initialValues = () => {
    return {
      xState: [],
      oState: [],
      xTurn: true,
    };
  };

  let { xState, oState, xTurn } = initialValues();

  const turn = ({ id }) => {
    if (turnIsRecorded([...xState, ...oState], id)) return;

    xTurn ? xState.push(id) : oState.push(id);

    const winner = calculateWinner({ xState, oState, winningStates });
    if (winner) {
      if (typeof showGameResult === 'function') {
        showGameResult({
          text: winner === 'x' ? 'X wins!' : 'O wins!',
          onReset: initialValues,
        });
      }

      return;
    }

    if (calculateGameOver([...xState, ...oState])) {
      if (typeof showGameResult === 'function') {
        showGameResult({ text: 'Game over!', onReset: initialValues });
      }

      return;
    }

    xTurn = !xTurn;

    console.log(xState, oState);
  };

  return {
    xState,
    oState,
    turn,
  };
};

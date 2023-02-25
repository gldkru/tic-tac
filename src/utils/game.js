export const startGame = () => {
  let xState = [];
  let oState = [];

  let xTurn = true;

  const turn = ({ id }) => {
    if (turnIsRecorded([...xState, ...oState], id)) return;

    xTurn ? xState.push(id) : oState.push(id);

    element.classList.add(xTurn ? 'x' : 'o');

    xTurn = !xTurn;

    console.log(xState, oState);
  };

  const resetGame = () => {};

  return {
    turn,
    resetGame,
  };
};

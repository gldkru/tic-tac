import { startGame } from '../utils/game';
import { renderClassLists } from '../utils/dom';
import { Grid } from './Grid';

export const App = () => {
  const { turn, resetGame, xState, oState } = startGame();

  return Grid({
    onClickCell: (event) => {
      turn({ id: parseInt(event.target.dataset.id) });

      renderClassLists({
        queryClassName: '.cell',
        className: 'x',
        compare: (element) => {
          return xState.includes(parseInt(element.dataset.id));
        },
      });

      renderClassLists({
        queryClassName: '.cell',
        className: 'o',
        compare: (element) => {
          return oState.includes(parseInt(element.dataset.id));
        },
      });
    },
  });
};

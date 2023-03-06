import { startGame } from '../utils/game';
import { renderClassLists } from '../utils/dom';
import { Grid } from './Grid';
import { Result } from './Result';

export const App = () => {
  let { turn, xState, oState } = startGame();

  const renderDOMClasses = () => {
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
  };

  const grid = Grid({
    onClickCell(event) {
      console.log('turn');
      turn({
        id: parseInt(event.target.dataset.id),
        showGameResult: ({ text }) => {
          // "this" or "grid"
          this.appendChild(
            Result({
              text,
              onClick: (event) => {
                event.stopPropagation();
                const props = startGame();

                // updated props
                // from new game state
                turn = props.turn;
                xState = props.xState;
                oState = props.oState;

                renderDOMClasses();
              },
            })
          );
        },
      });

      renderDOMClasses();
    },
  });

  return grid;
};

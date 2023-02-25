export const Cell = ({ id }) => {
  const cell = document.createElement('div');
  cell.classList.add('cell');

  cell.dataset.id = id;

  return cell;
};

export const Cell = ({ id, onClick }) => {
  const cell = document.createElement('div');

  cell.classList.add('cell');
  cell.dataset.id = id;

  if (typeof onClick === 'function') {
    cell.addEventListener('click', onClick);
  }

  return cell;
};

import { Button } from './Button';

export const Result = ({ text, onClick }) => {
  const result = document.createElement('div');
  result.classList.add('result');

  const resultText = document.createElement('p');
  resultText.textContent = text;

  const button = Button({
    text: 'Restart game',
    onClick: (event) => {
      onClick(event);

      result.remove();
    },
  });

  result.appendChild(resultText);
  result.appendChild(button);

  return result;
};

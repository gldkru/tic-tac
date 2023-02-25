export const renderClassLists = ({ queryClassName, className, compare }) => {
  const elements = document.querySelectorAll(queryClassName);

  if (!elements.length) return;

  elements.forEach((element) => {
    if (compare(element)) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  });
};

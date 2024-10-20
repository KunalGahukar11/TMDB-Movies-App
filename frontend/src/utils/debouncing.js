export const debounce = (func, delay) => {
  let timerId;

  return (...args) => {
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }

    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

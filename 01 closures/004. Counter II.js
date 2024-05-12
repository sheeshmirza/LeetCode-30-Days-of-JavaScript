var createCounter = function (init) {
  let counter = init;
  const originalValue = init;
  return {
    increment: () => ++counter,
    decrement: () => --counter,
    reset: () => {
      counter = originalValue;
      return counter;
    },
  };
};
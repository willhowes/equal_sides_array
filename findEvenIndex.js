const findEvenIndex = array => {
  const arrayTotal = array.reduce((a, b) => a + b, 0);
  const halfOfTotal = arrayTotal / 2;
  let i = 0;
  let runningTotal = 0;
  while (runningTotal < halfOfTotal) {
    runningTotal = runningTotal + array[i];
    i++;
  }
  return i - 1;
};

module.exports = findEvenIndex;

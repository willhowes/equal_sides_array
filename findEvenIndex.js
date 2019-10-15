const findEvenIndex = array => {
  const arrayTotal = array.reduce((a, b) => a + b, 0);
  const halfOfTotal = arrayTotal / 2;
  let i = 0;
  let runningTotal = 0;

  while (runningTotal < halfOfTotal) {
    runningTotal = runningTotal + array[i];
    i++;
  }

  let middleIndex = i - 1;
  const firstHalfTotal = array.slice(0, middleIndex).reduce((a, b) => a + b, 0);
  const secondHalfTotal = array
    .slice(middleIndex + 1, array.length)
    .reduce((a, b) => a + b, 0);

  if (firstHalfTotal === secondHalfTotal) {
    return middleIndex;
  } else {
    return -1;
  }
};

module.exports = findEvenIndex;

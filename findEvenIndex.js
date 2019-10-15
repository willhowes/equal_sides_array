const findEvenIndex = array => {
  const arrayTotal = array.reduce((a, b) => a + b, 0);
  const halfOfTotal = arrayTotal / 2;
  let i = 0;
  let runningTotal = 0;
  while (runningTotal <= halfOfTotal) {
    runningTotal = runningTotal + array[i];
    i++;
  }
  let middleIndex = i - 1;
  const firstHalfArray = array.slice(0, middleIndex);
  const secondHalfArray = array.slice(middleIndex + 1, array.length);

  const firstHalfTotal = array => {
    if (firstHalfArray === undefined || array.length == 0) {
      return 0;
    } else {
      return firstHalfArray.reduce((a, b) => a + b, 0);
    }
  };

  const secondHalfTotal = array => {
    if (secondHalfArray === undefined || array.length == 0) {
      return 0;
    } else {
      return secondHalfArray.reduce((a, b) => a + b, 0);
    }
  };

  if (firstHalfTotal(firstHalfArray) === secondHalfTotal(secondHalfArray)) {
    return middleIndex;
  } else {
    return -1;
  }
};

module.exports = findEvenIndex;

const findEvenIndex = array => {
  const arrayTotal = array.reduce((a, b) => a + b, 0);
  const halfOfTotal = arrayTotal / 2;
  let i = 0;
  let runningTotal = 0;
  while (runningTotal < halfOfTotal) {
    runningTotal = runningTotal + array[i];
    console.log(`INDEX: ${i}`);
    console.log(`RUNNING TOT: ${runningTotal}`);
    i++;
  }
  console.log("---END OF TEST----");
  return i - 1;
  // let halfway = array.length / 2;
  // return Math.floor(halfway);
};

module.exports = findEvenIndex;

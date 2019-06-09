// Your task is to make function, which returns the sum of a sequence of integers.
// The sequence is defined by 3 non-negative values: begin, end, step.
// If begin value is greater than the end, function should returns 0

const sequenceSum = (begin, end, step) => {
  var sum = 0;
  if (begin > end) {
    return 0;
  } else {
    while (begin <= end) {
      sum += begin;
      begin += step;
    }
  }
  return sum;
};

console.log(sequenceSum(1,5,3));

const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0;
  }
  return begin + sequenceSum(begin + step, end, step);
};

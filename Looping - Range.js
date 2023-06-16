const range = function(start, end, step) {
 
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return [];
  }

  const result = [];

  
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }

  return result;
};

console.log(range(0, 10, 2));    // [ 0, 2, 4, 6, 8, 10 ]
console.log(range(10, 30, 5));   // [ 10, 15, 20, 25, 30 ]
console.log(range(-5, 2, 3));    // [ -5, -2, 1 ]
console.log(range(0, 10, -1));   // []
console.log(range(10, 5, 2));    // []
console.log(range(0, 10));       // []

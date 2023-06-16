function loopFunction() {
  for (let i = 100; i <= 200; i++) {
    console.log("Iteration: " + i);
  }
}

// Call the loop function
loopFunction();

function isMultipleOfThree(number) {
  if (number % 3 === 0) {
    return "Loopy"; // The number is a multiple of 3
  } else {
    return false; // The number is not a multiple of 3
  }
}
console.log(isMultipleOfThree(102));
console.log(isMultipleOfThree(189));
console.log(isMultipleOfThree(104));

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}
const numberOfVowels = function(data) {
  // Put your solution here
const vowels = ["a", "e", "i", "o", "u"]
let count = 0;

for (let i = 0; i < data.length; i++) {
  if (vowels.includes(data[i])) {
   count++; 
  }

}
return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

/*In this exercise, we will be counting the number of vowels that appear in a given string. For this exercise, consider the following to be vowels: a, e, i, o, and u.

Input
const numberOfVowels = function(data) {
  // Put your solution here
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
Expected Output
3
5
5*/
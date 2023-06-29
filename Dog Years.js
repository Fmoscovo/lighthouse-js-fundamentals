/*Dog Years
Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?*/


const myAge = 37;
//fixed const//
let earlyYears = 2;
//used for calculation//
earlyYears *= 10.5;
let laterYears = myAge - 2;
//used for calculation//
laterYears *= 4;
//used for calculation//
console.log(earlyYears);
console.log(laterYears);
let myAgeInDogYears = earlyYears + laterYears;
let myName = 'Filipe'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.
`);

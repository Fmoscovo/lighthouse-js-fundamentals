let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
let age = 17;

if (age >= 18 && registeredEarly) {
  raceNumber += 1000;
}

if (age > 18 && registeredEarly) {
  console.log("Your NUMBER is " + raceNumber + " - Your race will start at 9:30am!");
  } else if (age > 18 && registeredEarly === false){
console.log("Your NUMBER is " + raceNumber + " - Your race will start at 11:00am!");
  } else if (age < 18 ){
console.log("Your NUMBER is " + raceNumber + " - Your race will start at 12:00pm!");
  } else {
    console.log("See the Registration desk")
  }
  
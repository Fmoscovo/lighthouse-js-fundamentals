let username = "";
username ? console.log("Hello, " + username + "!") : console.log('Hello!');
let userQuestion = "";
console.log(username + userQuestion)
let randomNumber = Math.floor(Math.random() * 8);
let eitghtBall = randomNumber
switch (randomNumber) {
  case 0:
    eightBall = "Yes";
    break;
  case 1:
    eightBall = "No";
    break;
  case 2:
    eightBall = "Maybe";
    break;
  case 3:
    eightBall = "Not sure, ask again!";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "Signs point to a yes";
    break;
  case 6:
    eightBall = "It is certain!";
    break;
  case 7:
    eightBall = "Try again!";
    break;
  default:
    eightBall = "Unknown response";
    break;
}

console.log(`Magic Eight Ball says: ${eightBall}`);
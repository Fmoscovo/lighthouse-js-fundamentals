/*Sleep Debt Calculator
Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.*/

function getSleepHours(day){
  switch (day) {
    case 'monday':
    return 8
    break;
    case 'tuesday':
    return 8
    break;
    case 'wednesday':
    return 8
    break;
    case 'thursday':
    return 8
    break;
    case 'friday':
    return 8
    break;
    case 'saturday':
    return 8
    break;
    case 'sunday':
    return 8
    break;
  }
}

const getActualSleepHours = () => {
  let totalSleepHours = 0;

  if (getSleepHours('monday')) {
    totalSleepHours += getSleepHours('monday');
  }
  if (getSleepHours('tuesday')) {
    totalSleepHours += getSleepHours('tuesday');
  }
  if (getSleepHours('wednesday')) {
    totalSleepHours += getSleepHours('wednesday');
  }
  if (getSleepHours('thursday')) {
    totalSleepHours += getSleepHours('thursday');
  }
  if (getSleepHours('friday')) {
    totalSleepHours += getSleepHours('friday');
  }
  if (getSleepHours('saturday')) {
    totalSleepHours += getSleepHours('saturday');
  }
  if (getSleepHours('sunday')) {
    totalSleepHours += getSleepHours('sunday');
  }

  return totalSleepHours;
};

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

   if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got' + (actualSleepHours - idealSleepHours) + 'hours more sleep than you need this week.' + "You got more sleep than needed. You're well-rested!");
  } else if (actualSleepHours < idealSleepHours){
    console.log(" You got" + (idealSleepHours - actualSleepHours) + 'hours less sleep than you need this week.'+"You should get some more sleep. You're sleep deprived!");
  }
};

calculateSleepDebt();
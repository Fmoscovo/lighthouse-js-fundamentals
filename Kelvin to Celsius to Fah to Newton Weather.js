const kelvin = 35;
// this is the forecast for today//
let celsius = kelvin - 273;
// this is celsius calculation//
let fahrenheit = celsius * (9/5) + 32;
// this is the calculatioon//
fahrenheit = Math.floor(fahrenheit);
//rounding up the calculation//
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${celsius} degrees Celsius.`);
let newton = celsius *(33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`)



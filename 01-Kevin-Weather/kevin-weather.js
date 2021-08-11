//Create a variable named kelvin, and set it equal to 293.
const kelvin = 293;

//Convert Kelvin to Celsius by subtracting 273 and store in celsius.
let celsius = kelvin - 273;

//Calculate Fahrenheit, then store the answer in a variable named fahrenheit.
let fahrenheit = celsius*(9/5)+32;

//Round down the Fahrenheit temperature.
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

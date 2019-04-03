//your code here
console.log('hello from file');
let kelvin = prompt('Quelle est la température en Kelvin aujourd\'hui ?');
let celsius = kelvin - 273; //La température en degrés Celsius est obtenue en soustrayant 273 à la valeur de la variable Kelvin
let farenheit = Math.floor(celsius * (9/5) + 32); //La température en degrés farenheit est obtenue grâce à l'équation utilsant la valeur de la variable celsius, on arrondit le résultat avec la méthode .floor() pour obtenir un nombre entier
console.log(farenheit);
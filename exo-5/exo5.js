// you can write js here

console.log('exo-5');

var input = 'Turpentine and turtles';
var vowels = ['a','e','i','o', 'u', 'y'];
var resultArray = [];

for(let i = 0; i < input.length; i++){
    for (let j = 0; j < vowels.length; j++){
        if (input[i] === vowels[j]){
            resultArray.push(input[i])
        }
    }
    console.log(input[i]);

    console.log(resultArray);

    console.log(resultArray.join().toUpperCase());

   

   //console.log(vowels.indexOf(input[i]));


}


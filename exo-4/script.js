// you can write js here

console.log('exo-124');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

console.log(secretMessage.pop());

console.log(secretMessage.push('to', 'program'));

var easilyIndex = secretMessage.indexOf("easily");
console.log(secretMessage[easilyIndex] = "right");

console.log(secretMessage.shift());

console.log(secretMessage.unshift("Programming"));

var getIndex = secretMessage.indexOf("get");
console.log(secretMessage.splice(getIndex, 5, "know" ));

console.log(secretMessage.join());






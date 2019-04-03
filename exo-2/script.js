// you can write js here
console.log('exo-2');
var isRegistered; // variable globale
var runnerAge;

if(!isRegistered){
    var raceNumber = Math.floor(Math.random()*1000)
}

if(isRegistered && runnerAge > 18){
    console.log('You will race at 9:30 am');
}else if(isRegistered || runnerAge > 18){
    console.log('You will race at 11:00 am ' + raceNumber);
}else if( runnerAge < 18 || !isRegistered){
    console.log('You will race at 12:30 pm ' + raceNumber);
}else{
    console.log('Go to see the registration desk');
}

runnerAge = 16;
isRegistered = true;

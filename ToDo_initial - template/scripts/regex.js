// jugando con regex


let soccerWord = "1.35285gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));

goRegex = /[a-z]+/;
console.log(soccerWord.trim().match(goRegex));
console.log(goRegex.test(soccerWord));
// \d es para seleccionar los numeros
let numString = "Your sandwich will be $5.00";
let noNumRegex = /\d/g; // Change this line
let result = numString.match(noNumRegex).length;
console.log(result);
// \D selecciona los q NO sean numeros
// \w para seleccionar letras del abcdario y numeros
// \W para No seleccionar letras del abcdario y numeros
/*
1) If there are numbers, they must be at the end.
2) Letters can be lowercase and uppercase.
3) At least two characters long. Two-letter names can't have numbers.
*/ 

let username = "MrPaLiZa";
//let userCheck = /^[a-z]{3,}\d*$|^[a-z]{2,2}\D*$/i;
let userCheck = /^[a-z]{3,20}\D*$/i;
//||^[a-z][a-z]\D*$/i; // Change this line
let result2 = userCheck.test(username);

console.log(result2);
console.log(username.match(userCheck));
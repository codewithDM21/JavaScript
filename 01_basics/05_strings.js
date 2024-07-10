const name = "deoraj"
const repoCount = 50

// console.log(name  + repocount + "Value");

// Stringinterpolation
console.log(`Hello my name is ${name} and my repo count is
    ${repoCount}`);

const gameName = new String ('deoraj-dm')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);


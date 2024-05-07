const gameName = "hitesh_hc";
//console.log(gameName[0]); // Output: h
//console.log(gameName.__proto__); // Output: [String: '']

//console.log(gameName.length); // Output: 8
//console.log(gameName.toUpperCase()); // Output: HITESHHC
console.log(gameName.charAt(2)); // Output: T
console.log(gameName.indexOf("h")); // Output: 0



const newString = gameName.substring(0, 4);
console.log(newString);


const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   hitesh   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hiteshchoudhary.com/hitesh%20choudhary";
console.log(url.replace("%20", "_"));

console.log(url.split("/"));


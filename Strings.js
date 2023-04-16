// String: Properties, methods & templates literals 

console.log("We are in console");
const name = "Aditya";
const greet = "Good morning, ";
console.log(greet + name);

// .concat() function adds new strings to the existing string
let html;
html = "<h1> This is a HEADING </h1>";

html = html.concat("This", " Add");
console.log(html);

// To find length of the variable use .length keyword 

console.log(html.length);

// To convert the string / set of strings into Upper case use .toUpperCase() function

console.log(html.toUpperCase());

// To convert the string / set of strings into lower case use .toUpperCase() function

console.log(html.toLowerCase());

// To find the index of any string use .indexOf() function

console.log(html.indexOf("This"));

// To find the last index of any string use .lastIndexOf() function

console.log(html.lastIndexOf("This"));
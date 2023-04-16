// Type conversion and type coercion

// Type conversion

// Conversion of a number into a string
let num;
num = String(34);
console.log(num, (typeof num));

// conversion of Boolean into string
let someting = true;
console.log(someting , (typeof someting));

let someting1 = String(true);       // conversion
console.log(someting1, (typeof someting1));

// conversion of date into string
let din = new Date();
console.log(din, (typeof din));

let din1 = String(new Date());      // conversion
console.log(din1, (typeof din1));

// conversion of an array into 

let row = [1, 2, 3, 4, 5];
console.log(row, (typeof row));

let row1 = String([1, 2, 3, 4, 5]);   // conversion
console.log(row1, (typeof row1)); 

// Another way of converting these datatypes into string is : use toString method 

// toString function 

let number = 34;
console.log(number.toString());

// number function
let str = Number("3434");
console.log(str, (typeof str));

// if we insert a charecter in between than the console will show NaN(Not a Number) because a char cannot be converted into a number. for example
let str1 = Number("1234f");
console.log(str1, (typeof str1));

// 2 functions to change number into int or float

let numm = parseInt('22.334'); //output will be 22
let numm1 = parseFloat('343.22');

console.log(numm, (typeof numm));
console.log(numm1, (typeof numm1));

// if we want to get the desired decimal number length than we can use toFixed method
console.log(numm.toFixed(10), (typeof numm)); // here we will find that the length or the number of decimals will be 10 


// Type Coercion

let the_str = "223";
let this_num = 22;

console.log(the_str + this_num);

/* Whenever we try to add a string to a number in javascript
    then JS has two ooptions, either it can change string into a number or
    it can change numbr into a string and than it concatinate them.

    here the answer will be 22322.

    but if we convert the string into Number() than the answer will change and both the 
    numbers will be added = 245.
*/

let the_str1 = Number("223");
let this_num1 = 22;

console.log(the_str1 + this_num1);


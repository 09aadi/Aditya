//***** primitive datatype ******:

// String
let name = 'Aditya';
console.log("The dataType is " + (typeof name));

// Numbers
let marks = 99;
console.log("The dataType is " + (typeof marks));

// Boolean
let water = true;
console.log("The datatype is " + (typeof water));

// Undefined
let anything = undefined;
console.log("The dataType is " + (typeof anything));

// Null (it is defined as an oblect but still it is a primitive dataType)
let thisThing = null;
console.log("The dataType is " + (typeof thisThing));

// ***** Refrence dataTypes *****:

// Array
let arr1 = [2, 3, 4, 5, 6];
console.log("The dataType is " + (typeof arr1) + " Array");

// Object literals
let food = {
    Indian: "roti",
    Chinese: "noodles",
    Italian: "pasta"
}
console.log("This dataType is " + (typeof food) + " Object literals");

// functions
function history()
{

}
console.log("This dataType is " + (typeof history));

// Date
let date = new Date();
console.log("This dataType is " + (typeof date) + " Date");
let myName: string = 'Isaac';

// ts infers type of variables (string, number, etc.) unless we declare it a certain type

// myName = 42; is wrong because myName is a string and not a number

myName = 'Maya';

let meaningOfLife: number;
let isLoading: boolean;
let album: any; // any type defeats ts since you assign any data type
let nice: string | number; // can assign two variables to ts

meaningOfLife = 42;
isLoading = true;
album = true;
album = 42; // you might need to use the any type at moments
nice = '5150';
nice = 5150;

const sum = (a: number, b: string) => {
  // a and b is assigned the any type if not assigned
  return a + b;
}; // sum returns the sum of the number parameters if both are numbers
// sum returns the string of the sum of number + string as a string

let postId: string | number; // this is a union type
let isActive: number | boolean | string; // union types aren't limited to those types

let re: RegExp = /\w+/g; // this selects all data types and gives it a regular expression
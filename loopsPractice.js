// // for loop
// // Initialize - Condition - Increment
// // 1. Print numbers from 1 to 10
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// // 2. Print even numbers from 2 to 20
// for (let x = 2; x <= 20; x += 2) {
//     console.log(x);
// }
// // 3. Print the elements of an array
// // let fruits = ["Apple", "Mango", "Banana", "Orange", "PineApple"];
// // for (let f = 0; f < fruits.length; f++) {
// //     console.log(fruits[f]);
// // }
// // 4. Calculate the sum of the first 5 natural numbers
// let sum = 0;
// for (a = 0; a <= 5; a++) {
//     sum += a;
// }
// console.log("sum: ", sum);
// // 5. Print numbers in reverse order (10 to 1)
// for (let reverseNumb = 10; reverseNumb >= 1; reverseNumb--) {
//     console.log(reverseNumb);
// }
// // 6. Iterate over characters of a string
// let subject = "javascript";
// for (let js = 0; js < subject.length; js++) {
//     console.log(subject[js]);
// }
// // 7. Find the factorial of a number
// let num = 5;
// let factorial = 1;
// for (let f = 1; f <= num; f++) {
//     factorial *= f;
// }
// console.log("Factorial :", factorial);
// // 8. Filter out negative numbers from an array
// let mixedNumb = [1, -3, 8, 10, 5, 7, -5, -7];
// for (i = 0; i < mixedNumb.length; i++) {
//     if (mixedNumb[i] >= 0) {
//         console.log(mixedNumb[i]);
//     }
// }
// // 9. Nested for loop to create a pattern
// for (let N = 1; N <= 5; N++) {
//     let row = "";
//     for (let O = 1; O <= N; O++) {
//         row += "*";
//     }
//     console.log(row);
// }

// // for loop
// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }

// let text = "";
// for (let i = 0; i <= 5; i++) {
//     console.log("The number is " + i);
// }

// // let fruits = ["Apple", "Mango", "Banana", "Orange", "PineApple"];
// // for (i = 0; i < fruits.length; i++) {
// //     console.log(fruits[i]);
// // }
// // for in loop
// let person = { fname: "Hameeda", lname: "bhanu", age: 45 };
// let txt = "";
// for (let x in person) {
//     txt += person[x] + " ";
// }
// console.log(`My Mother name is ${person.fname + " " + person.lname} and age is ${person.age}! `);

// // for loop
// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }
//                     // for in loop :
// // it gives the direct index (numberwise values in the console. by using the variableName)... 
// let fruits = ["Apple", "Mango", "Banana", "Orange", "PineApple"];
// // variableName + array Name :
// for (let x in fruits) {
//     console.log(x, fruits[x]);
// }
// // Expected Output: 
// // 0 Apple
// // 1 Mango
// // 2 Banana
// // 3 Orange
// // 4 PineApple

//                     // for of loop :
// // let fruits = ["Apple", "Mango", "Banana", "Orange", "PineApple"];
// // it gives the direct values of the array in the console. by using the variableName)... 
// // variableName + arrayName :
// for (let x of fruits) {
//     console.log(x);
// }
// // Expected Output: 
// // Mango
// // Banana
// // Orange
// // PineApple

//                     // while loop
// //  while loop loops through the block of code as long as a specified condition is true.
// let n = 0;
// while(n<=5) {
//     n++;
//     // console.log(n);
// }
// console.log(n); //6

//                     // do while loop
// // do while loop execute the code once before checking the condition is true, 
// // later it will check for the condition ..if it is true , then loop through as long as the condition is true. 
// let x = 0;
// let result = '';
// do{
//     x = x + 1;
//     result = result + x ;
// }
// while(x<5);
// console.log(result); //12345


// Here are 10 useful and commonly asked interview questions on loops in JavaScript:
/* 1. Explain the different types of loops in JavaScript.
Follow-up: When would you use for, while, or for...of loops over others? */
//loops are used to execute a block of code a number of times. each time  with a different value, u can run the same code over and over again..so loops are handy.
//There are 5 types. for , for in , for of, while, do while loops.
// for (let i= 1; i<=5; i++){
//     console.log(i);
// }  //for loop
// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++;
// } //while loop
// do {
//     console.log(i);
//     i++;
// } while (i <= 5);
// let numbers = [57, 75, 33, 88];
// let txt = " ";
// for (let num of numbers) {
//     txt += num + " ";
//     console.log(txt);
// }
// let person = {Fname : "AK", Lname : "Shaik", Age : "23"};
// let names = " ";
// for(let key in person) {
//     names += `${key}: ${person[key]} \n`;
//     console.log(names);
// }

// let person = {Fname : 'Ak' , Lname : 'Shaik' , Age : 23}
// let txt = ' ';
// for(let key in person){
//     txt += `${key} ${person[key]} \n`;
//     console.log(txt);
// }
/*2. Write a program to print the Fibonacci sequence up to a given number using a loop.
Example: Input: 10, Output: 0, 1, 1, 2, 3, 5, 8 */
// Iterative approach :
// function findFibonacci(n) {
//     let fib = [0, 1]; // Starting with the first two Fibonacci numbers
//     for (let i = 2; i < n; i++) {
//         fib.push(fib[i - 1] + fib[i - 2]);  // Add the next Fibonacci number
//     }
//     return fib;
// }
// console.log(findFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
/*3. How do you break out of nested loops in JavaScript?
Hint: Use labels with break.
Example: Exit an outer loop when a condition in an inner loop is met. */
// for (let i = 0; i <=10; i++) {
//     for(i%2===0;){
        
//     }
//       console.log(i);
// }



// for(index%2===0; index < 10; index++){
//     console.log(`${index} is divided by 2`);
//     break;
// }

// if (index % 2 === 0) {
//     console.log(`${index} is divided by 2`);
//     break;
// }
// Challenge 1: Print Multiplication Table of 43
// for(i = 43; i<=43; i++){
//     for(j=1; j<=10; j++){
//         console.log(`${i} X ${j} = ${i * j}`);     
//     }
// }
/*4. Write a function that reverses an array using a loop.
Example: Input: [1, 2, 3, 4], Output: [4, 3, 2, 1] */

// let Input = [1, 2, 3, 4];
// function reversed() {
//     console.log(Input.reverse());
// }
// reversed();

/*5. What is the difference between for...of and for...in loops?
Follow-up: Write an example to demonstrate the difference. */

// for of loops Used to iterate over the values of an iterable (e.g., arrays, strings, maps, sets, etc.).
// Returns the value at each iteration.
// Cannot be directly used on objects (unless the object is made iterable).

// for in loop Returns the key/index at each iteration. 
// Often used with objects.
// let person = {name: 'ak', age: 23};
// for (let key in person){
//     console.log(`${key} : ${person[key]}`);
// }
// let fruits = ['apple', 'banana', 'grapes'];
// for(let fruit of fruits){
//     console.log(fruit);
// }

/*6. Write a program to check if a given string is a palindrome using a loop.
Example: Input: "madam", Output: true */
// let palindromeName = "mam";
// function palindromeCheck(str) {
//     let reversedStr = str.split('').reverse().join('');  
//     if(str === reversedStr){
//         return `${str} is a palindrome`;
//     }else{
//         return `${str} is not a palindrome`;
//     }
// }
// console.log(palindromeCheck(palindromeName));

// let myname = "mom";
// console.log(myname === myname.split('').reverse().join('')); //true

/*7. How would you use a loop to remove duplicate values from an array?
Example: Input: [1, 2, 2, 3, 4, 4], Output: [1, 2, 3, 4] */
function removeDuplicates(arr) {
    let uniqueArray = [];
    for(let i = 0; i<arr.length; i++){
        if(!uniqueArray.includes(arr[i])){
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}
const inputArray = [1, 2, 2, 3,5,6, 4, 4];
console.log(removeDuplicates(inputArray));

// function removeDuplicates(arr) {
//     let uniqueArray = []; // Array to store unique values

//     for (let i = 0; i < arr.length; i++) {
//         if (!uniqueArray.includes(arr[i])) {
//             uniqueArray.push(arr[i]); // Add the value if it's not already in the uniqueArray
//         }
//     }

//     return uniqueArray; // Return the array with duplicates removed
// }

// const inputArray = [1, 2, 2, 3, 4, 4];
// const outputArray = removeDuplicates(inputArray);
// console.log(outputArray); // Output: [1, 2, 3, 4]





/*
8. Write a program to find the factorial of a number using both for and while loops.
Example: Input: 5, Output: 120
9. Explain the difference between continue and break with examples.
Follow-up: Write a program that skips multiples of 3 in a loop but stops the loop if the number 50 is encountered.
10. Write a program to flatten a nested array using loops.
Example: Input: [1, [2, [3, 4]]], Output: [1, 2, 3, 4]
*/
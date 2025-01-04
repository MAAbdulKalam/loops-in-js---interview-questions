/*JAVASCRIPT - Assignment - loops :

1. Multiplication Table Generator
Write a loop to generate and print the multiplication table for numbers from 1 to 10. */
for (let i = 1; i <= 10; i++) {
    console.log(`multiplication table for ${i}`);
    for (j = 0; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}
/*2. Sum of Even Numbers
Use a loop to calculate the sum of all even numbers between 1 and 50. */
let sum = 0;
for (let x = 1; x <= 50; x++) {
    if (x % 2 === 0) {
        console.log(x);
        sum += x;
    }
}
console.log(`sum of all even numbers b/w 1 and 50 is ${sum}`);

/*3. Reverse a String
Given a string (e.g., "JavaScript"), use a loop to reverse it and log the reversed string. */
let str = "JavaScript";
console.log(str.split("").reverse().join(" "));

/*4. Array Element Sum
Create an array of numbers and use a loop to calculate the sum of its elements. */
let arr = [1, 3, 5, 7, 2];
let sumOf = 0;
for (let i = 0; i < arr.length; i++) {
    sumOf += arr[i];
}
console.log(`sum of the array of numbers is ${sumOf}`);

/*5. Find Maximum in an Array
Use a loop to find the largest number in a given array (e.g., [3, 45, 7, 2, 19]). */
let array1 = [3, 45, 7, 2, 19];
// let largest = Math.max(...array1);
// console.log(`The largest number in the array is ${largest}`);  //45
let largest = array1[0];
for (let i = 1; i < array1.length; i++) {
    if (array1[i] > largest) {
        largest = array1[i];
    }
}
console.log(`The largest number is ${largest}`); //45

/*6. Print Odd Numbers
Use a loop to print all odd numbers between 1 and 20. */
//method - 1 :
for (let i = 0; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(`${i} is a odd number!`);
    }
}
//method - 2 :
for (let i = 1; i <= 20; i += 2) {
    console.log(`${i} is a odd number!`);
}

/*7. Countdown Timer
Write a loop to count down from 10 to 1 and print each number. */
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
/*8. Cumulative Sum
Use a loop to calculate the cumulative sum of numbers from 1 to a given number (e.g., n = 5
→ 1 + 2 + 3 + 4 + 5). */
let n = 5;
let summ = 0;
for (let i = 0; i<= n; i++){
    summ += i;  //adding the each number to the cumulative sum.
}
console.log(`The cumulative sum from 1 to ${n} is ${summ}`);

/*9. Skip Multiples of 3
Use a loop to print numbers from 1 to 30, skipping multiples of 3. */
for (let i = 1; i <= 30; i++) {
    if (i % 3 !== 0) {
        console.log(i);
    }
}

/*10. Find the First Divisible Number
Write a loop to find the first number between 1 and 50 that is divisible by 7. Use break
to exit the loop when found. */
for (let i = 1; i <= 50; i++) {
    if (i % 7 === 0) {
        console.log(`First number divisible b/w 1 and 50 is ${i}`);
        break;
    }
}

/*11. Stop When a Condition is Met
Given an array of numbers, write a loop that prints each number. Stop the loop using
break when a number greater than 100 is encountered. */
let arrNum = [1, 38, 57, 75, 105, 107, 750];
for (let i = 0; i <arrNum.length; i++) {
    if(arrNum[i]>100){
        break;
    }
    console.log(arrNum[i]);
}
   

/*12. Skip Specific Elements
Given an array of fruits, print all fruits except "Banana". Use continue to skip "Banana". */
let fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes'];

for (i = 0; i < fruits.length; i++) {
    if (fruits[i] === 'Banana') {
        continue; //skip the banana
    }
    console.log(fruits[i]);
}

/*13. Ignore Negative Numbers
Write a loop to calculate the sum of an array of numbers but skip any negative numbers using
continue. */
let numbers = [-1, -2, -3, -4, -5, 0, 1, 2, 3, 4, 5,];
let total = 0;
for (i=0; i< numbers.length; i++){
    if(numbers[i]<0){
        continue;
    }
    total += numbers[i];
}
console.log(`The sum of positive numbers is ${total}`);

/*14. Skip Empty Strings
Given an array of strings that includes empty strings (""), print only the non-empty strings. Use
continue to skip empty elements. */
let stringsMix = ["Ak", "Kissma", "", "Giri", ' ', "Balaji",  "", "MuniSekhar" ];
for (i=0; i<stringsMix.length; i++){
    if(stringsMix[i].trim()===""){
        continue;
    }
    console.log(stringsMix[i]);
}
/*15. Skip Multiples of 5
Print numbers from 1 to 50, skipping those that are multiples of 5. Use continue to achieve
this.  */
for (let i = 1; i <= 50; i++){
    if(i %5===0){
        continue;
    }
    console.log(i);
}


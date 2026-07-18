// practise
/* let myName = "Sabbir Ahmed Samir";

const fav = "Leo Messi";

console.log("My name is :", myName);
console.log(typeof 7); */

// Task-1
/* console.log("Hello JavaScript!");
console.log("My name is Samir");
console.log("I am excited to become a Software Developer."); */

// Task-2
/* let num1 = 25;
let num2 = 10;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2); */

// Task-3
/* let studentName = "Sabbir Ahmed";
let age = 25;
let country = "Bangkadesh";
let isStudent = true;

console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Country:", country);
console.log("Is Student:", isStudent); */

// task-4
/* let a = 100;
let b = "Programming";
let c = true;
let d = false;
let e = 3.1416;

console.log("a:", typeof a);
console.log("b:", typeof b);
console.log("c:", typeof c);
console.log("d:", typeof d);
console.log("e:", typeof e); */

// Task-5
/* let name = "Samir";

console.log(`My name is ${name}`); */

// console.log("12" === 12);

/* if (false) {
    console.log("Is this code running?");
} else if (true) {
    console.log("What will happen?1");
} else if (false) {
    console.log("What will happen?2");
} else if (true) {
    console.log("What will happen?3");
} else {
    console.log("then?4");
} */

//  nested if-else
/* let age = 16;
let seniorAge = 18;

if (age > 15) {
    if (seniorAge > 20) {
        console.log("Entry");
    } else {
        console.log("No Entry");
    }
} else {
    console.log("No Entry");
} */

/* let age = 25;

let status = age <= 18 ? "Valid voter" : "Invalid voter";

console.log(status);

let isLoggedIn = false;
console.log(!isLoggedIn); */

// practise task
/* let price1 = 50;
let price2 = 30;

if (price1 != price2) {
    console.log("Ok");
} else {
    console.log("Not ok");
} */

/* console.log("5" == 5);
console.log("5" === 5); */

/* let isRaining = false;

if (isRaining == true) {
    console.log("Take an umbrella");
} else {
    console.log("no need to take an umbrella");
} */

/* let stock = 0;

if (stock == 0) {
    console.log("Out of stock");
} */

/* let number = 890;

if (number > 0) {
    console.log("Number is positive");
} else if (number == 0) {
    console.log("Number is neutral");
} else {
    console.log("Number is Negative");
} */

/* for (let i = 1; i <= 25; i++) {
    console.log(i);
} */

// let i = 1;

/* while (i <= 100) {
    console.log("Finally While loop iteration completed.");
    i++;
} */
/* do {
    console.log("Is it do-while loop");
    i++;
} while (i <= 100); */

/* let i = 0;

while (i > 5) {
    console.log("While loop");
    i++;
} */

/* for (let i = 1; i <= 5; i++) {
    console.log("Hello");
} */

/* for (let i = 1; i <= 10; i++) {
    console.log(i);
} */

/* let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
} */

/* let i = 1;
while (i <= 7) {
    console.log("Loop চলেছ");
    i++;
} */

/* for (let i = 1; i <= 30; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
} */
/* let sum = 0;
for (let i = 1; i <= 20; i++) {
    sum += i;
}

console.log("The FINAL Sum :", sum);
 */

/* let num = 9;
for (let i = 1; i <= 10; i++) {
    num *= i;
    console.log("9 *", i, "=", num);
} */

/* for (i = 20; i >= 1; i--) {
    console.log(i);
} */
/* let sum = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}

console.log("The FINAL sum of Even num :", sum);
 */

/* for (let i = 1; i <= 50; i++) {
    if (i > 30) {
        break;
    }
    console.log(i);
} */

/* for (let i = 1; i <= 20; i++) {
    if (i % 4 == 0) {
        continue;
    }

    console.log(i);
} */

for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
        continue;
        if (i > 40) {
            break;
        }
    }
    console.log(i);
}

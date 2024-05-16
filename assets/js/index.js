// while
console.log("tasks using while");

// 1

console.log("Ex1");

let num = 25;

while (num >= 0) {
  console.log(num--);
}

// 2
console.log("Ex2");

let startNum = 10;
const END_NUM = 50;

while (startNum <= END_NUM) {
  if (startNum % 5 === 0) {
    console.log(startNum);
  }
  startNum++;
}

// 3

console.log("Ex3");

let firstNum = 1;
const lastNum = 100;
let sum = 0;

while (firstNum <= lastNum) {
  sum += firstNum;
  firstNum++;
}

console.log(`Sum of 100 natural numbers: ${sum}`);

// do..while

console.log("tasks using do..while:");

// 1
console.log("Ex1");

let num2 = 25;

do {
  console.log(num2--);
} while (num2 >= 0);

// 2
console.log("Ex2");

let startNum2 = 10;
const END_NUM_2 = 50;

do {
  if (startNum2 % 5 === 0) {
    console.log(startNum2);
  }
  startNum2++;
} while (startNum2 <= END_NUM_2);

// 3
console.log("Ex3");

let firstNum2 = 1;
const lastNum2 = 100;
let sum2 = 0;

do {
  sum2 += firstNum2;
  firstNum2++;
} while (firstNum2 <= lastNum2);

console.log(`Sum of 100 natural numbers: ${sum2}`);

// for

console.log("tasks using for:");

// 1
console.log("Ex1");

for (let i = 25; i >= 0; i--) {
  console.log(i);
}

// 2
console.log("Ex2");

for (let k = 10; k <= 50; k++) {
  if (k % 5 === 0) {
    console.log(k);
  }
}

// Ex3
console.log("Ex3");

let firstNum3 = 1;
let sum3 = 0;

for (firstNum3; firstNum3 <= 100; firstNum3++) {
  sum3 += firstNum3;
}

console.log(`Sum of 100 natural numbers: ${sum3}`);

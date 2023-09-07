//let const , var
// let arr = ["apple", "mango", "grape", "banana"];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// let str = "divya gaurav"
// console.log(str.toUpperCase())
// ------------------------------------------------------------//
// let num1 = 32;

// let num2 = '32';

// let result1 = num1 !== num2;

// let result2 = num1 != num2;

// console.log(result1, result2);

// --------------------------------------------------------------//
let i = 4;

for (let j = 0; i < 10; i++) {
  if (j === 1 || i === 6) {
    continue;
  } else {
    console.log(i, j);

    if (i === 7) {
      break;
    }
  }
}

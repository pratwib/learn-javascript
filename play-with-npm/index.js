import _ from "lodash";

const myArray = [1, 2, 3, 4];

let sum1 = 0;

for (let i = 0; i < myArray.length; i++) {
  sum1 += myArray[i];
}

let sum2 = myArray.reduce((prev, curr) => {
  return prev + curr;
});

// WITH LODASH
let sum3 = _.sum(myArray);

console.log(sum3);

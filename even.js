const isEven = function (num) {
  return num % 2 === 0;
 
}

const tenIsEven = isEven(10);  //true
const elevenIsEven = isEven(11);  // falsw

console.log(tenIsEven);
console.log(elevenIsEven);

console.log(isEven(7)); // false 
console.log(isEven(8)); //true
// //"Suzie is 32 years old."
// const ageCalculator = function (name, yearOfBirth, currentYear) {
//   let age = currentYear - yearOfBirth
//   return name + " is " + age + " years old."
// }
// console.log(ageCalculator("Suzie", 1983, 2015));


// const howManyHundreds = function (bottlesOfSyrup) {
//  return Math.floor(bottlesOfSyrup/100 )
// }
// console.log(howManyHundreds(1000), "=?", 10);
// console.log(howManyHundreds(894), "=?", 8);
// console.log(howManyHundreds(520), "=?", 5);
// console.log(howManyHundreds(99), "=?", 0);
// console.log(howManyHundreds(0), "=?", 0);

// const calculateRectangleArea = function (length, width) {
//   if (length >= 0 && width >= 0 ) {
//     return length * width
//   } else {
//     return undefined
//   }
// }
// const calculateTriangleArea = function(base, height){
//   if (base >= 0 && height >= 0 ) {
//    return ( base * height ) / 2
//   } else {
//     return undefined
//   }
// }
// const calculateCircleArea = function(radius){
//   if (radius >= 0){
//    return(Math.pow(radius,2) * Math.PI)
//   }else {
//     return undefined
//   }
// }
// // console.log(calculateRectangleArea(10, 5));     // should print 50
// // console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
// // console.log(calculateRectangleArea(10, -5));    // should print undefined

// // console.log(calculateTriangleArea(10, 5)); // should print 25
// // console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
// // console.log(calculateTriangleArea(10, -5)); // should print undefined

// console.log(calculateCircleArea(10)); // should print 314.159...
// console.log(calculateCircleArea(3.5)); // should print 38.484...
// console.log(calculateCircleArea(-1)); // should print undefined
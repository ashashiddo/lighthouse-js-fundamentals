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
//****************************** */
// const range = function (start, end, step) {
//   const myRange = []
//   let current = start
//   while (current <= end) {
//     myRange.push(current)
//     current = current + step
//   }
//   return myRange
// }
// console.log(range(0, 10, 2));
// console.log(range(10, 30, 5));
// console.log(range(-5, 2, 3));

//********************* */
// const lastIndexOf =  function (arr, val) {
//   let occurance = -1
//   for (let i = 0; i < arr.length; i++) {
//     const currentValue = arr[i];
//     if (currentValue === val) {
//      occurance = i 
//     }
//   }
//   return occurance
// }

// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
// console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
// console.log(lastIndexOf([], 3), "=?", -1);

// const concat = function (arr1, arr2) {
//   for (let i = 0; i < arr2.length; i++) {
//     const element = arr2[i];
//     arr1.push(element)
    
//   }
//   return arr1
// }
// console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
// console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
// console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
// console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);

// const smartGarbage = function (trash, bins) {
//    bins[trash] = bins[trash] + 1
//   return bins
// }
// console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
// const carPassing = function (cars, speed) {
//   cars.push({time: Date.now(), speed: speed});
//   return cars;
// }
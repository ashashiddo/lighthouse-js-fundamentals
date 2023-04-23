// create a loop that prints the numbers from 100 to 200 
// conditions: 
// If the number is a multiple of 3, print the string "Loopy" instead of the number.
// If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
// If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.

for (let i = 100; i <= 200; i++) {
  let output = '';

  if (i % 3 === 0) {
    output += 'Loopy'
  } 
  if (i % 4 === 0) {
    output += 'Lighthouse';
  }

  console.log(output || i);
}

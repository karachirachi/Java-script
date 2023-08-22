// Declare and initialize 'b' with 'Umer'
let b = "Umer";

// Declare a constant 'author' with 'Umer'
const author = "Umer";

// Reassign 'b' to 4
b = 4;

// Declare 'Umer' with 0
const Umer = 0;

// Declare 'c' with 'null'
let c = null;

// Declare 'd' with 'undefined'
let d = undefined;

// Start a new block scope
{
  // Declare a new 'b' variable in this block scope
  let b = 'this';
  // Output the value of the inner 'b'
  console.log(b);
}

// Output the value of the outer 'b'
console.log(b);

// Output the value of 'c' (which is null)
console.log(c);

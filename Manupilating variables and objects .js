//Challenge 2: Manipulating Variables and Objects
//Create a program that does the following:

//Declare two variables, x and y, and assign them initial values.
//Swap the values of x and y using a temporary variable.
//Print the swapped values of x and y to the console
let x=20;
let y=3;

let swap;
console.log("Value of x before :" , x)
console.log("Value of y before:" , y)


swap=x;
x=y;
y=swap;


console.log("Value of x before:" , x);
console.log("Value of y before:" , y)
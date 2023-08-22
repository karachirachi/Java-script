//Declare a global variable globalVar using var and assign it a value.
//Declare a local variable localVar using let within a function scope and assign it a different value.
//Print both globalVar and localVar to observe their scoping behavior. again dont start writing code
// what name should i give to the file
var globalVar = 10;

function myFunction() {
  let localVar = 20; // Assign a value to localVar within the function scope
  console.log("localVar inside function:", localVar);
}

console.log("globalVar outside function:", globalVar);

myFunction();
//Task: Variable Scoping Challenge

//Declare a global variable named globalVar using var and assign it a value of your choice.

//Inside a block (a set of curly braces), declare a local variable named localVar using let 
//and assign it a different value.

//Inside the same block, declare another local variable named innerVar using var and assign
 //it a value.

//Outside the block, but within the same function or global context, try to access and print
 //the values of all three variables: globalVar, localVar, and innerVar.

//observe and explain the results. Why can you access or not access certain variables in 
//different contexts?

var globalVar=8;

{
   let localVar=10;
    
   var innerVar=12;

   //console.log(localVar); //10 will be printed
   
}

console.log(globalVar);
//console.log(localVar);//error 
console.log(innerVar);


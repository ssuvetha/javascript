//difference between VAR LET AND CON

/*this is global declaration. the value of a will be 10 when it is 
called from any where in the program*/

var a=10; // output of this line will be 10.

{ // this is an local variable . the value of a will be 20 only within this block of code
    let a=20;
    console.log(a); // the output of this line will be 20. because it is accessed within the block of code.
}
console.log(a); //output of this line will be 10. the global declaration will comjes over here..the code with {} will be ignored.
// CONST
// the const is the data type which contains the constant value throughout the programs.
 // it will be followed by the keyword called const.
 const a=45;
 // the value of this will be same throughout the program. 
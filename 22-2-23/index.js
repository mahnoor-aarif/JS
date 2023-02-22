//LOGICAL OPERATOR

//LOGICAL AND(&&)
//All conditions in AND should be true in an order to get a true as an answer
console.log(true && true && true);
console.log(true && true && false);
 
//LOGICAL OR (||)
//Only one condition should be true in OR, in order to get a true as an answer
console.log(true || true || false);
console.log(false || false);
 //LOGICAL NOT (!)
console.log(!true);

//usage of LOGICAL OPERATORRS and RELATIONAL OPERATORS
let a = 10;
let b = 5;
let c = 15;
let d = 10;

//return true only if all the conditions are true 
console.log(a===b && a===d);
//return true if even one condition is true 
console.log(b===c || a===d);

//IF ELSE STATEMENT OR RELATIONAL OPERATORS OR ELSE IF STATEMENT 

if (!(a ===d) && b ===c) {
    console.log("Condition 1 is true");
} else if ((a ===b) || (a ===c)) {
    console.log("Condition 2 is true");
} else{
    console.log("Nothing is true");
}
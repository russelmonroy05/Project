/*  const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for input
rl.question('What is your name? ', (name) => {
    console.log(`Hello, ${name}`);
    
    // Close the readline interface
    rl.close();
});
 
 */
function Sum(num1, num2){
    let a = num1 + num2
    return a
}

let a = console.stdin("Enter number1")
let b = console.stdin("Enter number2")

let x = Sum(a,b)
console.log(x)
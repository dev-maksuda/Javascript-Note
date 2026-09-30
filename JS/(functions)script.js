// ===================================== JavaScript Functions Master File =====================================
// ========================================================================================
// Note: Function Declaration vs Function Expression
// =========================================== 1. Function Declaration =============================================

/*
A Function Declaration is a standalone statement that defines a named function. 
It is hoisted, meaning it can be called before it is defined in the code.

Universal Syntax:
function functionName(parameter1, parameter2) {
    return value;                                        // Code block to be executed
}
*/
// Code Example:
function greetUser(name) {
    return `Hello, ${name}!`;
}

console.log(greetUser("Rakib")); // Output: Hello, Rakib!


// ============================================ 2. Function Expression ============================================

/*
A Function Expression defines a function inside an expression (usually assigned to a variable). 
It is not hoisted, so it must be defined before it can be called.

Universal Syntax (Traditional Anonymous):
const variableName = function(parameter1, parameter2) {
    // Code block to be executed
    return value;
};

Universal Syntax (Modern Arrow Function):
const variableName = (parameter1, parameter2) => {
    // Code block to be executed
    return value;
};
*/

// Code Example:
const multiply = (x, y) => {
    return x * y;
};

console.log(multiply(5, 4)); // Output: 20

// ========================================================================================
// 1. Function Declaration (Basic) - Shadharon function toiri kora ebong call kora
// ========================================================================================
function sayHello() {
    console.log("Hello World");
}
sayHello();                                   // // function run ba call korar jonno
sayHello();
sayHello();
sayHello();
sayHello();


// ========================================================================================
// 2. Function Parameters & Arguments (Jog) - Function er bhetor data pass kore jog kora
// ========================================================================================
function jog(a, b) {
    console.log(a + b);
}
jog(10, 20);                                  // // Output: 30
jog(100, 20);                                 // // Output: 120
jog(150, 50);                                 // // Output: 200
jog(170, 30);                                 // // Output: 200


// ========================================================================================
// 3. Multiplication & Division Functions (*, /) - Function declarations use kore gun o vhag kora
// ========================================================================================
function gun(a, b) {
    console.log(a * b);                       // // gun korar jonno asterisk (*) sign use hoy
}
gun(5, 4);                                    // // Output: 20

function vhag(a, b) {
    console.log(a / b);                       // // vhag korar jonno forward slash (/) sign use hoy
}
vhag(20, 5);                                  // // Output: 4


// ========================================================================================
// 4. Default Parameters - Argument pass na korle jate default data niye kaj kore
// ========================================================================================
function jogDefault(a = 0, b = 0) {
    console.log(a + b);
}
jogDefault(30, 20);                           // // Output: 50
jogDefault(130, 20);                          // // Output: 150
jogDefault(310);                              // // b-er man na deya-te automatic 0 dhore nibe (Output: 310)


// ========================================================================================
// 5. Function Expression / Arrow Function (Biyog) - Shortcut e arrow sign diye biyog kora
// ========================================================================================
let biyog = (a, b) => {
    console.log(a - b);
};
biyog(10, 5);                                 // // Output: 5

let hi = () => {
    console.log("hi");
};
hi();                                         // // Output: hi

let hello = () => {
    console.log("hello");
};
hello();                                      // // Output: hello


// ========================================================================================
// 6. Return Statement - Execution sheshe folaflol variable e dhore rakhar jonno
// ========================================================================================
// let biyogWithReturn = (a, b) => {
//     return (a - b);                           // // return korle result-ti baire use kora jay
// };
// let x = biyogWithReturn(10, 5);
// console.log(x);                               // // Output: 5

// let y = biyogWithReturn(100, 5);
// console.log(y);                               // // Output: 95


// ========================================================================================
// 7. Callback Function (Jog) - Function er vhetor joger targeted function argument pass kora
// ========================================================================================
function calculate(num1, num2, total) {
    const sum = num1 + num2;
    total(sum);                               // // pass howa logResult function-ti automatic call hobe
}

function logResult(result) {
    console.log(`The answer is: ${result}`);
}
calculate(20, 40, logResult);                 // // Target function pass korar shomoy () deya jabena (Output: 60)


// ========================================================================================
// 8. Callback Function (Gun & Vhag) - Dynamic math callbak use kore gun o vhag outut dekha
// ========================================================================================
function calculateAdvance(num1, num2, operation) {
    operation(num1, num2);                    // // pass howa dynamic calculation function run hobe
}

function showGunResult(a, b) {
    console.log(`Gunfol holo: ${a * b}`);
}

function showVhagResult(a, b) {
    console.log(`Vhagfol holo: ${a / b}`);
}

calculateAdvance(5, 6, showGunResult);         // // Output: Gunfol holo: 30
calculateAdvance(40, 8, showVhagResult);       // // Output: Vhagfol holo: 5


// ========================================================================================
// 9. Anonymous Function - Je function er kono nam thake na (Array map, forEach e use hoy)
// ========================================================================================

let numbersList = [ 1, 2, 3 ];                  // // [Fixed] Square bracket diye array thik kora holo
numbersList.map(function (num) {              // // map er bhetorer function tir kono nam nai
    console.log(num * 2);                     // // Output: 2, 4, 6
});

// ========================================================================================
// 10. Asynchronous Callback - Kono kaj nirdishto shomoy por automatic korar jonno (setTimeout)
// ========================================================================================
setTimeout(function () {
    console.log("This message appears after 3 seconds!"); 
}, 3000);                                     // // 3000 milliseconds = 3 seconds por automatic run hobe

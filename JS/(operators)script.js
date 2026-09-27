// ============================================== JS Operators =======================================================
// 1. Addition (+) - Adds two numbers together
// ========================================================================================
let apples = 10;
let bananas = 5;
console.log(apples + bananas); // Output: 15

let price = 50;
let tax = 5;
console.log(price + tax); // Output: 55


// ========================================================================================
// 2. Subtraction (-) - Subtracts one number from another
// ========================================================================================
let totalMoney = 100;
let spentMoney = 30;
console.log(totalMoney - spentMoney); // Output: 70

let itemsInStock = 25;
let itemsSold = 5;
console.log(itemsInStock - itemsSold); // Output: 20


// ========================================================================================
// 3. Multiplication (*) - Multiplies two numbers
// ========================================================================================
let length = 10;
let width = 5;
console.log(length * width); // Output: 50

let ticketPrice = 15;
let quantity = 3;
console.log(ticketPrice * quantity); // Output: 45


// ========================================================================================
// 4. Division (/) - Divides one number by another
// ========================================================================================
let totalPizzaPieces = 8;
let totalPeople = 4;
console.log(totalPizzaPieces / totalPeople); // Output: 2

let distance = 100; // in km
let hours = 2;
console.log(distance / hours); // Output: 50 (Speed in km/h)


// ========================================================================================
// 5. Exponentiation (**) - Raises the first number to the power of the second
// ========================================================================================
let base1 = 5;
let power1 = 2;
console.log(base1 ** power1); // Output: 25 (5 * 5)

let base2 = 2;
let power2 = 3;
console.log(base2 ** power2); // Output: 8 (2 * 2 * 2)


// ========================================================================================
// 6. Modulus (%) - Returns the division remainder (what is left over)
// ========================================================================================
let chocolates = 13;
let children = 4;
console.log(chocolates % children); // Output: 1 (4 * 3 = 12, remainder is 1)

let checkNumber = 10;
console.log(checkNumber % 2); // Output: 0 (0 means the number is Even)


// ========================================================================================
// 7. Increment (++) - Increases the value of a variable by 1
// ========================================================================================
let gameScore = 10;
gameScore++; 
console.log(gameScore); // Output: 11

let userAge = 20;
userAge++;
console.log(userAge); // Output: 21


// ========================================================================================
// 8. Decrement (--) - Decreases the value of a variable by 1
// ========================================================================================
let playerLives = 5;
playerLives--;
console.log(playerLives); // Output: 4

let countdownTimer = 60;
countdownTimer--;
console.log(countdownTimer); // Output: 59


// ========================================================================================
// 9. Assignment Operators (+=, -=, *=, /=) - Short-hand shortcut math
// ========================================================================================
let walletBalance = 50;
walletBalance += 20; // Exact same as: walletBalance = walletBalance + 20;
console.log(walletBalance); // Output: 70

let stockCount = 10;
stockCount *= 3; // Exact same as: stockCount = stockCount * 3;
console.log(stockCount); // Output: 30


// ========================================================================================
// 10. String + Number Concatenation - text er sathe sonkha jog korle ja hoy
// ========================================================================================
let name = "Imran ";
let id = 11;
console.log(name + id); // Output: "Imran 11" (It becomes a standard text/string)

let num1 = "10"; // It's a string, not a number
let num2 = 5;
console.log(num1 + num2); // Output: "105" (Strictly merges them together instead of adding)


// ========================================================================================
// 11. Operator Precedence - Math rules hierarchy (PEMDAS/BODMAS)
// ========================================================================================
let result1 = 10 + 5 * 2; 
console.log(result1); // Output: 20 (Multiplication * runs before addition +)

let result2 = (10 + 5) * 2;
console.log(result2); // Output: 30 (Parentheses () always runs first)


// ========================================================================================
// 12. Comparison: Loose Equality (==) - Shudhu data check kore, data type dekhe na
// ========================================================================================
let a = 10;
let b = "10";
console.log(a == b); // Output: true (Karom data duiti-i 10, data type check kore nai)


// ========================================================================================
// 13. Comparison: Strict Equality (===) - Data ebong Data Type (shob) 100% check kore
// ========================================================================================
let x = 10;   // Number
let y = "10"; // String
console.log(x === y); // Output: false (Karon data match korleo type alada - ekti number, ekti text)


// ========================================================================================
// 14. Logical: AND (&&) - Sobgulo shortho sotti (true) hotei hobe
// ========================================================================================
let hasNID = true;
let userAgeForVote = 22;
console.log(hasNID === true && userAgeForVote >= 18); // Output: true (Duti shortho-i true tai full output true)

console.log(hasNID === false && userAgeForVote >= 18); // Output: false (Ekti shortho bhul/false tai pura result false)


// ========================================================================================
// 15. Logical: OR (||) - Jekono ekti shortho sotti (true) holei cholbe
// ========================================================================================
let hasBkash = true;
let hasNagad = false;
console.log(hasBkash === true || hasNagad === true); // Output: true (Jekono ekta thaklei payment kora jabe, tai true)


// ========================================================================================
//  16. Logical NOT (!) - true ke false ebong false ke true bananor jonno [W3Schools Added]
// ========================================================================================
let isUserLoggedIn = true;
console.log(!isUserLoggedIn); // Output: false (Pura ultaye dey)


// ========================================================================================
//  17. Comparison: Greater / Less Than (>, <, >=, <=) - Choto ba boro check korar jonno
// ========================================================================================
let userAgeForDriving = 16;
console.log(userAgeForDriving >= 18); // Output: false (18 er choto tai driving license pabe na)


// ========================================================================================
//  18. Typeof Operator - Variable er data type ki (string, number naki boolean) ta janar jonno
// ========================================================================================
let userName = "Imran";
console.log(typeof userName); // Output: "string"

let userRoll = 11;
console.log(typeof userRoll); // Output: "number" 


// ========================================================================================
// 19. Ternary Operator (?) - Ekti line e if-else shorthand e karar jonno [Highly Important]
// ========================================================================================
let memberAge = 20;
let status = (memberAge >= 18) ? "Adult" : "Minor";
console.log(status); // Output: "Adult" (Shortho sotti hole prothom-ti, bhul hole porer-ti)
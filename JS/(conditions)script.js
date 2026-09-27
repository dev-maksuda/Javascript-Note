// ===================================== JavaScript Condition Master File =====================================

// ========================================================================================
// 1. Basic If-Else - Ekti single condition check korar jonno
// ========================================================================================
let signal = "green";
if (signal === "green") { 
    console.log("go");                        // // Output: go
} else {
    console.log("stop");
} 

// 💡 Ternary Alternate (Operators chapter match):
// let action = (signal === "green") ? "go" : "stop"; console.log(action);


// ========================================================================================
// 2. If-Else with Math Comparison - Sonkha choto ba boro check kore kaj korar jonno
// ========================================================================================
let totalCost = 500;
if (totalCost >= 1000) {
    console.log("You get a discount!");
} else {
    console.log("No discount today.");        // // Output: No discount today.
}

// 💡 Ternary Alternate (Operators chapter match):
// let discountStatus = (totalCost >= 1000) ? "You get a discount!" : "No discount today."; console.log(discountStatus);


// ========================================================================================
// 3. Else If Ladder - Multiple shorthand shortho check korar jonno
// ========================================================================================
let temperature = 25;

if (temperature > 30) {
    console.log("It's hot!");
} else if (temperature >= 20) {
    console.log("Nice weather.");             // // Output: Nice weather.
} else {
    console.log("It's cold!");
}


// ========================================================================================
// 🆕 4. Nested If-Else - Shortho er bhetor arekti shortho check korar jonno [W3Schools Added]
// ========================================================================================
let hasTicket = true;
let isVipMember = false;

if (hasTicket === true) {
    // Ticket thaklei shudhu bhetorer ei condition check korbe
    if (isVipMember === true) {
        console.log("Welcome to the VIP Lounge!");
    } else {
        console.log("Welcome to the Regular Seat."); // // Output: Welcome to the Regular Seat.
    }
} else {
    console.log("Please buy a ticket first.");
}


// ========================================================================================
// 🆕 5. Switch Case - Onekgulo else if thakle code sundor o fast korar jonno [W3Schools Added]
// ========================================================================================
let day = "Monday";

switch (day) {
    case "Friday":
        console.log("It's Weekend!");
        break;
    case "Monday":
        console.log("It's a working day.");    // // Output: It's a working day.
        break;
    default:
        console.log("Regular weekday.");
}
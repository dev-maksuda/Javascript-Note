// ========================================================================================
                // Storing & Removing Data in LocalStorage using JSON
// ========================================================================================
let list = ["item1","item2","item3"]                     // Step 1: Define an array

localStorage.setItem("myList",JSON.stringify(list));     // Step 2: Convert the array into a JSON string and save it to localStorage
                                                         // (Reason: localStorage only accepts strings)

let getData = localStorage.getItem("myList");            // Step 3: Get the JSON string from localStorage

// localStorage.removeItem("myList");                    //  Specific Data remove korar jonno

// localStorage.clear();                                 // To delete all data from localStorage at once

console.log(JSON.parse(getData));                         // Step 4: Parse the JSON string back into a usable JavaScript Array  

if (getData) {
    console.log(JSON.parse(getData));                     //data exists ace kina check korar jonno
} else {
    console.log("No data found in localStorage");
}                
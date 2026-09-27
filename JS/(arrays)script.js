// ===================================== JavaScript Array Master File =====================================

// Let's create the initial variables
let studentName = "Imran";
let studentsList = ["Imran", "Rahul", "Ahsan", "Tanvir", "Fahim", "Sajid", "Arif", "Nabil", "Rayhan", "Asif"];
console.log(studentsList);                    // //studentslist dekhar jonno (Total 10 items initially)


// ------------------------------------ 1. Data Access & Properties ------------------------------------

// 1. Length - Array te koyta data ace seta dekhar jonno
console.log(studentsList.length);             

// 2. Specific Index Access - 6 no index e kon data ace seta dekhar jonno
console.log(studentsList[6]);                 

// 3. First Index Access - First e (0 no index) kon data ace seta dekhar jonno
console.log(studentsList[0]);                 

// 4. Last Index Access - Last e kon data ace seta automatic ber korar jonno
let lastIndex = studentsList.length - 1;
console.log(studentsList[lastIndex]);         

// 5. Array Check - Variable ti sotti array ki na nishchit honar jonno
console.log(Array.isArray(studentsList));     

// 6. At Method - .at() use kore index er data ber kora
console.log(studentsList.at(5));               


// --------------------------------- 2. Adding & Removing Elements ---------------------------------

// 7. Push - Push use kore list er eke bare Sheshe (Last e) new item add kora
studentsList.push("Akash");
console.log(studentsList);                    

// 8. Pop - Pop use kore list er eke bare Sheshe (Last item) remove kora
let removeItem = studentsList.pop();          
console.log(removeItem);

// 9. Shift - Shift use kore list er eke bare Shurute (First item) remove kora
studentsList.shift();
console.log(studentsList);                    

// 10. Unshift - Unshift use kore list er eke bare Shurute (First e) new item add kora
studentsList.unshift("Kamal");
console.log(studentsList);                    


// -------------------------------- 3. Updating & Manipulating Data --------------------------------

// 11. Direct Update - Index dhore nirdishto data change ba update korar jonno
studentsList[0] = "Imran Hasan";
console.log(studentsList);                    

// 12. Slice - Main array thik rekhe nirdishto ongsho kete alada new array bananor jonno
let newShortList = studentsList.slice(1, 4);
console.log(newShortList);                    

// 13. Splice - List er Majhkhan theke data remove kora ebong sekhane new data add korar jonno
studentsList.splice(2, 1, "Rifat"); 
console.log(studentsList);                    // //2 no index theke 1ti data remove kore sekhane "Rifat" add korlam


// ---------------------------------- 4. Searching & Validation ----------------------------------

// 14. IndexOf - Kono nirdishto data list er koto number index e ace seta khujar jonno
let position = studentsList.indexOf("Tanvir");
console.log(position);                        

// 15. Includes - List er bhetor kono data ace ki na check korar jonno (Result: true/false)
let hasStudent = studentsList.includes("Sajid");
console.log(hasStudent);                      


// --------------------------------- 5. Loops, Map & Iteration ---------------------------------

// 16. For Loop - For Loop use kore first to last full list serial onujaye ber kora
for(let i = 0; i < studentsList.length; i++){
    console.log(studentsList[i]);             
}

// 17. Map Method - Map use kore list er protiti item o tader index number alada alada ber kora
studentsList.map((item, index) => {
    console.log(item, index);                 
});

// 18. Filter - Kono shortho onujaye list theke data cheke alada new list bananor jonno
let aNames = studentsList.filter(item => item.startsWith("A"));
console.log(aNames);                          // //shudhu "A" diye shuru howa namer list alada korlam

// 19. Find - Shortho onujaye full list theke prothom match howa data ti khuje neyar jonno
let firstMatch = studentsList.find(item => item.length > 5);
console.log(firstMatch);                      // //5 letter er boro prothom je namti pabe seta dekhabe


// --------------------------------- 6. Sorting & Transformations ---------------------------------

// 20. Sort - Full list alphabetic order onujaye (A to Z) sajanor jonno
studentsList.sort();
console.log(studentsList);                    

// 21. Reverse - Full list er shuru theke shesh eke bare ulte (Z to A / Reverse) deyar jonno
studentsList.reverse();
console.log(studentsList);                    

// 22. ToString - Full list ke comma (,) diye jora diye ekti single text/string bananor jonno
console.log(studentsList.toString());         

// 23. Join - Comma er bodle nirdishto symbol (jemon: *) diye jora diye string bananor jonno
console.log(studentsList.join(" * "));        

// 24. Concat - Duiti alada array list ke ekshathe jora diye ekti boro list bananor jonno
let moreStudents = ["Karim", "Rahim"];
let combinedList = studentsList.concat(moreStudents);
console.log(combinedList);                    
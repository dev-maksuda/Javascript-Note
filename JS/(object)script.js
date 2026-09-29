// ===================================== JavaScript Object Master File =====================================

// ------------------------------------ 1. Basic Object & Properties ------------------------------------

// 1. Basic Object Declaration - Object tiri kora ebong er bhetor data rakha
let students = {
    name: "Imran",
    roll: 11,
    isPresent: true,
    adress: "Uttara",
};
console.log(students);                        // //students object full dekhar jonno

// 2. Access Property - Dot (.) use kore object er bhetor theke nirdishto data ber kora
console.log(students.name);                   // //shudhu name dekhabe: "Imran"

// 3. New Property Add - Object er baire theke hothat new data jog ba add korar jonno
students.email = "imran@gmail.com";           // //new object add
console.log(students);                        // //email soho full object dekhabe


// ------------------------------------ 2. This Keyword & Methods ------------------------------------

// 4. Object Method - Object er bhetore function (Method) tiri korar jonno
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     fullName: function() {
//         // 5. This Keyword - Object er bhitore thaka property access nite chaile 'this' likhte hoy
//         return this.firstName + " " + this.lastName; 
//     }
// };
// console.log(person.fullName());               // //method run kore full name dekhar jonno

// // 6. Outside Access - Object er baire theke data niye kaj korte chaile object_name.property_name likhte hoy
// const a = person.firstName + " " + person.lastName; 
// console.log(a);                               // //object er baire access nite chaile 


// -------------------------------- 3. Deleting & Checking Properties --------------------------------

// 7. Delete Property - Object theke kono key ba property permanent vhabe muche (Remove) phelat jonno
delete students.adress;                       // //ja delete korbo tar samne delete likhe dibo
console.log(students);                        // //ekhon adress property-ti r thakbe na

// 8. Check Exist Property - 'in' operator use kore object e property ace ki na check kora
let result = ("roll" in students);            // //roll students er vhitore ace kina check kora holo
console.log(result);                          // //property thakle Result dekhabe: true, na thakle: false


// -------------------------------------- 4. Nested Object --------------------------------------

// 9. Nested Object Declaration - Object er bhetore arekti new object tuiri korar jonno
let studentNested = {
    name: "Imran",
    roll: 11,
    isPresent: true,
    adress: "Uttara",
    hobby: {                                  // //Nested Object shuru
        hobby1: "Hiking",
        hobby2: "Bird_Watching",
        hobby3: "Photography",
        hobby4: "Camping",
        hobby5: "Gardening",
    }
};

// 10. Access Nested Object - Nested object er main property access korte chaile
console.log(studentNested.hobby);             // //hobby access korte chaila full hobby object dekhabe

// 11. Access Child Property - Nested object er bhetor thaka nirdishto property access korar jonno
console.log(studentNested.hobby.hobby1);      // //hobby1,2,3... access korte chaile "Hiking" dekhabe


// ---------------------------- 5. Extra Advanced Object Methods  ----------------------------

// // 12. Object.keys - Object er bhetor thaka shobgulo Key/Name list array e ber korar jonno
// console.log(Object.keys(studentNested));      // //Result: ["name", "roll", "isPresent", "adress", "hobby"]

// // 13. Object.values - Object er bhetor thaka shobgulo Value/Data list array e ber korar jonno
// console.log(Object.values(studentNested));    // //Result: ["Imran", 11, true, "Uttara", {...}]

// // 14. Object.entries - Key ebong Value ke joray joray (2D Array) alada korar jonno
// console.log(Object.entries(studentNested));   // //Full object ke matrix/array format e neyar jonno
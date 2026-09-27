// ======================================= JavaScript Loops Master File =======================================

// ----------------------------------------------------------------------------------------
// ========================================== For Loop ==========================================
// ----------------------------------------------------------------------------------------

// 1. Basic Static For Loop - 8 er namta bananor jonno
// for (let i = 1; i <= 10; i++) {
//     console.log(8 * ${i} = ${8 * i});
// }

// 2. Dynamic Variable For Loop - Variable input niye jekono namta bananor jonno
// let namta = 10;
// for (let i = 1; i <= 10; i++) {
//     console.log(${namta} * ${i} = ${namta * i});
// }

// 3. Simple Iteration For Loop - Message loop korar jonno
// for (let i = 1; i <= 10; i++) {
//     console.log(Happy ${i});
// }


// ----------------------------------------------------------------------------------------
// ========================================== While Loop ==========================================
// ----------------------------------------------------------------------------------------

// 4. Basic While Loop - Shortho sotti thaka porjonto continuous loop cholbe
// let a = 1;
// while (a <= 10) {
//     console.log(a);
//     a++;
// }


// ----------------------------------------------------------------------------------------
// ======================================== Do While Loop ========================================
// ----------------------------------------------------------------------------------------

// 5. Basic Do While Loop - Shortho bhul holeo ontoto ekti bar code run korar jonno
// let b = 1;
// do {
//     console.log(b);
//     b++;
// } while (b <= 10);


// ----------------------------------------------------------------------------------------
// ====================  Advanced Loop Control & Iteration (W3Schools Added) ====================
// ----------------------------------------------------------------------------------------

// 6. Break Statement - Kono nirdishto shorther karone loop majhpothe stop korar jonno
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;                         // // 5 e pouchale loop purapuri theme jabe (Output: 1 to 4)
    }
    console.log(i);
}

// 7. Continue Statement - Kono nirdishto stepped data skip kore porer tay jaoar jonno
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;                      // // 3 ke skip korbe, kintu loop thambena (Output: 1, 2, 4, 5)
    }
    console.log(i);
}

// 8. For...of Loop - Array er bhetor thaka item gulo khub shohoje loop korar jonno [Most Important]
let cars = ["BMW", "Volvo", "Toyota"];
for (let car of cars) {
    console.log(car);                  // // Array er protiti item ek ek kore dekhay
}

// 9. For...in Loop - Object er bhetor thaka key/property gulo loop korar jonno
let user = { fname: "John", lname: "Doe", age: 25 };
for (let key in user) {
    console.log(key + ": " + user[key]); // // Object er key o data joray joray dekhay
}
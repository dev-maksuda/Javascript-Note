// ========================================================================================
// DOM Selection - Tag, Class, ID,query selector, diye HTML element khuje ber korar niyom
// ========================================================================================

// console.log(document);                                  // All HTML document structure k console e dekhbe

// console.log(document.getElementsByTagName('h1'));      // Tag er nam diye shob h1 element gulo k khuje ber korbe

// let peragraph = document.getElementsByClassName("one"); // "one" namer class thaka shob element k ekta variable e rakhbe

// console.log(peragraph);                                 

// // let box = document.getElementById("two")             // "two" namer ID console e dekhabe

// // console.log(box);                                    

// let box = document.getElementById("two")                // Unique ID "two" diye nirdishto element ti k khuje ber korbe

// console.log(box.innerHTML);                             // Oi box element er bhetor thaka  text ba content k dekhabe

let heading = document.querySelector("h1");                 // CSS er moto shorashori tag er nam diye h1 select korbe
console.log(heading);                                       // h1 element ta k console e dekhabe

let peragraph = document.querySelector(".one");             // Class select korar jonno age ekta dot (.) dite hobe
console.log(peragraph);                                     // "one" class thaka prothom paragraph ta k console e dekhabe

// let box = document.querySelector("#two");                // ID select korar jonno hash (#) sign use hobe 
// console.log(box);                                  

// let box = document.querySelector("#two").innerHTML;         // ID select korar jonno hash (#) sign use hobe ebong bhetorer text nibe
// console.log(box);                                            // "#two" ID thaka element er bhetorer text ta console e dekhabe
                                          
let box = document.querySelector("#two");                       // ID select korar jonno hash (#) sign use hobe
box.innerHTML = "<button>Click me</button> This is the new content of the box.";          // HTML er box element tar bhetorer text change kore notun text set korbe
console.log(box.innerHTML); 

// let btn = document.querySelector(".btn");                       // ".btn" class thaka button element ti k select kore variable e rakhbe

// btn.addEventListener("click", () => {                           // Button e "click" korle bhetorer arrow function ti automatic chalbe
                             
//     console.log("Button clicked");                              // Button e click porar por console e "Button clicked" text ti dekhabe
// });   

let btn = document.querySelector(".btn");                           // ".btn" class thaka button ti k select korbe
let inputForm = document.querySelector(".inputForm");               // ".inputForm" class thaka input field ti k select korbe

// btn.addEventListener("click", () => {                             // Button e click korle bhetorer shob kaj automatic shuru hobe
//     console.log(inputForm.type);                                 // Input field er vhetorer type ta (password na text) console e dekhabe
    
//     if (inputForm.type === "password") {                         // Jodi input field er type ta default vabe "password" hoy
//         inputForm.type = "text";                                 // Tobe type ta k bodle "text" kore dibe (jate password dekha jay)
//         btn.innerHTML = "Hide";                                  // Ebong button er lekha ti bodle "Hide" banay dibe
//     } else {                                                      // R jodi type ta password na hoy (mane "text" thake)
//         inputForm.type = "password";                             // Tobe type ta k abar bodle "password" kore dibe (jate password lukiye jay)
//         btn.innerHTML = "Show";                                  // Ebong button er lekha ti abar bodle "Show" banay dibe
//     }
// }); 

btn.addEventListener("mouseover", () => {                           //mouse nile chide show change hote thakbe click korte hobe na
    console.log(inputForm.type);                          
    
    if (inputForm.type === "password") {                  
        inputForm.type = "text";                          
        btn.innerHTML = "Hide";                           
    } else {                                              
        inputForm.type = "password";                      
        btn.innerHTML = "Show";
    }
                                    
});   

// let btn = document.querySelector(".btn");                    // button ke select korlo
// let inputForm = document.querySelector(".inputForm");        // input field ke select korlo

// // Button er upore mouse unle nicher kaj ta hobe
// btn.addEventListener("mouseover", () => {
//     console.log(inputForm.type);                             // console-e input er type dekhabe
    
//     // type jodi password thake, tobe eta kaj korbe
//     if (inputForm.type === "password") {
//         inputForm.type = "text";                             // password unhide korbe (text banaye dibe)
//         btn.innerHTML = "hide";                                  // button er lekha text badle 'hide' korbe
//     }
// });

// // Button theke mouse shoraye nile nicher kaj ta hobe
// btn.addEventListener("mouseleave", () => {
//     inputForm.type = "password";                             // input abar hide korbe (password banaye dibe)
//     btn.innerHTML = "show";                                  // button er lekha text abar 'show' korbe
// });

"use strict";
// //Q no 121
// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         continue;
//     }
//     console.log(i); 
// }
Object.defineProperty(exports, "__esModule", { value: true });
// // Q no 122
// let i = 10;
// while (i > 0) {
//     if (i === 5) {
//         break; 
//     }
//     console.log(i); 
//     i--; 
// }
// Q no 123
let str = "zeeshan";
let vowels = "aeiouAEIOU";
for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        console.log(`First vowel found: ${str[i]}`);
        break;
    }
}

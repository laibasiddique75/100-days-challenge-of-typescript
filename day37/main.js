// Q no 115
// function logDayOfWeek(daysNo: number){
//     switch (daysNo) {
//         case 1:
//             console.log("Sunday");
//             break;
//         case 2:
//             console.log("Monday");
//             break;
//         case 3:
//             console.log("Tuesday");
//             break;
//         case 4:
//             console.log("Wednesday");
//             break;
//         case 5:
//             console.log("Thursday");
//             break;
//         case 6:
//             console.log("Friday");
//             break;
//         case 7:
//             console.log("Saturday");
//             break;
//         default:
//             console.log("Invalid number. Please enter a number between 1 and 7.");
//     }
// }
// logDayOfWeek(2);
// logDayOfWeek(6)
// Q no 116
// function seasons(months: number){
//     switch (months) {
//         case 12:
//         case 1:
//         case 2:
//             console.log("Winter");
//             break;
//         case 3:
//         case 4:
//             console.log("Spring");
//             break;
//         case 5:
//         case 6:
//         case 7:
//         case  8:
//             console.log("Summer");
//             break;
//         case 9:
//         case 10:
//         case 11:
//             console.log("Autumn");
//             break;
//         default:
//             console.log("Invalid month. Please enter a number between 1 and 12.");
//     }
// }
// seasons(12);
// seasons(13);
// seasons(7);
// Q no 117
function evaluateExpression(input) {
    switch (typeof input) {
        case 'string':
            console.log("The input is a string: \"".concat(input, "\""));
            break;
        case 'number':
            console.log("The input is a number: ".concat(input));
            break;
        case 'boolean':
            console.log("The input is a boolean: ".concat(input));
            break;
        case 'object':
            if (input === null) {
                console.log("The input is null.");
            }
            break;
        default:
            console.log("Unknown type case.");
    }
}
evaluateExpression("zeeshan");
evaluateExpression(17);
evaluateExpression(true);

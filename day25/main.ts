// Q no 79 same

// let car = {
//     make :"Honda",
//     model :"Corolla",
//     year:2024

// };

// Q no 80
// console.log(car.model);
// let car = {
//     make :"Honda",
//     model :"Corolla",
//     year:2024,
//  color: "blue"
// };
//  // add new properties

//  car.color = 'black';

//  car.year = 2025;

//  console.log(car);
 
// Q no 81

function logObjectProperties(obj: object): void {

    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);}}

        const exampleObject = {
            name: "John",
            age: 30,
            occupation: "Engineer"
        };
        logObjectProperties(exampleObject);

































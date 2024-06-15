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
function logObjectProperties(obj) {
    for (var _i = 0, _a = Object.entries(obj); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        console.log("".concat(key, ": ").concat(value));
    }
}
var exampleObject = {
    name: "John",
    age: 30,
    occupation: "Engineer"
};
logObjectProperties(exampleObject);

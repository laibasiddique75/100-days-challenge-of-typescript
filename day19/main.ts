// Q no 55

let numbers = [1,2,3,4,5];
let doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);

// Q no 56

let mixedArray = [ 1,"zeeshan","apple",true];
let stringArray = mixedArray.filter(item => typeof item === "string");
console.log(stringArray);


// Q no 57

let grades = [ 1,2,3];
let averageGrade = grades.reduce((total,grade) => total+ grade,0) / grades.length
console.log(averageGrade);

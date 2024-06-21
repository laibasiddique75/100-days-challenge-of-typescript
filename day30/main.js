// Q no 94
// const words :string [] = ["hello","typescript"]
// const lengths : number [] =
// words.map(word => word.length);
// console.log(lengths);
// Q no 95
// function filterNumber(numbers:number[]):number []{
// return numbers.filter(number => number > 10);
// }
// const numbers : number [] = [5,10,15,20,25];
// console.log(filterNumber(numbers));
// Q no 96
function reduceArray(numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
var numbers = [1, 2, 3, 4];
console.log(reduceArray(numbers));

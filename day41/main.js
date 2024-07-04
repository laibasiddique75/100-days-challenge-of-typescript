// Q no 127
var _this = this;
// let traditionalFunction = function(name: string): string {
//     return `Hello, ${name}!`;
// };
// console.log(traditionalFunction("janab"));
// let add = (a: string, b: string): string => a + b;
// console.log(add("ZEESHAN","LAIBA"));
// Q no 128
// let multipleParameters = (...numbers:number[])=> numbers.reduce((total,number) => total * number,1);
// console.log(multipleParameters(17,28,0));
// Q no 129
var traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log(" Traditional function", this.value);
    },
    arrowFunction: function () {
        console.log(" Arrow function", _this.value);
    },
};
traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction();

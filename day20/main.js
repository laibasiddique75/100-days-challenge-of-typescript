// Q no 58
function averageScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return total / scores.length;
}
console.log(averageScore(10, 20, 30, 40));
// Q no 59
function adder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
var addSix = adder(6);
console.log(addSix(12));
// Q no 60
var userProfile = (function () {
    var name = "laiba";
    var age = 20;
    return {
        displayInfo: function () {
            console.log("Name:".concat(name, ", Age:").concat(age));
        }
    };
})();
userProfile.displayInfo();
var myClr = "green";
console.log(myClr);

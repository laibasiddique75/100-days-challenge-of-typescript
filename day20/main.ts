// Q no 58

function averageScore (...scores:number[]):number{
    let total = scores.reduce((sum , score) => sum + score , 0);
    return total/scores.length;
}

console.log(averageScore(10,20,30,40));


// Q no 59

function adder (valueToAdd:number):(number) => number {
    return function (number:number):number{
        return number + valueToAdd;
    };
}  let addSix = adder(6);
console.log(addSix(12));



// Q no 60

let userProfile = (function(){

let name = "laiba";
let age = 20;

return {

    displayInfo : function(){
        console.log(`Name:${name}, Age:${age}`);
        
    }
};
})();

userProfile.displayInfo();


let myClr = "green";

console.log(myClr);


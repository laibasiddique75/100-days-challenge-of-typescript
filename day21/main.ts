// Q no 61

enum VehicleType {
    Car,
    Motorcycle,
    Rikshaw
}

console.log(VehicleType.Rikshaw);


// Q no 62
interface Student {
    name:string;
age:number;
courses:string[];


}

let student : Student = {
 name:"laiba",
 age:20,
courses :["math","english","urdu"]
};

// Q no 63

type Shape = {
    kind:"circle"| "reactangle";
    radius?:number;
    width?:number;
    height?:number;
}

let circle:Shape = {
    kind:"circle",
    radius:5

}


let reactangle:Shape= {
    kind:"reactangle",
    width:20,
    height:30
};


console.log(circle);
console.log(reactangle);


let dice = 6;
console.log(dice);






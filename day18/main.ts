// Q no 52
let iPhone = {
    make:"iphone",
    model:"15 pro PTA approved",
 specification:{storage:"128gb",
screenSize:"4.5 inches",
batteryLife:"8 hours"
 }
};
console.log(iPhone);

// Q no 53

let developersSkills = {
    languages:["HTML","CSS","JAVASCRIPT"],
    frameworks:["React","Angular","Vue"],
    tools:["Git","Webpack","Docker"]

};

let {
    languages,frameworks,tools
} = developersSkills

console.log(`Language:${languages[1]},Framework: ${frameworks[0]},Tool:${tools[2]}`);

// Q no 54

 function createObjectKey(key:string,value:string){
    let dynamicObject = {};
     dynamicObject[key] = value;
    return dynamicObject;
}
let usersCoices =  createObjectKey("theme","dark");
console.log(usersCoices);



let myNum = 17;
console.log(myNum);



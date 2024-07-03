// // Q no 124

// const person = {
//     name :"zeeshan ❤",
//     getName : function(){
//         return this.name;
//     },
// };


// console.log(person.getName());



// Q no 125

// const lifePartners = {
//     zeeshan : 17,
//     laiba:28,
//     calculation : function(){
//         return this.zeeshan * this.laiba;
//     }
// }

// console.log(lifePartners.calculation());


// Q no 126

let myObject = {
    property :"janab",
    outerMethod :function(){
        console.log(this.property);
        let innerMethod =() => {
            console.log(this.property);
            
        };
            
        
        innerMethod();
    },

}
 myObject.outerMethod();
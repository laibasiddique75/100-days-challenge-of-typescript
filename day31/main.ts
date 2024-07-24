// Q no 97

// function currentDateFormat(){
// let date = new Date()
// let day = date.getDate()
// let month = date.getMonth() + 1
// let year = date.getFullYear()
// return `day:${day}/ month: ${month}/ year:${year}`

// }

// console.log(currentDateFormat());


// //Q no 98

// function newYear(){
//     let currentDate = new Date()
//     let newYearDate = new Date(2025,0,1)
//     let difference = newYearDate.getTime()-currentDate.getTime()
//     let days = Math.floor(difference / (1000*60*60*24))
//     return days
// }

// console.log(newYear()+ "remaing days");

// // Q no 99

// function birthDay(month:number,day:number){
//     let date = new Date()
//     let birthday =  new Date(date.getFullYear(),month + 1,day)
//     return birthday
// }
//  console.log(birthDay(6,18));
 




function birthDay(month:number,day:number){
    let date = new Date()
    let birthday =  new Date(date.getFullYear(),month + 1,day)
    return birthday
}
 console.log(birthDay(6,18));

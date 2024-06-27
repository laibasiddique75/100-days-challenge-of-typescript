// Q no 109
// const currentTime = new Date();
// const currentHour = currentTime.getHours();
// if (currentHour < 12) {
//     console.log("Good Morning");
// }
// Q no 110
// function studentsGrade(score){
// if (score >= 90){
// return "A1"
// }
// if (score >= 80){
//     return "A+"
//     }
//     if (score >= 70){
//         return "A"
//         }
//         if (score >= 60){
//             return "B"
//             }
//             if (score >= 50){
//                     return "C"
//                     }else{
//                         return "D"
//                     }
//                 }
//                 console.log(studentsGrade(94));
//                 console.log(studentsGrade(84));
//                 console.log(studentsGrade(74));
//                 console.log(studentsGrade(64));
//                 console.log(studentsGrade(54));
// Q no 111
function getAgeGroup(age) {
    if (age >= 0 && age <= 12) {
        return 'Child';
    }
    else if (age >= 13 && age <= 19) {
        return 'Teenager';
    }
    else if (age >= 20 && age <= 64) {
        return 'Adult';
    }
    else {
        'Invalid age';
    }
}
console.log(getAgeGroup(11));
console.log(getAgeGroup(18));
console.log(getAgeGroup(60));

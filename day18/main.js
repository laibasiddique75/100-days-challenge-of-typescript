// Q no 52
var iPhone = {
    make: "iphone",
    model: "15 pro PTA approved",
    specification: { storage: "128gb",
        screenSize: "4.5 inches",
        batteryLife: "8 hours"
    }
};
console.log(iPhone);
// Q no 53
var developersSkills = {
    languages: ["HTML", "CSS", "JAVASCRIPT"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
};
var languages = developersSkills.languages, frameworks = developersSkills.frameworks, tools = developersSkills.tools;
console.log("Language:".concat(languages[1], ",Framework: ").concat(frameworks[0], ",Tool:").concat(tools[2]));
// Q no 54
function createObjectKey(key, value) {
    var dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
var usersCoices = createObjectKey("theme", "dark");
console.log(usersCoices);
var myNum = 17;
console.log(myNum);


let classes = require("./classes.json")
console.log(classes)
for(course in classes){
    option = document.createElement("option")
    option.setAttribute("value", course)
    document.getElementById("departList").appendChild(option)
}
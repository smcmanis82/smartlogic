// read three text files

// read one file and transform it into array
function readCommaFile() {
    var fs = require("fs");
    var text = fs.readFileSync("./data/comma.txt").toString();
    var textByLine = text.split("\n");
    return textByLine;
}

// take an array of strings and turn it into an array of objects
function commaStringsToObject(stringList) {
    let objectList = stringList.map(item => {
        const splitString = item.split(",")
        return {
            lastName: splitString[0].trim(),
            firstName: splitString[1].trim(),
            gender: splitString[2].trim(),
            favoriteColor: splitString[3].trim(),
            dateOfBirth: splitString[4].trim()
        }
    })
    return objectList
}

function readSpaceFile() {
    var fs = require("fs");
    var text = fs.readFileSync("./data/space.txt").toString();
    var textByLine = text.split("\n");
    return textByLine;
}

function spaceStringsToObject(stringList) {
    let objectList = stringList.map(item => {
        const splitString = item.split(" ")
        return {
            lastName: splitString[0],
            firstName: splitString[1],
            gender: splitString[3] == "F" ? "Female" : "Male",
            favoriteColor: splitString[5],
            dateOfBirth: fixDateStringWithDates(splitString[4])
        }
    })
    return objectList
}

function fixDateStringWithDates(oldString) {
    const newDate = new Date(oldString)
    return `${newDate.getMonth()+1}/${newDate.getDate()}/${newDate.getFullYear()}`
}

function fixDateStringWithRegex(oldString) {
    return oldString.replace(/-/g, '/')
}

module.exports = {
    readCommaFile,
    commaStringsToObject,
    readSpaceFile,
    spaceStringsToObject
}
const fs = require("fs");

function readTextFile(fileName) {
  let text = fs.readFileSync(fileName).toString();
  let textByLine = text.split("\n");
  return textByLine;
}

// take an array of strings and turn it into an array of objects
function commaStringsToObject(stringList) {
  let objectList = stringList.map((item) => {
    const splitString = item.split(",");
    return {
      lastName: splitString[0].trim(),
      firstName: splitString[1].trim(),
      gender: splitString[2].trim(),
      dateOfBirth: splitString[4].trim(),
      favoriteColor: splitString[3].trim(),
    };
  });
  return objectList;
}

function spaceStringsToObject(stringList) {
  let objectList = stringList.map((item) => {
    const splitString = item.split(" ");
    return {
      lastName: splitString[0],
      firstName: splitString[1],
      gender: splitString[3] == "F" ? "Female" : "Male",
      dateOfBirth: fixDateStringWithRegex(splitString[4]),
      favoriteColor: splitString[5],
    };
  });
  return objectList;
}

function fixDateStringWithRegex(oldString) {
  return oldString.replace(/-/g, "/");
}

function pipeStringsToObject(stringList) {
  let objectList = stringList.map((item) => {
    const splitString = item.split("|");
    return {
      lastName: splitString[0].trim(),
      firstName: splitString[1].trim(),
      gender: splitString[3].trim() == "F" ? "Female" : "Male",
      dateOfBirth: fixDateStringWithRegex(splitString[5].trim()),
      favoriteColor: splitString[4].trim(),
    };
  });
  return objectList;
}

module.exports = {
  readTextFile,
  commaStringsToObject,
  spaceStringsToObject,
  pipeStringsToObject,
};

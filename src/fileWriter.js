const fs = require("fs");

function fileWriter(outputNumber, objectList) {
  let string = `${outputNumber}: \n`;

  objectList.forEach(function (person) {
    string += `${person.lastName} ${person.firstName} ${person.gender} ${person.dateOfBirth} ${person.favoriteColor}\n`;
  });

  string += "\n";

  fs.appendFile("./test.txt", string, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
}

module.exports = { fileWriter };

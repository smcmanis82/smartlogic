const sortByLastname = require("./objectSorter").sortByLastname;
const readTextFile = require("./fileReader").readTextFile;
const commaStringsToObject = require("./fileReader").commaStringsToObject;
const spaceStringsToObject = require("./fileReader").spaceStringsToObject;
const pipeStringsToObject = require("./fileReader").pipeStringsToObject;
const sortByGender = require("./objectSorter").sortByGender;
const sortByDateOfBirth = require("./objectSorter").sortByDateOfBirth;
const fileWriter = require("./fileWriter").fileWriter;

const commaStrings = readTextFile("./data/comma.txt");
const spaceStrings = readTextFile("./data/space.txt");
const pipeStrings = readTextFile("./data/pipe.txt");

const commaObjects = commaStringsToObject(commaStrings);
const spaceObjects = spaceStringsToObject(spaceStrings);
const pipeObjects = pipeStringsToObject(pipeStrings);

let objList = [].concat(commaObjects, spaceObjects, pipeObjects);

let genderSorted = sortByGender(objList);
fileWriter("Output 1", genderSorted);

let birthSorted = sortByDateOfBirth(objList);
fileWriter("Output 2", birthSorted);

let nameSorted = sortByLastname(objList);
fileWriter("Output 3", nameSorted);

// sorted by last name, descending
function sortByLastname(objectList) {
  let sortedObjectList = objectList;
  objectList.sort((a, b) => (b.lastName > a.lastName ? 1 : -1));
  return sortedObjectList;
}

// sorted by gender (females before males) then by last name ascending
function sortByGender(objectList) {
  let sortedObjectList = objectList;
  objectList.sort((a, b) => (a.gender > b.gender ? 1 : -1));
  return sortedObjectList;
}

// sorted by birth date, ascending then by last name ascending
function sortByDateOfBirth(objectList) {
  let sortedObjectList = objectList;
  objectList.sort(function compare(a, b) {
    var dateA = new Date(a.dateOfBirth);
    var dateB = new Date(b.dateOfBirth);
    return dateA - dateB;
  });
  return sortedObjectList;
}

module.exports = {
  sortByLastname,
  sortByGender,
  sortByDateOfBirth,
};

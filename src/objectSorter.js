// sorted by last name, descending
function sortByLastname(objectList) {
  return objectList.sort((a, b) => (b.lastName > a.lastName ? 1 : -1));
}

// sorted by gender (females before males) then by last name ascending
function sortByGender(objectList) {
  return objectList.sort((a, b) => {
    if (a.gender > b.gender) {
      return 1;
    }
    if (a.gender < b.gender) {
      return -1;
    }
    if (a.gender == b.gender) {
      return a.lastName > b.lastName ? 1 : -1;
    }
  });
}

// sorted by birth date, ascending then by last name ascending
function sortByDateOfBirth(objectList) {
  return objectList.sort(function compare(a, b) {
    let dateA = new Date(a.dateOfBirth).getTime();
    let dateB = new Date(b.dateOfBirth).getTime();
    if (dateA > dateB) {
      return 1;
    }
    if (dateA < dateB) {
      return -1;
    }
    if (dateA == dateB) {
      return a.lastName > b.lastName ? 1 : -1;
    }
  });
}

module.exports = {
  sortByLastname,
  sortByGender,
  sortByDateOfBirth,
};

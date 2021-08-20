var assert = require("assert");
var sortByLastname = require("../src/objectSorter").sortByLastname;
var sortByGender = require("../src/objectSorter").sortByGender;
var sortByDateOfBirth = require("../src/objectSorter").sortByDateOfBirth;

describe("Object Sorter Tests", function () {
  describe("sortByLastname()", function () {
    it("should return sorted object - last name", function () {
      var input = [
        {
          lastName: "Abercrombie",
          firstName: "Neil",
          gender: "Male",
          dateOfBirth: "2/13/1943",
          favoriteColor: "Tan",
        },
        {
          lastName: "Bishop",
          firstName: "Timothy",
          gender: "Male",
          dateOfBirth: "4/23/1967",
          favoriteColor: "Yellow",
        },
        {
          lastName: "Kelly",
          firstName: "Sue",
          gender: "Female",
          dateOfBirth: "7/12/1959",
          favoriteColor: "Pink",
        },
      ];
      var actual = sortByLastname(input);
      var expected = [
        {
          lastName: "Kelly",
          firstName: "Sue",
          gender: "Female",
          dateOfBirth: "7/12/1959",
          favoriteColor: "Pink",
        },
        {
          lastName: "Bishop",
          firstName: "Timothy",
          gender: "Male",
          dateOfBirth: "4/23/1967",
          favoriteColor: "Yellow",
        },
        {
          lastName: "Abercrombie",
          firstName: "Neil",
          gender: "Male",
          dateOfBirth: "2/13/1943",
          favoriteColor: "Tan",
        },
      ];
      assert.deepEqual(actual, expected);
    });
  });

  describe("sortByGender()", function () {
    it("should return sorted object - gender (females before males) then by last name ascending", function () {
      var input = [
        {
          lastName: "Abercrombie",
          firstName: "Neil",
          gender: "Male",
          dateOfBirth: "2/13/1943",
          favoriteColor: "Tan",
        },
        {
          lastName: "Hingis",
          firstName: "Martina",
          gender: "Female",
          dateOfBirth: "4/2/1979",
          favoriteColor: "Green",
        },
        {
          lastName: "Bishop",
          firstName: "Timothy",
          gender: "Male",
          dateOfBirth: "4/23/1967",
          favoriteColor: "Yellow",
        },
        {
          lastName: "Kelly",
          firstName: "Sue",
          gender: "Female",
          dateOfBirth: "7/12/1959",
          favoriteColor: "Pink",
        },
      ];
      var actual = sortByGender(input);
      var expected = [
        {
          lastName: "Hingis",
          firstName: "Martina",
          gender: "Female",
          dateOfBirth: "4/2/1979",
          favoriteColor: "Green",
        },
        {
          lastName: "Kelly",
          firstName: "Sue",
          gender: "Female",
          dateOfBirth: "7/12/1959",
          favoriteColor: "Pink",
        },
        {
          lastName: "Abercrombie",
          firstName: "Neil",
          gender: "Male",
          dateOfBirth: "2/13/1943",
          favoriteColor: "Tan",
        },
        {
          lastName: "Bishop",
          firstName: "Timothy",
          gender: "Male",
          dateOfBirth: "4/23/1967",
          favoriteColor: "Yellow",
        },
      ];
      assert.deepEqual(actual, expected);
    });
    it("should return sorted object - same gender, last name ascending", function () {
      var input = [
        {
          lastName: "Kelly",
          firstName: "Sue",
          gender: "Female",
          dateOfBirth: "7/12/1959",
          favoriteColor: "Pink",
        },
        {
          lastName: "Hingis",
          firstName: "Martina",
          gender: "Female",
          dateOfBirth: "4/2/1979",
          favoriteColor: "Green",
        },
        {
          lastName: "Bishop",
          firstName: "Timothy",
          gender: "Female",
          dateOfBirth: "4/23/1967",
          favoriteColor: "Yellow",
        },
        {
          lastName: "Abercrombie",
          firstName: "Neil",
          gender: "Female",
          dateOfBirth: "2/13/1943",
          favoriteColor: "Tan",
        },
      ];
      var actual = sortByGender(input);
      var expected = [
        {
          lastName: "Abercrombie",
          firstName: "Neil",
          gender: "Female",
          dateOfBirth: "2/13/1943",
          favoriteColor: "Tan",
        },
        {
          lastName: "Bishop",
          firstName: "Timothy",
          gender: "Female",
          dateOfBirth: "4/23/1967",
          favoriteColor: "Yellow",
        },
        {
          lastName: "Hingis",
          firstName: "Martina",
          gender: "Female",
          dateOfBirth: "4/2/1979",
          favoriteColor: "Green",
        },
        {
          lastName: "Kelly",
          firstName: "Sue",
          gender: "Female",
          dateOfBirth: "7/12/1959",
          favoriteColor: "Pink",
        },
      ];
      assert.deepEqual(actual, expected);
    });
    it("should return sorted object - small list", function () {
      var input = [
        {
          lastName: "Hingis",
          firstName: "Martina",
          gender: "Female",
          dateOfBirth: "4/2/1979",
          favoriteColor: "Green",
        },
        {
          lastName: "Bishop",
          firstName: "Timothy",
          gender: "Male",
          dateOfBirth: "4/23/1967",
          favoriteColor: "Yellow",
        },
      ];
      var actual = sortByGender(input);
      var expected = [
        {
          lastName: "Hingis",
          firstName: "Martina",
          gender: "Female",
          dateOfBirth: "4/2/1979",
          favoriteColor: "Green",
        },
        {
          lastName: "Bishop",
          firstName: "Timothy",
          gender: "Male",
          dateOfBirth: "4/23/1967",
          favoriteColor: "Yellow",
        },
      ];
      assert.deepEqual(actual, expected);
    });
  });

  describe("sortByDateOfBirth()", function () {
    it("should return sorted object - different birth dates, ascending then by last name ascending", function () {
      var input = [
        {
          lastName: "Abercrombie",
          firstName: "Neil",
          gender: "Male",
          dateOfBirth: "2/13/1943",
          favoriteColor: "Tan",
        },
        {
          lastName: "Bishop",
          firstName: "Timothy",
          gender: "Male",
          dateOfBirth: "4/23/1967",
          favoriteColor: "Yellow",
        },
        {
          lastName: "Kelly",
          firstName: "Sue",
          gender: "Female",
          dateOfBirth: "7/12/1959",
          favoriteColor: "Pink",
        },
      ];
      var actual = sortByDateOfBirth(input);
      var expected = [
        {
          lastName: "Abercrombie",
          firstName: "Neil",
          gender: "Male",
          dateOfBirth: "2/13/1943",
          favoriteColor: "Tan",
        },
        {
          lastName: "Kelly",
          firstName: "Sue",
          gender: "Female",
          dateOfBirth: "7/12/1959",
          favoriteColor: "Pink",
        },
        {
          lastName: "Bishop",
          firstName: "Timothy",
          gender: "Male",
          dateOfBirth: "4/23/1967",
          favoriteColor: "Yellow",
        },
      ];
      assert.deepEqual(actual, expected);
    });
    it("should return sorted object - same birth date, last name ascending", function () {
      var input = [
        {
          lastName: "Kelly",
          firstName: "Sue",
          gender: "Female",
          dateOfBirth: "4/23/1967",
          favoriteColor: "Pink",
        },
        {
          lastName: "Abercrombie",
          firstName: "Neil",
          gender: "Male",
          dateOfBirth: "4/23/1967",
          favoriteColor: "Tan",
        },
        {
          lastName: "Bishop",
          firstName: "Timothy",
          gender: "Male",
          dateOfBirth: "4/23/1967",
          favoriteColor: "Yellow",
        },
      ];
      var actual = sortByDateOfBirth(input);
      var expected = [
        {
          lastName: "Abercrombie",
          firstName: "Neil",
          gender: "Male",
          dateOfBirth: "4/23/1967",
          favoriteColor: "Tan",
        },
        {
          lastName: "Bishop",
          firstName: "Timothy",
          gender: "Male",
          dateOfBirth: "4/23/1967",
          favoriteColor: "Yellow",
        },
        {
          lastName: "Kelly",
          firstName: "Sue",
          gender: "Female",
          dateOfBirth: "4/23/1967",
          favoriteColor: "Pink",
        },
      ];
      assert.deepEqual(actual, expected);
    });
  });
});

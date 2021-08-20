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
          favoriteColor: "Tan",
          dateOfBirth: "2/13/1943",
        },
        {
          lastName: "Bishop",
          firstName: "Timothy",
          gender: "Male",
          favoriteColor: "Yellow",
          dateOfBirth: "4/23/1967",
        },
        {
          lastName: "Kelly",
          firstName: "Sue",
          gender: "Female",
          favoriteColor: "Pink",
          dateOfBirth: "7/12/1959",
        },
      ];
      var actual = sortByLastname(input);
      var expected = [
        {
          lastName: "Kelly",
          firstName: "Sue",
          gender: "Female",
          favoriteColor: "Pink",
          dateOfBirth: "7/12/1959",
        },
        {
          lastName: "Bishop",
          firstName: "Timothy",
          gender: "Male",
          favoriteColor: "Yellow",
          dateOfBirth: "4/23/1967",
        },
        {
          lastName: "Abercrombie",
          firstName: "Neil",
          gender: "Male",
          favoriteColor: "Tan",
          dateOfBirth: "2/13/1943",
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
          favoriteColor: "Tan",
          dateOfBirth: "2/13/1943",
        },
        {
          lastName: "Bishop",
          firstName: "Timothy",
          gender: "Male",
          favoriteColor: "Yellow",
          dateOfBirth: "4/23/1967",
        },
        {
          lastName: "Kelly",
          firstName: "Sue",
          gender: "Female",
          favoriteColor: "Pink",
          dateOfBirth: "7/12/1959",
        },
      ];
      var actual = sortByGender(input);
      var expected = [
        {
          lastName: "Kelly",
          firstName: "Sue",
          gender: "Female",
          favoriteColor: "Pink",
          dateOfBirth: "7/12/1959",
        },
        {
          lastName: "Abercrombie",
          firstName: "Neil",
          gender: "Male",
          favoriteColor: "Tan",
          dateOfBirth: "2/13/1943",
        },
        {
          lastName: "Bishop",
          firstName: "Timothy",
          gender: "Male",
          favoriteColor: "Yellow",
          dateOfBirth: "4/23/1967",
        },
      ];
      assert.deepEqual(actual, expected);
    });
  });

  describe("sortByDateOfBirth()", function () {
    it("should return sorted object - birth date, ascending then by last name ascending", function () {
      var input = [
        {
          lastName: "Abercrombie",
          firstName: "Neil",
          gender: "Male",
          favoriteColor: "Tan",
          dateOfBirth: "2/13/1943",
        },
        {
          lastName: "Bishop",
          firstName: "Timothy",
          gender: "Male",
          favoriteColor: "Yellow",
          dateOfBirth: "4/23/1967",
        },
        {
          lastName: "Kelly",
          firstName: "Sue",
          gender: "Female",
          favoriteColor: "Pink",
          dateOfBirth: "7/12/1959",
        },
      ];
      var actual = sortByDateOfBirth(input);
      var expected = [
        {
          lastName: "Abercrombie",
          firstName: "Neil",
          gender: "Male",
          favoriteColor: "Tan",
          dateOfBirth: "2/13/1943",
        },
        {
          lastName: "Kelly",
          firstName: "Sue",
          gender: "Female",
          favoriteColor: "Pink",
          dateOfBirth: "7/12/1959",
        },
        {
          lastName: "Bishop",
          firstName: "Timothy",
          gender: "Male",
          favoriteColor: "Yellow",
          dateOfBirth: "4/23/1967",
        },
      ];
      assert.deepEqual(actual, expected);
    });
  });
});

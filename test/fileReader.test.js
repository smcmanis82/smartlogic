var assert = require('assert');
var readCommaFile = require('../src/fileReader').readCommaFile;
var commaStringsToObject = require('../src/fileReader').commaStringsToObject;
var readSpaceFile = require('../src/fileReader').readSpaceFile;
var spaceStringsToObject = require('../src/fileReader').spaceStringsToObject;

describe('File Reader Tests', function() {

    describe('readCommaFile()', function() {

        it('should return lines of comma file', function() {
            var actual = readCommaFile();
            var expected = [
                "Abercrombie, Neil, Male, Tan, 2/13/1943",
                "Bishop, Timothy, Male, Yellow, 4/23/1967",
                "Kelly, Sue, Female, Pink, 7/12/1959"
            ]
            assert.deepEqual(actual, expected);
        });
    });

    describe('commaStringsToObject()', function() {

        it('should return objects', function() {
            var input = [
                "Abercrombie, Neil, Male, Tan, 2/13/1943",
                "Bishop, Timothy, Male, Yellow, 4/23/1967",
                "Kelly, Sue, Female, Pink, 7/12/1959"
            ]
            var actual = commaStringsToObject(input);
            var expected = [
                {
                    lastName: "Abercrombie",
                    firstName: "Neil", 
                    gender: "Male", 
                    favoriteColor: "Tan",
                    dateOfBirth: "2/13/1943"
                },
                {   
                    lastName: "Bishop", 
                    firstName: "Timothy", 
                    gender: "Male", 
                    favoriteColor: "Yellow", 
                    dateOfBirth: "4/23/1967"
                },
                {
                    lastName: "Kelly", 
                    firstName: "Sue", 
                    gender: "Female", 
                    favoriteColor: "Pink", 
                    dateOfBirth: "7/12/1959"
                }
            ]
            assert.deepEqual(actual, expected);
        });
    });

    describe('readSpaceFile()', function() {

        it('should return lines of space file', function() {
            var actual = readSpaceFile();
            var expected = [
                "Kournikova Anna F F 6-3-1975 Red",
                "Hingis Martina M F 4-2-1979 Green",
                "Seles Monica H F 12-2-1973 Black"
            ]
            assert.deepEqual(actual, expected);
        });
    });

    describe('spaceStringsToObject()', function() {

        it('should return objects', function() {
            var input = [
                "Kournikova Anna F F 6-3-1975 Red",
                "Hingis Martina M F 4-2-1979 Green",
                "Seles Monica H F 12-2-1973 Black"
            ]
            var actual = spaceStringsToObject(input);
            var expected = [
                {
                    lastName: "Kournikova",
                    firstName: "Anna", 
                    gender: "Female", 
                    favoriteColor: "Red",
                    dateOfBirth: "6/3/1975"
                },
                {   
                    lastName: "Hingis", 
                    firstName: "Martina", 
                    gender: "Female", 
                    favoriteColor: "Green", 
                    dateOfBirth: "4/2/1979"
                },
                {
                    lastName: "Seles", 
                    firstName: "Monica", 
                    gender: "Female", 
                    favoriteColor: "Black", 
                    dateOfBirth: "12/2/1973"
                }
            ]
            assert.deepEqual(actual, expected);
        });
    });
});



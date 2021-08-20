var assert = require('assert');
var readTextFile = require('../src/fileReader').readTextFile;
var commaStringsToObject = require('../src/fileReader').commaStringsToObject;
var spaceStringsToObject = require('../src/fileReader').spaceStringsToObject;
var pipeStringsToObject = require('../src/fileReader').pipeStringsToObject;

describe('File Reader Tests', function() {

    describe('readTextFile()', function() {

        it('should return lines - comma file', function() {
            var actual = readTextFile("./data/comma.txt");
            var expected = [
                "Abercrombie, Neil, Male, Tan, 2/13/1943",
                "Bishop, Timothy, Male, Yellow, 4/23/1967",
                "Kelly, Sue, Female, Pink, 7/12/1959"
            ]
            assert.deepEqual(actual, expected);
        });

        it('should return lines - space file', function() {
            var actual = readTextFile("./data/space.txt");
            var expected = [
                "Kournikova Anna F F 6-3-1975 Red",
                "Hingis Martina M F 4-2-1979 Green",
                "Seles Monica H F 12-2-1973 Black"
            ]
            assert.deepEqual(actual, expected);
        });

        it('should return lines - pipe file', function() {
            var actual = readTextFile("./data/pipe.txt");
            var expected = [
                "Smith | Steve | D | M | Red | 3-3-1985",
                "Bonk | Radek | S | M | Green | 6-3-1975",
                "Bouillon | Francis | G | M | Blue | 6-3-1975"
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
    });

    describe('spaceStringsToObject()', function() {

        it('should return objects - all female', function() {
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

        it('should return objects - mixed gender', function() {
            var input = [
                "Abercrombie Neil J M 2-13-1943 Tan",
                "Hingis Martina M F 4-2-1979 Green",
                "Seles Monica H F 12-2-1973 Black"
            ]
            var actual = spaceStringsToObject(input);
            var expected = [
                {
                    lastName: "Abercrombie",
                    firstName: "Neil", 
                    gender: "Male", 
                    favoriteColor: "Tan",
                    dateOfBirth: "2/13/1943"
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

    describe('readPipeFile()', function() {
    });

    describe('pipeStringsToObject()', function() {

        it('should return objects - all male', function() {
            var input = [
                "Smith | Steve | D | M | Red | 3-3-1985",
                "Bonk | Radek | S | M | Green | 6-3-1975",
                "Bouillon | Francis | G | M | Blue | 6-3-1975"
            ]
            var actual = pipeStringsToObject(input);
            var expected = [
                {
                    lastName: "Smith",
                    firstName: "Steve", 
                    gender: "Male", 
                    favoriteColor: "Red",
                    dateOfBirth: "3/3/1985"
                },
                {   
                    lastName: "Bonk", 
                    firstName: "Radek", 
                    gender: "Male", 
                    favoriteColor: "Green", 
                    dateOfBirth: "6/3/1975"
                },
                {
                    lastName: "Bouillon", 
                    firstName: "Francis", 
                    gender: "Male", 
                    favoriteColor: "Blue", 
                    dateOfBirth: "6/3/1975"
                }
            ]
            assert.deepEqual(actual, expected);
        });

        it('should return objects - mixed gender', function() {
            var input = [
                "Smith | Steve | D | M | Red | 3-3-1985",
                "Bonk | Radek | S | M | Green | 6-3-1975",
                "Seles | Monica | G | F | Black | 12-2-1973"
            ]
            var actual = pipeStringsToObject(input);
            var expected = [
                {
                    lastName: "Smith",
                    firstName: "Steve", 
                    gender: "Male", 
                    favoriteColor: "Red",
                    dateOfBirth: "3/3/1985"
                },
                {   
                    lastName: "Bonk", 
                    firstName: "Radek", 
                    gender: "Male", 
                    favoriteColor: "Green", 
                    dateOfBirth: "6/3/1975"
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



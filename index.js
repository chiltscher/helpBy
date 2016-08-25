const util = require('util');

var helpBy = {};

//string functions
//##############################################################################

//capitalize the first letter
helpBy.capitalizing = function(string) {
    if (typeof(string) != 'string')
        return -1;
    return string[0].toUpperCase() + string.slice(1);
}

//decapitalize the first letter
helpBy.decapitalizing = function(string) {
    if (!typeof(string) != 'string')
        return -1;
    return string[0].toLowerCase() + string.slice(1);
}

//split a camelcase string in seperated words
//returns seperated words as one string
helpBy.seperatingCamelCase = function(string, capitalize) {

    if (typeof(string) != 'string')
        return -1;

    var words = [];
    var start = 0;
    var length = string.length;

    for (char in string) {
        if (char == 0)
            continue;

        var letter = string.charAt(char);
        if (helpBy.isCapital(letter)) {
            words.push(string.slice(start, char));
            start = char;
        }
    }
    words.push(string.slice(start));

    var seperatedString = '';
    for (word in words) {
        var concreteWord = words[word];
        if (capitalize)
            concreteWord = helpBy.capitalizing(concreteWord);
        seperatedString += concreteWord;
        if (word < (words.length - 1))
            seperatedString += ' ';
    }

    return seperatedString;
}

//checks if a character is an uppercase letter
helpBy.isCapital = function(letter) {

    if (typeof(letter) != 'string')
        return -1;

    if (letter.length > 1)
        return -1;

    return (letter == letter.toUpperCase());
}

//removes an element from an array
helpBy.removingFromArray = function(array, el) {

    if (!util.isArray(array))
        return -1

    var index = array.indexOf(el);

    if (index == -1)
        return index;

    array.splice(index, 1);

    return array;
}

//places an number of digits in front of a number
//Example:
//helpBy.zerosInFront(5, 3)
//>> 005
//helpBy.zerosInFront(25, 3)
//>> 025

helpBy.zerosInFront = function(number, digits){

    var len = number.toString().length;
    var neededDigits = digits - len;
    var numberString = '';

    while(neededDigits > 0)
    {
            numberString += '0';
            neededDigits --;
    }

    numberString += number.toString();
    return numberString;
}


module.exports = helpBy;

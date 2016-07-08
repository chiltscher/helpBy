const util = require('util');

var helpBy = {};

helpBy.capitalizing = function(string) {
    if (!(typeof(string) == 'string'))
        return -1;
    return string[0].toUpperCase() + string.slice(1);
}

helpBy.decapitalizing = function(string) {
    if (!(typeof(string) == 'string'))
        return -1;
    return string[0].toLowerCase() + string.slice(1);
}

helpBy.removing = function(array, el) {

    if(!util.isArray(array))
        return -1

    var index = array.indexOf(el);

    if(index==-1)
        return index;

    array.splice(index, 1);

    return array;
}

module.exports = helpBy;

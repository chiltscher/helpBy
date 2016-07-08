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

module.exports = helpBy;

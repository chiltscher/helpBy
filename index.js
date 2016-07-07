var helpBy = {};

helpBy.capitalize = function(string){
    if(!(typeof(string)=='string'))
        return -1;
    return string[0].toUpperCase()+string.slice(1);
}

module.exports = helpBy;

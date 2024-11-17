const removeFromArray = function(array, toRemove) {
    let position = array.indexOf(toRemove);
    array.splice(position, 1);
    return array;
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;

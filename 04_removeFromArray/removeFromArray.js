const removeFromArray = function(array, ...toRemove) {

    for (i = 0; i < toRemove.length; i++) {
        if (!array.includes(toRemove[i])) {
            toRemove.splice(i, 1);    
        }
    }

    const sortedArray = array.sort((a, b) => a - b);
    const newArray = [];

    for (i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] !== sortedArray[i+1]) {
            newArray.push(sortedArray[i]);
        }
    }

    for (i = 0; i < toRemove.length; i++) {
        if (newArray.includes(toRemove[i])) {
            let position = newArray.indexOf(toRemove[i]);
            newArray.splice(position, 1);    
        }
    }
    
    return newArray;
}

removeFromArray([1, 2, 3, 4], 2, 5);

// Do not edit below this line
module.exports = removeFromArray;

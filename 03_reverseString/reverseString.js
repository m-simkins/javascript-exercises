const reverseString = function(string) {
    let startArray = string.split("");
    let resultArray = [];
    for (i = 0; i < string.length; i++) {
        resultArray.push(startArray.pop());
    }
    return resultArray.join("");
};

reverseString('hello there');

// Do not edit below this line
module.exports = reverseString;

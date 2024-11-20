const sumAll = function(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number' || x % 1 !== 0 || y % 1 !== 0 || x < 0 || y < 0) {
        return "ERROR";
    } else {
        let sumArray = [x, y];
        sumArray.sort(function(a, b){return a - b});
        for (i = sumArray[0] + 1; i < sumArray[1]; i++) {
            sumArray.push(i);
        }
        let sum = 0;
        for (i = 0; i < sumArray.length; i++) {
            sum += sumArray[i];
        }
        return sum;
    }
};

sumAll(9, 3);

// Do not edit below this line
module.exports = sumAll;

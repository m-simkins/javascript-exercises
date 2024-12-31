const fibonacci = function(n) {
    let array = [1, 1];

    if (typeof n !== Number) {
        n = Number(n);
    }

    if (n < 0) {
        return "OOPS";
    }
    else if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {    
        for (let i = 2; i < n; i++) {
            array.push(array[i-1] + array[i-2]);
        }
        return array[n - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;

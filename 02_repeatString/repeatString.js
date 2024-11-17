const repeatString = function(string, num) {
    let result = ""
    if (num < 0) {
        result = "ERROR";
        return result;
    } else {
        for (i = 0; i < num; i++) {
            result += string;
        }
        return result;
    }
};

repeatString('hey', 3)

// Do not edit below this line
module.exports = repeatString;

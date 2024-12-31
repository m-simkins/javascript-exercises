const palindromes = function (str) {
    const validator = "abcdefghijklmnopqrstuvwxyz0123456789"

    const word = str
                    .toLowerCase()
                    .split("")
                    .filter((char) => validator.includes(char))
                    .join("");
    const reversed = word.split("").reverse().join("");
    console.log(word);
    console.log(reversed);
    return word === reversed;
};

// Do not edit below this line
module.exports = palindromes;

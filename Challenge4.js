function firstNonRepeatingChar(str) {
    var charCount = {};
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (var _a = 0, str_2 = str; _a < str_2.length; _a++) {
        var char = str_2[_a];
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}
console.log(firstNonRepeatingChar("Rihanna"));
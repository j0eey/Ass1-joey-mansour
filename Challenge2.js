function countVowels(str) {
    var vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    var count = 0;
    for (var _i = 0, _a = str.toLowerCase(); _i < _a.length; _i++) {
        var char = _a[_i];
        if (vowels.has(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("hello world, this is joey"));

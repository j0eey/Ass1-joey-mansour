function findMissingNumber(arr) {
    var min = Math.min.apply(Math, arr);
    var max = Math.max.apply(Math, arr);
    var expectedSum = ((max - min + 1) * (min + max)) / 2;
    var actualSum = arr.reduce(function (sum, num) { return sum + num; }, 0);
    return expectedSum - actualSum;
}
console.log(findMissingNumber([50, 51, 53, 54, 55]));
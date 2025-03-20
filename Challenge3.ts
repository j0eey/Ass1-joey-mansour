function findMissingNumber(arr: number[]): number {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
  
    const expectedSum = ((max - min + 1) * (min + max)) / 2;
    
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
  
    return expectedSum - actualSum;
}
  
console.log(findMissingNumber([50, 51, 53, 54, 55]));
  
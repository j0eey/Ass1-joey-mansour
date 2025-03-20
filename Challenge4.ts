function firstNonRepeatingChar(str: string): string | null {
    const charCount: { [key: string]: number } = {};
  
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    for (let char of str) {
      if (charCount[char] === 1) {
        return char;
      }
    }
  
    return null;
}
  
console.log(firstNonRepeatingChar("Rihanna"));

  
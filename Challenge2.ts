function countVowels(str: string): number {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;

    for (const char of str.toLowerCase()) {
        if (vowels.has(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("hello world, this is joey"));
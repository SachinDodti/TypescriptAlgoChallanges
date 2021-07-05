function isCaseInsensitivePalindrome(inputString: String): boolean{
     const originalLowerCase = inputString.toLowerCase();
     const reversedWord = originalLowerCase.split('').reverse().join('');

     return originalLowerCase === reversedWord;
     
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));
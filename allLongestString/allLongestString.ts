function allLongestString(inputArray : string[]) : any{

 let longestLength = 0;
 let arrLength=[];
  inputArray.forEach((word:string) => {
    longestLength =  word.length > longestLength ? word.length:longestLength
    } )

 inputArray.forEach((word:string) =>{
     if(longestLength == word.length){
        arrLength.push(word)
     }
 } )

 console.log(arrLength)

}


console.log(allLongestString(["aba", "aa", "ad", "vcd", "aba"]))



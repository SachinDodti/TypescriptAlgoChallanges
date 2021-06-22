function allLongestString(inputArary : string[]) : any{

 let longestLength = 0;
 let arrLength=[];
  inputArary.forEach((word:string) => {
    longestLength =  word.length > longestLength ? word.length:longestLength
    } )
̦

 inputArary.forEach((word:string) =>{
     if(longestLength == word.length){
        arrLength.push(word)
     }
 } )

 console.log(arrLength)

}


console.log(allLongestString(["aba", "aa", "ad", "vcd", "aba"]))


//["aba", "vcd", "aba"]
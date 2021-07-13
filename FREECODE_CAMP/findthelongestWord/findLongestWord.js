// function findLongestWordLength(str) {
//   const arrValue = str.split(" ");

//   let longestLength = 0;
//   let nameOfLongestLength = "";
//   arrValue.forEach((element) => {
//     if (element.length > longestLength) {
//       longestLength = element.length;
//       nameOfLongestLength = element;
//     }
//   });

//   console.log(longestLength, nameOfLongestLength);
// }

// Approach 2

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map((word) => word.length));
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

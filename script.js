// const extendHex = (shortHex) => {
//   // write your code here
// };

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));

function extendHex(shortHex) {
  // Remove the "#" symbol if present
  if (shortHex[0] === "#") {
    shortHex = shortHex.substring(1);
  }

  // Split the short hex code into color components
  var r = shortHex[0];
  var g = shortHex[1];
  var b = shortHex[2];

  // Extend the short hex code to the full hex code
  var fullHex = "#" + r + r + g + g + b + b;

  // Return the full hex code
  return fullHex;
}

// console.log(extendHex("#abc")); // Output: "#aabbcc"
// console.log(extendHex("abc")); // Output: "#aabbcc"
// console.log(extendHex("#AbC")); // Output: "#AABBCC"
// console.log(extendHex("#f09")); // Output: "#ff0099"

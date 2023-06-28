//  Write the Big O time complexity of your function here
function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) return true;
    }
  }
  return false;
}

/* 
  Add your pseudocode here
  iterate over the array of numbers
  for the current number, identify a complementary number that adds to our target
  (for example: if our number is 2, and the target is 5, the complementary number is 3)
  iterate over the remaining numbers in the array
    check if any of the remaining numbers is the complement
      if so, return true
if we reach the end of the array, return false
///////
The code iterate and check through the array looking for any two numbers that its sum will be equal to the target.

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

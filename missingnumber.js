/*
Given an array nums containing n distinct numbers
in the range [0, n], return the only number in the range that is missing from the array.
https://leetcode.com/problems/missing-number/

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
*/

const missingNumber = function (nums) {
  // sort nums
  nums.sort((a, b) => a - b);
  // if length of array is 1
  // check the value of that element, return 0 or 1 depending
  if (nums.length === 1) return nums[0] === 0 ? 1 : 0;
  // loop through sortedNums from 0 to sortedNums.length
  if (nums[0] !== 0) return 0;
  for (let i = 0; i <= nums.length; i++) {
    // if element at next index is not equal to current element + 1
    if (nums[i + 1] !== nums[i] + 1) return nums[i] + 1;
    // if so, return current element + 1
  }
};

// refactor
const missingNumberRefactor = function (nums) {
  // sort nums array in ascending order
  nums.sort((a, b) => a - b);
  // iterate through the array and
  // initialize i in a for...loop, and traverse from the start of the array to the end of it
  for (let index = 0; index < nums.length; index++) {
    // make sure current index's element is the val of that index;
    // if current element does not match index, return that index as the missing number
    if (index !== nums[index]) return index;
  }
  // return length of the array as missing number is the last number
  return nums.length;
};

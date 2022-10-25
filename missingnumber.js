/*
Given an array nums containing n distinct numbers
in the range [0, n], return the only number in the range that is missing from the array.
https://leetcode.com/problems/missing-number/
*/


var missingNumber = function(nums) {
  // sort nums
  nums.sort((a, b) => a - b);
  // if length of array is 1
      // check the value of that element, return 0 or 1 depending
  if (nums.length === 1) return nums[0] === 0 ? 1 : 0;
  // loop through sortedNums from 0 to sortedNums.length
  if (nums[0] !== 0) return 0;
  for (let i = 0; i <= nums.length; i++){
      // if element at next index is not equal to current element + 1
      if (nums[i + 1] !== nums[i] + 1) return nums[i] + 1;
      // if so, return current element + 1
  }
};
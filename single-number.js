/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
https://leetcode.com/problems/single-number/
Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
*/

const singleNumber = function (nums) {
  // sort nums array in ascending order
  nums.sort((a, b) => a - b);
  // iterate through every element in nums
  for (let index = 0; index < nums.length; index++) {
    // check if next index value is the same as next index value, if it is and continue to next iteration
    if (nums[index] === nums[index + 1]) continue;
    // if current index is not zero and the prev index has an element with the same value, continue to the next iteration
    if (nums[index] === nums[index - 1]) continue;
    // return element at current index if both checks return negative
    else return nums[index];
  }
};

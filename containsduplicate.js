// Given an integer array nums, 
// return true if any value appears at least twice in the array, and return false if every element is distinct.
// https://leetcode.com/problems/contains-duplicate


var containsDuplicate = function(nums) {
  // obj where key is the element and value is the count of occurrence
  const cache = {};
  // loop for each element in nums
  for (const element of nums){
      if (!cache[element]) cache[element] = 0;
      cache[element]++;
      // check if value of obj at element is >= 2 return true
      if (cache[element] >= 2) return true;
      
  // return false
  }
  return false;
  
};
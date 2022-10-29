/* You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
https://leetcode.com/problems/climbing-stairs/ 
Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

const climbStairs = function (n) {
  let cache = {};
  function fibonacci(n) {
    if (n === 1 || n === 0) return 1;
    if (!cache[n]) cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return cache[n];
  }
  // i = 1; o = 1
  // i = 2; o = 2
  // i = 3; o = 3
  // i = 4; o = 5
  // i = 5; o = 8
  // i = 6; o = 13
  return fibonacci(n);
};

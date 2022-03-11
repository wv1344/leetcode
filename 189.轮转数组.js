/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let n = nums.length
  if(k>n){
    k = k%n
  }
  let u = nums.splice(n-k,n)
  nums.unshift(...u)
  return nums 
};
// @lc code=end

let arr = [1,2]
const a = rotate(arr,5)
console.log(a);

/**
 * 1 21
 * 2 12
 * 3 21
 * 4 12
 * 5 21
 * 
 */
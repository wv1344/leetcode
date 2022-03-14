/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let l = 0
  let r = nums.length - 1
  if(r<1) return 0
  while(l < r){
    let m = l + Math.floor((r-l)/2)
    if(nums[m] > nums[m+1]){
      r = m
    } else {
      l = m + 1
    }
  }
  return l
};
// @lc code=end

// const arr = [1,2,3,1]
const arr = [2,1]
// const arr = [1,2,1,3,5,4,4]
const a = findPeakElement(arr)
console.log(a);
/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0
  let right = nums.length -1
  let idx = undefined
  while(right >= left){
    let mid = Math.floor((right - left)/2) + left
    let cur = nums[mid]
    if(cur === target){
      return mid
    } else if(cur > target){
      right = mid - 1
    }else {
      left = mid + 1
      idx = left
    }
  }
  return idx || 0
};
// @lc code=end


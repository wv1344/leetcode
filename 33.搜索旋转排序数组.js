/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  let l = 0
  let r = nums.length - 1
  while(l <= r){
    let m = l + Math.floor((r-l)/2)
    let curM = nums[m]
    let curL = nums[l]
    let curR = nums[r]
    if(curM === target){
      return m
    } else if(curM > target){ //中间值 大于 目标值(常规在左侧)
      // 中间值 大于 右值(右侧不按顺序)  && 右值 大于等于 目标值(目标在右侧)
      if(curM > curR && curR >= target){
        l = m + 1
      } else {
        r = m - 1
      }
    } else { // 中间值 小于 目标值(常规在右侧)
      // 中间值 小于 左值(左侧不按顺序) && 左值 
      if(curM < curL && curL <= target){
        r = m - 1
      } else {
        l = m + 1
      }
    }
  }
  return -1
};
// @lc code=end


// console.log(search([0,4],4));
// console.log(search([5,6,7,0,4],4));
// console.log(search([5,1,3],3));
console.log(search([1,3],3));
// console.log(search([4,5,6,7,0],4));
// console.log(search([1,3],2));
// console.log(search([0,1,2],0));
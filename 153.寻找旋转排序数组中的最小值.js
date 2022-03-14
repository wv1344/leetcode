/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let l = 0
  let r = nums.length - 1
  
  while(l < r){
    let m = l + Math.floor((r-l)/2)
    // 左侧有顺序
    if(nums[m] >= nums[l]){
      if(nums[m] > nums[r]){ // 右侧无顺序(在无序的一侧)
        l = m+1
      }else{
        r = m-1
      }

    } else if(nums[m] < nums[r]){ // 右侧有顺序
      if(nums[m] <= nums[l]){ // 左侧无序，在无序的一侧
        r = m
      }else {
        l = m
      }
    }
  }
  return nums[l]

};
// @lc code=end
let arr = [5,6,7,8,9]
// let arr = [5,6,2,3,4]
// let arr = [5,1,2,3,4]
// let arr = [3,4,5,1,2]
// let arr = [2,1]
// let arr = [4,5,6,7,0,1,2]
// let arr = [11,13,15,17]
// let arr = [3,1,2]
console.log(findMin(arr));
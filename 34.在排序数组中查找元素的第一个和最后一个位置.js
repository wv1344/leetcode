/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
  // 先找最小值
  let curL = undefined
  let curR = undefined
  if(nums[nums.length-1] === target){
    curR = nums.length-1
  } else {
    curR = search(nums,target,false)
  }
  if(nums[0] === target){
    curL = 0
  } else {
    curL = search(nums,target,true)
  }

  return [curL,curR]
};
var search = function(arr,target,lower){
  let l = 0
  let r = arr.length-1
  while(l <= r){
    let m = l + Math.floor((r-l)/2)
    // console.log(l);
    // console.log(r);
    // console.log(m);
    if(lower && arr[l] === target){
      return l
    }
    if(!lower && arr[r] === target){
      return r
    }
    if(arr[m] === target && lower && arr[m-1] < target){
      return m
    } else if(arr[m] === target && !lower && arr[m+1] > target){
      return m
    } else if(arr[m] === target){
      if(lower){
        r = m
      }else{
        l = m
      }
    } else if(arr[m]<target) {
        l = m+1
    } else {
        r = m-1
    }
  }
  return -1
}
// @lc code=end

// let arr = [2,3,4,4,4,4,8]
// let arr = [5,7,7,8,8,10]
// let arr = [1,2,3,3,3,3,4,5,9]
let arr = [5,7,7,8,8,10]
// let arr = [4,4,8]

console.log(searchRange(arr,6));

/**
 * l0 r8 m4
 * l4 r8 m6
 * l4 r6 m5
 * 
 * 
 **/
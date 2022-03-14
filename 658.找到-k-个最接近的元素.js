/*
 * @lc app=leetcode.cn id=658 lang=javascript
 *
 * [658] 找到 K 个最接近的元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 var findClosestElements = function(arr, k, x) {
  let l = 0
  let r = arr.length-1
  let cur = undefined
  if(arr[0] > x){
    return arr.slice(0,k)
  }else if(arr[arr.length-1]<x){
    return arr.slice(-k)
  }
  while(l<=r){
    let m = l + Math.floor((r-l)/2)
    if(arr[m] === x){
      cur = m
      break
    } else if(arr[m] > x){
      r = m-1
    } else {
      l = m+1
    }
  }
  console.log(cur);
  if(cur){

  }


};
// @lc code=end

let arr = [1,2,3,4,5,5,8,9]

console.log(findClosestElements(arr,4,5));

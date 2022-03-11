/*
 * @lc app=leetcode.cn id=1019 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  // return nums.map(bar => Math.pow(bar,2)).sort((a,b) => a-b)
  let n = nums.length
  let ans = []
  // for(let i=0,j=n-1,pos = n-1;i<=j;){
  //   if(nums[i] * nums[i] > nums[j] * nums[j]){
  //     console.log(pos);
  //     ans[pos] = nums[i] * nums[i];
  //     ++i
  //   } else {
  //     ans[pos] = nums[j] * nums[j];
  //     --j
  //   }
  //   --pos
  // }
  let pos = n - 1
  let l = 0
  let r = n-1
  while(l<=r){
    if(nums[l] ** 2 > nums[r] ** 2){
      ans[pos--] = nums[l++] ** 2
    } else [
      ans[pos--] = nums[r--] ** 2
    ]
  }
  return ans
};
// @lc code=end

let arr = [-4,-1,0,3,10]
const a = sortedSquares(arr)
console.log(a);
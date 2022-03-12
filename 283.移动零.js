/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let n = nums.length
  // let a = []
  // for(let i=0;i<n;i++){
  //   if(nums[i] === 0){
  //     a.push(i)
  //     nums.push(0)
  //   }
  // }
  // for(let i=n-1;i>=0;i--){
  //   if(a.includes(i)){
  //     nums.splice(i,1)
  //   }
  // }

  // way Two
  // for(let i=n-1;i>=0;i--){
  //   if(nums[i] === 0){
  //     nums.splice(i,1)
  //     nums.push(0)
  //   }
  // }



  // Way Three
  // 双指针，这里没走通

  // let l,r = 0
  // let le = nums.length
  // while(r<le){
  //   if(nums[r] !== 0){
  //     [nums[r],nums[l]] = [nums[l],nums[r]]
  //     l++
  //   }
  //   r++
  // }

  // 终极解决办法
  nums.sort((a,b) => b? 0: -1)


  console.log(nums);
};
// @lc code=end

const arr = [0,1,0,3,12]
const arr2 = [0,0,1]
moveZeroes(arr)

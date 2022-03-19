/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if(num === 0) return true
  if(num === 1) return true
  if(num === 4) return true

  let l = 0
  let r = num
  let res = undefined
  while(l <= r){
    let m = Math.floor((r-l)/2)+l
    if(m === 0) return false
    console.log(l);
    console.log(r);
    console.log(m);
    if(m*m === num){
      return true
    } else if(m*m > num){
      r = m-1
    } else {
      l = m+1
    }
  }
  return !!res
};
// @lc code=end

console.log(isPerfectSquare(16));
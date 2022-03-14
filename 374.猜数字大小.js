/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  let l = 0
  let r = n
  while(l <= r){
    let m = l + Math.floor((r - l)/2)
    let res = guess(m)
    if(res === 0){
      return m
    } else if(res === -1){
      r = m - 1
    } else {
      l = m + 1
    }
  }
};
// @lc code=end

var guess = function(num) {
  if(num === 16) return 0
  if(num > 16) return -1
  if(num < 16) return 1
}

console.log(guessNumber(20));
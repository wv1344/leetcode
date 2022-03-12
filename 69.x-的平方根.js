/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
  let l = 0
  let r = +x
  while(l <= r){
    let m = (l + (r-l)/2)
    let f = ~~m // 位运算 取整
    if(m * m === x || (f * f < x && (f+1) * (f+1) > x)){
      return f
    }else if(m * m > x){
      r = m
    } else {
      l = m
    }
  }
};

// @lc code=end

console.log(mySqrt(13));


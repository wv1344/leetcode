/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
  let c = Math.abs(n)
  let res = 0 
  for(let i = c; i != 0; i = i/2){
    console.log(i);
    if(i % 2 != 0){
        res *= x;
    }
    x *= x;
}

  return n > 0 ? res : 1/res
  // while(c > 0){
  //   if(n>0){
  //     res = res*x
  //   } else {
  //     res = (1/x)*res
  //   }
  //   c--
  // }
  // return res
};
// @lc code=end

console.log(myPow(2,10));
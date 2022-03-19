/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  let l = 0
  let r = letters.length-1
  if(target >= letters[r]) return letters[0]
  while(l<=r){
    let m = l + Math.floor((r-l)/2)
    console.log(m);
    if(letters[m] > target && letters[m-1]<=target){
      return letters[m]
    } else if(letters[m] > target){
      r = m-1
    } else {
      l = m+1
    }
  }
  return letters[l]
};
// @lc code=end

console.log(nextGreatestLetter(["e","e","e","e","e","e","n","n","n","n"],"e"));
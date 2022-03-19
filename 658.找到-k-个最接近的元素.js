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
 var findClosestElements = function (arr, k, x) {
  let l = 0
  let r = arr.length - 1
  let cur = undefined
  let ans =  undefined
  if (arr[0] >= x) {
    ans =  arr.slice(0, k)
  }
  if (arr[arr.length - 1] <= x) {
    ans =  arr.slice(-k)
  }
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2)
    if (arr[m] === x) {
      cur = m
      break
    } else if (arr[m] < x) {
      l = m
    } else {
      r = m
    }
  }

  let start = 0;
  if (l + 1 - k > 0) {
    start = l + 1 - k;
  }

  while(myAbsComp(arr[start], arr[start + k],x)){
    start++;
    if (start + k == arr.length) break;
  }
  // ans =[start, start + k];
  return arr.splice(start,k)

};
var myAbsComp = function (a, b, m) {
  // a is left, b is right a <= target <= b
  //is |a-m| < |b-m| or (|a-m| == |b-m| and a<b)?
  // equals to a - m + b - m <= 0
  if (a + b - 2 * m >= 0) {
    return false;
  }
  else {
    return true;
  }
}
// @lc code=end

let arr = [1, 2, 3, 4, 5, 5, 8, 9]

console.log(findClosestElements(arr, 4, 5));

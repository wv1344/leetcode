/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target,index=0) {
  if(nums.length === 0) return -1
  let middle = (Math.ceil(nums.length / 2) - 1) < 0 ? 0: Math.ceil(nums.length / 2)-1
  let cur = nums[middle]

  if(cur > target){ // 左侧
    return search(nums.slice(0,middle),target,index)
  } else if(cur < target){ // 右侧
    return search(nums.slice(middle+1,nums.length),target,middle+index +1)
  } else {
    return middle +index
  }
};

const a = search([-1,2,3,4,5,6,7,8],5)
console.log(a);
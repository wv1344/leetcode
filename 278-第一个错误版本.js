var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let left = 0 
    let right = n
    while(right >= left){

      let mid = Math.floor((right-left)/2) +left
      if(left === right) {
        console.log(mid);
        return mid
      } else if(isBadVersion(mid)){
        right = mid
      } else {  
        left = mid + 1
      }
    }
  };
};

const isBadVersion = (val) => val > 4
const a = solution(isBadVersion)(30)
console.log(a)
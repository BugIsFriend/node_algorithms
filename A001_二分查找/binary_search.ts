/** 迭代算法实现(建立在有序数列之上)
 * 
 * 思想：
 *    step_0: 取得数组的下届和上界 [lo, hi]
 *    step_1: 若 lo 小于等于 hi， 否者返回 -1
 *    setp_2: 取得中位数 mid = lo+ Math.floor((hi-lo)/2);
 *    setp_3: 若 target(目标值) 小于 mid 对应的值， 修改 hi 为 mid-1; 重复 step_1;
 *    step_4: 若 target(目标值) 大于 mid 对于的值， 修改 lo 为 mid+1, 重复 step_1;
 *    setp_5：若 traget(目标值) 等于 mid 对于的值， 返回 mid；
 *  
*/

export namespace algo {

      export function ibinary_search(arrayList, target) {
            let lo = 0;
            let hi = arrayList.length - 1;          // 确找查找的区间在闭区间即：[lo,hi] 
            let mid = 0;
            while (lo <= hi) {
                  // 取得闭区间 [lo,hi] 的中位数，
                  mid = lo + Math.floor((hi - lo) / 2);
                  if (arrayList[mid] < target) {
                        // 目标大于mid对应的元素，修改下界 lo = mid+1(过滤掉中位数，因为已经比较过了)
                        lo = mid + 1;
                  } else if (target < arrayList[mid]) {
                        // 目标小于mid对应的元素，修改修改上界 hi= mid-1(过滤掉中位数，因为比较过了)
                        hi = mid - 1;
                  } else {
                        // 目标数等于mid对于的数字，返回索引
                        return mid;
                  }
            }
            return -1;
      }


      /** 递归算法实现，递归算法要注意其结束条件；
       * 
      */
      export function rbinary_search(arrayList, target, lo, hi) {
            let mid = Math.floor((lo + hi) / 2);
            if (lo <= hi) {
                  if (arrayList[mid] < target) {
                        return rbinary_search(arrayList, target, mid + 1, hi);
                  } else if (target < arrayList[mid]) {
                        return rbinary_search(arrayList, target, lo, mid - 1);
                  } else {
                        return mid;
                  }
            } else {
                  return -1;
            }
      }
}


var arrayList = [2, 3, 4, 5, 6, 10, 14, 23, 46, 75, 79, 100, 1000, 2999, 4000, 5555, 22222];

console.log('arrayList length ', arrayList.length);

console.log('i_binary_search', algo.ibinary_search(arrayList, 79));
console.log('r_binary_search', algo.rbinary_search(arrayList, -1, 0, arrayList.length - 1));

for (var i = 0; i < arrayList.length; ++i) {
      // console.log('i_binary_search', ibinary_search(arrayList, arrayList[i]));
      // console.log('r_binary_search', rbinary_search(arrayList, arrayList[i], 0, arrayList.length - 1));
}
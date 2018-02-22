

/** 迭代算法实现
 * 
*/
function ibinary_search(arrayList, target) {
      var lo = 0;
      var hi = arrayList.length - 1;
      var mid = Math.floor((lo + hi) / 2);
      while (lo <= hi) {
            if (arrayList[mid] < target) {
                  lo = mid + 1;
            } else if (target < arrayList[mid]) {
                  hi = mid - 1;
            } else {
                  return mid;
            }
            mid = Math.floor((lo + hi) / 2);
      }
      return -1;
}


/** 递归算法实现，递归算法要注意其结束条件；
 * 
*/
function rbinary_search(arrayList, target, lo, hi) {
      var mid = Math.floor((lo + hi) / 2);
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

var arrayList = [2, 3, 4, 5, 6, 10, 14, 23, 46, 75, 79, 100];

for (var i = 0; i < arrayList.length; ++i) {
      console.log('i_binary_search', ibinary_search(arrayList, arrayList[i]));
      console.log('r_binary_search', rbinary_search(arrayList, arrayList[i], 0, arrayList.length - 1));
}
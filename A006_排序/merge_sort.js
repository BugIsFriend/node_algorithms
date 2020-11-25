/**
 * 给你排序算法思想，将数组分成 Math.ceil( n/2) 个小组， 每个小组两个元素
 * 
 * 1：对每个小组进行排序； 
 * 
 * 2：然后将两两小组进行合并，
 * 
 * 3：对合并之后的数组在排序；
 * 
 * 4：重复2：步骤，直到合并为之前完整的数组；
 *  
*/
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function merge(arr, lo, hi) {
    let i = lo;
    let mid = lo + Math.floor((hi - lo) / 2);
    let j = mid + 1;
    for (let i = lo; i <= hi; i++) {
        c_arr[i] = arr[i];
    }

    for (let k = lo; k <= hi; k++) {
        if (i > mid) {
            arr[k] = c_arr[j++];
        } else if (j > hi) {
            arr[k] = c_arr[i++];
        } else if (c_arr[j] < c_arr[i]) {
            arr[k] = c_arr[j++];
        } else {
            arr[k] = c_arr[i++];
        }
    }
}

function sort(arr, lo, hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    //  说明只有单个元素了； 不能再分组；
    if (lo >= hi) {
        return;
    }
    sort(arr, lo, mid);     // 递归分组，左边；
    sort(arr, mid + 1, hi); // 递归分组，右边；
    merge(arr, lo, hi);     // 归并排序；
}

let arr = [8, 12, 85, 5, 8, 3, 751, 18, 34];
let c_arr = new Array(arr.length);
sort(arr, 0, arr.length - 1);

console.log(arr)

function fun(a, b) {
    console.log(b);
    return {
        fun: function (c) {
            return fun(c, a);
        }
    }
}

var d = fun(0);
d.fun(1);
d.fun(2);
d.fun(3);

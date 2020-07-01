/*
 * @Author: myerse.lee 
 * @Date: 2018-11-18 12:33:07 
 * @Last Modified by: myerse.lee
 * @Last Modified time: 2020-07-01 14:24:28
 * 排序算法；
 */

let arr = [8, 12, 85, 5, 8, 3, 751, 18, 34, 73, 32, 39, 8, 6, 77, 8, 4, 3, 4, 2];

function swap(list, i, j) {
    let temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}



/** 
 * 冒泡排序算法；
 * 缺点：当最小一个元素在最末端，将会有 N-1 数据的移动； 
 */
function BubbleSort(list) {
    let count = list.length;
    let isExchange = true;

    while (isExchange && count > 0) {
        isExchange = false;
        for (var i = 1; i < count; ++i) {
            if (list[i - 1] > list[i]) {
                isExchange = true;
                // let temp = list[i];
                // list[i] = list[i - 1];
                // list[i - 1] = temp;
                swap(list, i, i - 1);
            }
        }
        count--;
    }
    console.log(`BubbleSort:    ${list}`);
}

// BubbleSort(arr);


/** 
 * 插入排序算法；
 * 缺点：当最小一个元素在最末端，将会有 N-1 数据的移动； 
 */

function InsertSort(list) {
    for (let i = 1; i < list.length; ++i) {
        for (let j = i; j > 0; --j) {           // 找到 比 list[i] 小的第一个元素；
            if (list[j] < list[j - 1]) {
                let temp = list[j];
                list[j] = list[j - 1];
                list[j - 1] = temp;
            }
        }
    }
    console.log(`InsertSort:    ${list}`);
}

// InsertSort(arr);

/**
 *  希尔排序算法：将List 分成h个有序数组(即：h个互相独立的有序数组编织在一起组成的一个数组)； h 越大元素移动越多； 
 *              h: 以 1 结尾的 h 序列   ( h= 3*h + 1;  h个有序列：1, 4, 13, 40, 121, 364, 1093 );
 *  step_0: 先将第h组=[h] 进行插入排序； 
 *  step_0: 再将[h - 1] 组进行插入排序, 
 */
function ShellSort(list) {
    let N = list.length;
    let h = 1;
    // 计算出数组能飞多少个有序数组；
    while (h < N / 3) {
        h = 3 * h + 1;          // 1, 4, 13, 40, 121, 364, 1093
    }

    while (h >= 1) {
        for (let i = h; h < N; ++i) {
            for (let j = i; j >= h; --j) {
                if (list[j] < list[j - 1]) {
                    let temp = list[j];
                    list[j] = list[j - 1];
                    list[j - 1] = temp;
                }
            }
        }
        h = Math.floor(h / 3);
    }
    console.log(`ShellSort:    ${list}`);
}

InsertSort(arr);


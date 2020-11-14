/*
 * @Author: myerse.lee 
 * @Date: 2018-11-18 12:33:07 
 * @Last Modified by: lee
 * @Last Modified time: 2020-11-14 11:58:48
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
                swap(list, i, i - 1);
            }
        }
        count--;
    }
    console.log(`BubbleSort:    ${list}`);
}

// BubbleSort(arr);
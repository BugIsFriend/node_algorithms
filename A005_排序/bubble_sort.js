/*
 * @Author: myerse.lee 
 * @Date: 2018-11-18 12:33:07 
 * @Last Modified by: myerse.lee
 * @Last Modified time: 2020-06-30 10:27:24
 * 排序算法；
 */


// // 冒泡排序算法；
function BubbleSort(list) {

    let count = list.length;
    let isExchange = true;
    while (isExchange && count > 0) {
        isExchange = false;
        for (var i = 1; i < count; ++i) {
            if (list[i - 1] > list[i]) {
                isExchange = true;
                let temp = list[i];
                list[i] = list[i - 1];
                list[i - 1] = temp;
            }
        }
        count--;
    }
}

let arr = [8, 12, 85, 5, 8, 3, 751, 18, 34, 73, 32, 39, 8, 6, 77, 8, 4, 3, 4, 2];
BubbleSort(arr);
console.log(arr)

// // 插入排序算法；


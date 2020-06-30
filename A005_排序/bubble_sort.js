/*
 * @Author: myerse.lee 
 * @Date: 2018-11-18 12:33:07 
 * @Last Modified by: myerse.lee
 * @Last Modified time: 2020-06-30 11:03:19
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
    console.log(`BubbleSort:    ${list}`);
}

let arr = [8, 12, 85, 5, 8, 3, 751, 18, 34, 73, 32, 39, 8, 6, 77, 8, 4, 3, 4, 2];
BubbleSort(arr);


// todo 插入排序算法；

function InsertSort(list) {
    for (var i = 1; i < list.length; ++i) {
        for (var j = 0; i < j; ++j) {           // 找到 比 list[i] 小的第一个元素；
            if (a[i] < a[j]) {
                let tem = a[i];
                for (var k = i; k > j; --k) {

                }
            }
        }
    }

}

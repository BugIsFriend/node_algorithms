/*
 * @Author: myerse.lee
 * @Date: 2020-03-14 18:13:32
 * @Last Modified by: lee
 * @Last Modified time: 2020-11-13 19:21:30
 *
 * 统计一个序列中每个元素的次数；
 * 
 */


// 统计数组中摸个元素出现次数；
function statistic_count(dataArr) {
    let map = new Map();
    let count = 0;
    for (let value of dataArr) {
        if (!map.has(value)) {
            count = 1;
        } else {
            count = map.get(value) + 1;
        }
        map.set(value, count);
    }
    return map;
}
// let array = [123, 12, 3, 4, 1, 2, 4, 1, 1, 23, 3, 212, 4, 6, 78, 3, 32, 4344, 1];
// statistic_count(array).forEach((value, key) => { console.log(`${key}:   ${value}`); });





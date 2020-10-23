/*
 * @Author: myerse.lee
 * @Date: 2020-03-14 18:13:32
 * @Last Modified by: lee
 * @Last Modified time: 2020-10-23 13:23:11
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

// 利用Map 找到数组中最大顺子/n顺子( 连对/三连对(飞机))
function FindSequence(tarArray, unit = 1, sequenceLen) {
    let tmpMap = new Map();

    for (let i = 0; i < tarArray.length; i++) {
        const key = tarArray[i];
        let value = 0;
        if (tmpMap.has(key)) {
            value = tmpMap.get(key) + 1;
        }
        tmpMap.set(key, value);
    }

    console.log(`ssss11         ${JSON.stringify(tmpMap)}`)
    let mapArray = [...tmpMap.entries()];
    mapArray = mapArray.filter((value) => { return value[1] >= unit }).sort((a, b) => { return a[0] - b[0] });

    console.log(`ssss11         ${JSON.stringify(mapArray)}`)

    let allSequence = []; // 所有的不中断顺子 集合；
    let upperBound = mapArray.length - 1;
    let lowerBound = 0;
    let index = lowerBound;

    while (index < upperBound) {

        let tIndex = index;
        for (tIndex = index; tIndex < upperBound; ++tIndex) {
            if (mapArray[tIndex + 1][0] - mapArray[tIndex][0] != 1) {
                break;
            }
        }
        allSequence.push(mapArray.slice(index, tIndex + 1));
        index = tIndex + 1;
    }
    return allSequence;
}

let tem_sequence = [9, 9, 9, 9, 8, 8, 8, 8, 7, 6, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3, 2, 1, 1, 1, 1];
console.log(`qqqq   ${JSON.stringify(FindSequence(tem_sequence, 3))}`)




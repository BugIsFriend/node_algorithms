


// 利用Map 找到数组中最大顺子/n顺子( 连对/三连对  n/顺子  (飞机))
function FindSequence(tarArray, unit = 1, sequenceLen) {
    let tmpMap = new Map();

    for (let i = 0; i < tarArray.length; i++) {
        const key = tarArray[i];
        let value = (!tmpMap.has(key)) ? 0 : tmpMap.get(key);
        tmpMap.set(key, value + 1);
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
/**
 * 将二维Grid rol, col 转换为 一个id计算；
 * 
 *  Grid ：m 行， n 列  格子；
 * 
 */

function converGridToId(row, col, gridColCount) {
    return row * gridColCount + col;
}

let gridCount = 8;
for (let i = 0; i < gridCount; i++) {
    for (let j = 0; j < gridCount; j++) {
        console.log(converGridToId(i, j, gridCount, gridCount));
    }
}


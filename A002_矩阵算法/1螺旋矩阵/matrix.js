/*
 * @Author: myerse.lee 
 * @Date: 2018-10-11 21:57:44 
 * @Last Modified by: myerse.lee
 * @Last Modified time: 2020-06-06 17:15:50
 * @ Desc: 螺旋矩阵；
 */

class SpinMatrics {

    constructor(row, col) {
        this._row = row;
        this._col = col;
        this._count = 0;
        this._matrics = null;
        this.initMatrix();
    }

    initMatrix() {
        this._matrics = new Array(this._row);
        for (let i = 0; i < this._row; ++i) {
            this._matrics[i] = new Array(this._col);
            for (let j = 0; j < this._col; ++j) {
                this._matrics[i][j] = 0;
            }
        }
        this.minRowChange(0, 0, this._row - 1, 0, this._col - 1)
    }

    minRowChange(curRow, minRow, maxRow, minCol, maxCol) {
        for (let i = minCol; i <= maxCol; ++i) {
            this._matrics[curRow][i] = ++this._count;
        }
        ++minRow;
        if (minRow <= maxRow) {
            this.maxColChange(maxCol, minRow, maxRow, minCol, maxCol)
        }
    }

    maxColChange(curCol, minRow, maxRow, minCol, maxCol) {
        for (let i = minRow; i <= maxRow; ++i) {
            this._matrics[i][curCol] = ++this._count;
        }
        --maxCol;
        if (minCol <= maxCol) {
            this.maxRowChange(maxRow, minRow, maxRow, minCol, maxCol);
        }
    }

    maxRowChange(curRow, minRow, maxRow, minCol, maxCol) {
        for (let i = maxCol; i >= minCol; --i) {
            this._matrics[curRow][i] = ++this._count;
        }
        --maxRow
        if (minRow <= maxRow) {
            this.minColChange(minCol, minRow, maxRow, minCol, maxCol);
        }
    }

    minColChange(curCol, minRow, maxRow, minCol, maxCol) {
        for (let i = maxRow; i >= minRow; --i) {
            this._matrics[i][curCol] = ++this._count;
        }
        ++minCol;
        if (minCol <= maxCol) {
            this.minRowChange(minRow, minRow, maxRow, minCol, maxCol);
        }
    }

    displayMatircs() {
        for (let i = 0; i < this._row; ++i) {
            console.log(this._matrics[i]);
        }
    }
}

var spinMatrics = new SpinMatrics(7, 7)
spinMatrics.displayMatircs();


/* 输出结果
[ 1,  2,  3,  4,  5,  6,  7  ]
[ 24, 25, 26, 27, 28, 29, 8  ]
[ 23, 40, 41, 42, 43, 30, 9  ]
[ 22, 39, 48, 49, 44, 31, 10 ]
[ 21, 38, 47, 46, 45, 32, 11 ]
[ 20, 37, 36, 35, 34, 33, 12 ]
[ 19, 18, 17, 16, 15, 14, 13 ]
*/






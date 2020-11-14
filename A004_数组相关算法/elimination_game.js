/**
 * 消除小游戏的算法
 *
 */

const EliminateType = {
    None: 0,
    L: 1,
    T: 2,
    X: 3,
}

class Grid {
    constructor(row, col, kind) {
        this.row = row;
        this.col = col;
        this.kind = kind;
    }
}


function eliminate(row, col, maxtrGrid) {
    let rowLength = maxtrGrid.length;
    let colLength = maxtrGrid[row].length;
    let tarKind = maxtrGrid[row][col].kind;
    let rowMax = row;


    let allEraseGrids = null;

    // 纵列检测
    let rowErasedGrids = [maxtrGrid[row][col]];
    for (let i = row + 1; i < rowLength; i++) {
        let temGrid = maxtrGrid[i][col];
        if (temGrid.kind == tarKind) {
            rowMax = i;
            rowErasedGrids.push(temGrid);
        }
    }

    let rowMin = row;
    for (let i = row - 1; i >= 0; --i) {
        let temGrid = maxtrGrid[i][col];
        if (temGrid.kind == tarKind) {
            rowMin = i;
            rowErasedGrids.push(temGrid);
        }
    }

    if (!(rowMax - rowMin + 1 >= 3)) {
        rowErasedGrids = [];
    }

    // 横排检测
    let colErasedGrids = [maxtrGrid[row][col]];
    let colMax = col;
    for (let i = col + 1; i < colLength; i++) {
        let temGrid = maxtrGrid[row][i];
        if (temGrid.kind == tarKind) {
            colMax = i;
            colErasedGrids.push(temGrid);
        }
    }

    let colMin = col;
    for (let i = col - 1; i >= 0; --i) {
        let temGrid = maxtrGrid[row][i];
        if (temGrid.kind == tarKind) {
            colMin = i;
            colErasedGrids.push(temGrid);
        }
    }

    if (!(colMax - colMin + 1 >= 3)) {
        colErasedGrids = [];
    }

    if (rowErasedGrids.length > 3 && colErasedGrids.length > 3) {
        rowErasedGrids.shift();
        allEraseGrids = [...rowErasedGrids, ...colErasedGrids];
    }

    let eliminateType = EliminateType.None;

    if (colMax - colMin >= 3 && rowMax - rowMin >= 3) {
        // 十字消除
        if (colMax != col && colMin != col && rowMax != row && rowMin != row) {
            eliminateType = EliminateType.X;
        }

        // T字消除
        if (((colMax != col && colMin != col) && (rowMax == row || rowMin == row)) ||
            ((rowMax != col && rowMin != col) && (colMax == row || colMin == row))
        ) {
            eliminateType = EliminateType.T;
        }
    } else if (colMax - colMin >= 3 || rowMax - rowMin >= 3) {
        eliminateType = EliminateType.L;
    }

    return {
        allEraseGrids: allEraseGrids,
        eliminateType: eliminateType
    }
}

let matrGrid = [
    [new Grid(0, 0, 1), new Grid(0, 0, 1), new Grid(0, 0, 1), new Grid(0, 0, 1), new Grid(0, 0, 1)],
    [new Grid(0, 0, 1), new Grid(0, 0, 1), new Grid(0, 0, 1), new Grid(0, 0, 1), new Grid(0, 0, 1)],
    [new Grid(0, 0, 1), new Grid(0, 0, 1), new Grid(0, 0, 1), new Grid(0, 0, 1), new Grid(0, 0, 1)],
    [new Grid(0, 0, 1), new Grid(0, 0, 1), new Grid(0, 0, 1), new Grid(0, 0, 1), new Grid(0, 0, 1)],
    [new Grid(0, 0, 1), new Grid(0, 0, 1), new Grid(0, 0, 1), new Grid(0, 0, 1), new Grid(0, 0, 1)],
    [new Grid(0, 0, 1), new Grid(0, 0, 1), new Grid(0, 0, 1), new Grid(0, 0, 1), new Grid(0, 0, 1)],
    [new Grid(0, 0, 1), new Grid(0, 0, 1), new Grid(0, 0, 1), new Grid(0, 0, 1), new Grid(0, 0, 1)],
];

for (let i = 0; i < matrGrid.length; i++) {
    const gridRows = matrGrid[i];
    for (let j = 0; j < gridRows.length; j++) {
        const element = gridRows[j];
        element.row = i;
        element.col = j;
    }

}

console.log(eliminate(1, 1, matrGrid))
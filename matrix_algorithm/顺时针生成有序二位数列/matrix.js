
var matrics = null; 
var count = 0;
var rows=7,cols=7;
function initMatrics(row,col){
    matrics = new Array(row);
    for(let i=0; i<row; ++i){
        matrics[i] = new Array(col);
        for(let j=0; j<col; ++j){
            matrics[i][j] = 0;
        }
    }
    minRowChange(0, 0, row-1, 0, col-1)
} 

function displayMatircs(row,col){
    for(let i=0; i<row; ++i){
        console.log(matrics[i]);
    }
}

function minRowChange(curRow,minRow,maxRow,minCol,maxCol){  
    for(let i=minCol; i<=maxCol; ++i){
        matrics[curRow][i] = ++count;
    }
    ++minRow;
    if(minRow<=maxRow){
        maxColChange(maxCol,minRow,maxRow,minCol,maxCol,)
    }
}

function maxColChange(curCol,minRow,maxRow,minCol,maxCol){
    for(let i=minRow; i<=maxRow; ++i){
        matrics[i][curCol] = ++count;
    }
    --maxCol;
    if(minCol<=maxCol){
        maxRowChange(maxRow,minRow,maxRow,minCol,maxCol);
    }
}

function maxRowChange(curRow,minRow,maxRow,minCol,maxCol){
    for(let i =maxCol; i>=minCol; --i){
        matrics[curRow][i] = ++count;
    }
    --maxRow
    if(minRow<=maxRow){
        minColChange(minCol,minRow,maxRow,minCol,maxCol);
    }
}

function minColChange(curCol,minRow,maxRow,minCol,maxCol){
    for(let i=maxRow; i>=minRow; --i){
        matrics[i][curCol] = ++count;
    }
    ++minCol;
    if(minCol<=maxCol){
        minRowChange(minRow,minRow,maxRow,minCol,maxCol);
    }
}
initMatrics(rows,cols)
displayMatircs(rows,rows)


/* 输出结果
[ 1,  2,  3,  4,  5,  6,  7  ]
[ 24, 25, 26, 27, 28, 29, 8  ]
[ 23, 40, 41, 42, 43, 30, 9  ]
[ 22, 39, 48, 49, 44, 31, 10 ]
[ 21, 38, 47, 46, 45, 32, 11 ]
[ 20, 37, 36, 35, 34, 33, 12 ]
[ 19, 18, 17, 16, 15, 14, 13 ]
*/







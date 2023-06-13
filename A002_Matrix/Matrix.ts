

export namespace algo {

   export class Matrix<T> {
        private _row: number
        private _col:number

        public _matrix:Array<Array<T>>

        constructor(row: number, col: number) {
            this._row = row;
            this._col = col;
            this.init()
        }

      // 初始化
        public init() {
            for (let i = 0; i < this._row; i++) {
                this._matrix[i] = new Array<T>(this._col)
                for (let j = 0; j < this._col; j++) {
                    this._matrix[i][j] = 0 as T
                }
            }
        }

      // 转置矩阵
        public transpose() {
            let tmat = new Array<Array<T>>(5)
            for (let i = 0; i < this._matrix.length; i++) {
                tmat[i] = [...this._matrix[i]]
            }
            for (let i = 0; i < tmat.length; i++) {
                for (let j = i + 1; j < tmat[i].length; j++) {
                    let temp = tmat[i][j]
                    tmat[i][j] = tmat[j][i]
                    tmat[j][i] = temp
                }
            }
            return tmat
        }
       
        public transfer2Array(matrix:Array<Array<any>>) {
            let arr: Array<any> = []
            matrix.forEach(element=>arr.push(...element))
        }
       
       /**
        * 将数组转换为矩阵
        * @param arr 
        * @param row 
        * @param col 
        */
       public transferArr2Matrix(arr: Array<any>, row: number, col: number) {
           let count = 0
           let matrix:Array<Array<any>> = []
           for (let i = 0; i < row; i++) {
               matrix.push(new Array<any>(col))
               for (let j = 0; j < col; j++) {
                   if (count < arr.length) {
                        matrix[i].push(arr[count++])
                   }
                }
           }
           return matrix
       }
   }
}
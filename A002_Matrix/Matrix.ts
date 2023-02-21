

export namespace algo {

   export class Matrix {
      
      private _row: number
      private _col:number

      public _matrix:Array<Array<number>>

      constructor(row: number, col: number) {
         this._row = row;
         this._col = col;
         this.init()
      }

      // 初始化
      init() {
        for (let i = 0; i < this._row; i++) {
            this._matrix[i] = new Array<number>(this._col)
            for (let j = 0; j < this._col; j++) {
                this._matrix[i][j] = 0
            }
        }
      }

      // 转置矩阵
      transpose() {
        let tmat = new Array<Array<number>>(5)
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




      

   }
}
/*
 * @Author: myerse.lee
 * @Date: 2019-10-28 15:46:48
 * @Last Modified by: lee
 * @Last Modified time: 2020-12-27 22:55:03
 * @Desc 图 
 */

/**
 *  图  : 图是由一组定点和一组能够将两点相连的边组成的；
 *  
 *  路径: 路径是有边的顺序链接的一系列定点；(简单路径：没有没有重复顶点的路径。  环：起点和终点相同的路径)；
 * 
 *  连通: 当连个顶点之间存在一条连接双方的路径时，成为一个顶点到另一个顶点是连通的；
 *  
 *  连通图： 如果从任意一个顶点都存在一条路径到达另一个任意顶点，则为连通图；
 * 
 *  树： 是无环的连通图；   互不联通的树的集合成为森林；
 * 
 *  图的密度：指已经连接的顶点对站所有可能被连接的点点的比例；
 * 
 */

class Graph {
    constructor(v) {
        this._V = v;
        this._E = 0;
        this.adjMap = new Map();
    }

    get V() { return this._V; }

    get E() { return this._E; }

    // 给顶点v，w添加一条边；
    addEdge(v, w) {
        (!this.adjMap.has(v)) && this.addAdj(v);
        this.adjMap.get(v).push(w);
    }

    addAdj(v) {
        if (!this.adjMap.has(v)) {
            this.adjMap.set(v, []);
        }
    }

    // 返回与v相邻的边: 邻接数组；
    adj(v) {
        (!this.adjMap.has(v)) && this.addAdj(v)
        return this.adjMap.get(v);
    }

    // 计算V的度数；
    static degree(G, v) { return G.adj(v).lenght; }

    static maxDegree(G) {    // 返回顶点的最大度数；
        let max = 0;
        for (var v = 0; v < G.V; v++) {
            if (this.degree(G, v) > max) {
                max = this.degree(G, v);
            }
        }
        return max;
    }

    static avgDgree(G) {    // 计算平均度数
        return 2 * G.E / G.V;
    }

    static numberOfSelfLoops(G) {   // 图的自环个数
        let count = 0;
        for (let v = 0; v < G.V; ++v) {
            let adgVerTices = G.adj(v);
            for (let w of adgVerTices) {
                if (v == w) {
                    count++;
                }
            }
        }
        return Math.floor(count / 2);
    }

    toString() {
        return `${this.V}   vertices,    ${this.E}  edges \n`;
    }

    //#region 深度优先搜索算法；
    /**
     * 基于深度优先sV, wV 是否连通；
     * @param {*} sV：起始顶点
     * @param {*} wV：目标顶点  
     */
    DFS(sV, wV) {
        let marked = new Array(this.V);
        this._DFS(sV, marked);
        console.log(`${sV} -> ${wV}: ${marked[wV] ? true : false}`)
        return marked[wV] ? true : false;
    }

    _DFS(sV, marked) {
        marked[sV] = true;
        for (const v of this.adj(sV)) {
            if (!marked[v]) this._DFS(v, marked);
        }
    }
    //#endregion


    //#region 深度优先路径；

    DFSPath(sV, wV) {
        let marked = new Array(this.V);
        let path = new Array(this.V)

    }

    _DFSPath(sV, wV, marked, path) {
        marked[sV] = true;
        for (const v of this.adj(sV)) {
            if (!marked[v]) this._DFS(v, wV, marked, path);
        }

    }


}

let g = new Graph(6);
g.addEdge(0, 1);
g.addEdge(0, 3);
g.addEdge(0, 5);

g.addEdge(3, 4);


g.DFS(0, 1);
g.DFS(0, 5);
g.DFS(0, 2);
g.DFS(0, 3);
g.DFS(0, 4);
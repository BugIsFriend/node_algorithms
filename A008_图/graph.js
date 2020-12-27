/*
 * @Author: myerse.lee
 * @Date: 2019-10-28 15:46:48
 * @Last Modified by: lee
 * @Last Modified time: 2020-12-27 16:57:23
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

    constructor(V) {
        this._V = 0;
        this._E = 0;
        this.adj = [];
    }

    get V() {
        return this._V;
    }

    get E() {
        return this._E;
    }

    addEdge(v, w) {         // 给顶点v，w添加一条边；
        this.adj[v].push(w);
    }

    adj(v) {                // 返回与v相邻的边: 邻接表
        return this.adj[v];
    }

    static degree(G, v) {   // 计算V的度数；
        return G.adj(v).lenght;
    }

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

    static numberOfSelfLoops(G) {
        let count = 0;
        for (let v = 0; v < G.V; ++v) {
            let adgVerTices = G.adj(v);
            for (let w of adgVerTices) {
                if (v == w) {
                    count++;
                }
            }
        }
        return count;
    }

    toString() {
        let s = `${this.V}   vertices,    ${this.E}  edges \n`;
    }


}
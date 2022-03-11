let NodeColor = {
    RED: true,
    BLACK: false
}

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.parent = null;
        this.value = value || 0;
        this.color = NodeColor.BLACK;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root == null;
    }

    insert(node) {
        this.isEmpty() ? (this.root = node) : this._insert(this.root, node);
    }

    _insert(root, node) {
        if (node.value < root.value) {
            if (root.left) {
                this._insert(root.left, node);
            } else {
                root.left = node;
                node.parent = root;
            }
        } else if (node.value > root.value) {
            if (root.right) {
                this._insert(root.right, node);
            } else {
                root.right = node;
                node.parent = root;
            }
        } else {
            throw Error(`节点已存在`)
        }
    }

    //  层次遍历 == 广度优先遍历；使用queue： 初始节点进入queue, while(!queue.isEmpty())  出队列；左右子节点进入队列；
    BSFVisit() {
        let queue = new Array();
        queue.push(this.root);
        while (queue.length > 0) {
            let node = queue.shift();
            if (node && node.left) queue.push(node.left);
            if (node && node.right) queue.push(node.right);
            console.log(node.value)
        }
    }

    //  栈实现先根遍历；
    preOrdert() {
        let stack = new Array();
        stack.push(this.root);
        while (stack.length != 0) {
            let node = stack.pop();
            node.right && stack.push(node.right);
            node.left && stack.push(node.left);
            console.log(node.value);
        }
    }

    postOrder() {
        let stack = new Array();
        stack.push(this.root);
        while (stack.length != 0) {
            node.right && stack.push(node.right);
            node.left && stack.push(node.left);
            let node = stack.pop();
            console.log(node.value);
        }
    }

    // 树的对称成；
    static isSymmetric(tNode0, tNode1) {
        if (tNode0 == null && tNode1== null){
            return true;
        }else if(!(tNode0 && tNode1)){
            return false;
        }
        
        let _isSymmetric0 = this.isSymmetric(tNode0.right, tNode1.left);
        let _isSymmetric1 = this.isSymmetric(tNode0.left, tNode1.right);
        return   tNode0.value == tNode1.value &&  _isSymmetric0 && _isSymmetric1;
    }

    static isSameTree(tNode0, tNode1){
        if (tNode0 == null && tNode1== null){
            return true;
        }else if(!(tNode0 && tNode1)){
            return false;
        }
        let isSameRight = this.isSameTree(tNode0.right,tNode1.right);
        let isSameLeft = this.isSameTree(tNode0.left, tNode1.left);
        return tNode0.value == tNode1.value && isSameLeft && isSameRight;
    }

}

let tree0 = new Tree();
let nodeList = [new Node(9), new Node(7), new Node(5), new Node(8), new Node(20), new Node(30), new Node(19), new Node(40)];
for (const iterator of nodeList) {
    tree0.insert(iterator);
}
let tree1 = new Tree();
let nodeList1 = [new Node(9), new Node(7), new Node(5), new Node(8), new Node(20), new Node(30), new Node(19), new Node(40)];
for (const iterator of nodeList1) {
    tree1.insert(iterator);
}


console.log( Tree.isSameTree(tree1.root, tree0.root));
// tree.BSFVisit();

// tree.preOrdert();
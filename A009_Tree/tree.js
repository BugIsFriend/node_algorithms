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

    /**
     *  层次遍历，广度优先遍历；使用queue： 初始节点进入queue, while(!queue.isEmpty())  出队列；左右子节点进入队列；
     * */
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

    /**
     *  栈实现先根遍历；
     * */

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
    isSymmetric(node) {
        if (node == null) return;
        if (node.right == null && node.left == null) return true;
    }

    // 树的左右子旋转；
    invert(node) { }
}


let tree = new Tree();
let nodeList = [new Node(9), new Node(7), new Node(5), new Node(8), new Node(20), new Node(30), new Node(19), new Node(40)]
for (const iterator of nodeList) {
    tree.insert(iterator);
}


// tree.BSFVisit();

tree.preOrdert();
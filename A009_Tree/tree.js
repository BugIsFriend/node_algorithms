let NodeColor = {
    RED: true,
    BLACK: false
}

export class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.parent = null;
        this.value = value || 0;
        this.color = NodeColor.BLACK;
    }
}

export class Tree {
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



}


let tree = new DTree();
let nodeList = [new Node(9), new Node(7), new Node(5), new Node(8), new Node(20), new Node(30), new Node(25), new Node(40)]
for (const iterator of nodeList) {
    tree.insert(iterator);
}
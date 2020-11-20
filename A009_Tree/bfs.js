import { Tree, Node } from "./tree";

class DTree extends Tree {

    constructor() {
        super();
    }

    /**
     *  初始节点入队列，
     *  while(队列不为空);
     *       节点出队列；
     *       节点左子树不为空，则入队列
     *       节点右子树不为空，则入对立
     * */
    BSFVisit() {
        let queue = new Array();
        queue.push(this.root);
        while (queue.length > 0) {
            let node = queue.shift();
            if (node) {
                console.log(node.value)
            }
            if (node && node.left) queue.push(node.left);
            if (node && node.right) queue.push(node.right)
        }
    }
}


let tree = new DTree();
tree.insert(new Node(10));
tree.insert(new Node(7));
tree.insert(new Node(5));
tree.insert(new Node(8));

tree.insert(new Node(20));
tree.insert(new Node(30));
tree.insert(new Node(25));
tree.insert(new Node(40));

tree.BSFVisit();

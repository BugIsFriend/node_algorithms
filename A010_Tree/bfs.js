import { Tree, Node } from "./tree";

class DTree extends Tree {

    constructor() {
        super();
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

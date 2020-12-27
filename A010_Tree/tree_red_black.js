/**
 * 红黑树：
 *
 *      红链接必须是左子树；
 *      没有任何一个节点同时和两个红链接；
 *      该树是完美黑色平衡的，即任意空链接到的根节点的路径上的黑链接数量相同；
 *
 *
 *      新加入的节点都是红色；
 *      根节点总是黑色的
 *
 *
 *
 * 红黑树插入操作：
 *
 *     1.如果右子结点是红色，而左子结点是黑色，进行左旋；           isRed(h.right) && !isRed(h.left)   rotateLeft(h);
 *     2.如果左子结点是红色， 且它的左子节点也是红色， 进行右旋；    isRed(h.right) && isRed(h.left)    rotateRight(h);
 *     3.如果左右子节点都是红色， 进行颜色翻转；                  isRed(h.right) && isRed(h.left)    flopColors(h);
*/
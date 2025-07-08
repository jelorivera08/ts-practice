/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

interface TreeNode {
  val: number;
  left: TreeNode;
  right: TreeNode;
}

const getHeight = (root: TreeNode, height: number) => {
  height++;
  if (!root) return height;

  return Math.max(
    getHeight(root?.left, height),
    getHeight(root?.right, height)
  );
};

function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;
  const leftHeight = getHeight(root?.left, 0);
  const rightHeight = getHeight(root?.right, 0);

  if (Math.abs(leftHeight - rightHeight) <= 1) {
    return isBalanced(root?.left) && isBalanced(root?.right);
  } else {
    return false;
  }
}

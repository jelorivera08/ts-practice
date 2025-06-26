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

function inorderTraversal(root: TreeNode | undefined | null): number[] {
  const stack: TreeNode[] = [];
  const res: number[] = [];

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    if (stack.length) {
      root = stack.pop();
      if (root) res.push(root?.val);
      root = root?.right;
    }
  }

  return res;
}

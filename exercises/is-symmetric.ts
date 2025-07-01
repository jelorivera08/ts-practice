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
  left: TreeNode | null;
  right: TreeNode | null;
}

const isSymmetricCheck = (
  tree1: TreeNode | null | undefined,
  tree2: TreeNode | null | undefined
) => {
  if (!tree1 && !tree2) return true;

  if (tree1?.val !== tree2?.val) return false;

  return (
    isSymmetricCheck(tree1?.left, tree2?.right) &&
    isSymmetricCheck(tree1?.right, tree2?.left)
  );
};

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;

  return isSymmetricCheck(root?.left, root?.right);
}

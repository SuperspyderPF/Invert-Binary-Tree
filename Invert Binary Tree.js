var invertTree = function(root) {
    return root && new TreeNode(root.val, invertTree(root.right), invertTree(root.left));
};
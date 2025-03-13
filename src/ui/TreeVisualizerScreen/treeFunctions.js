class TreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class TreeFunctions {
  static createTree(value) {
    return new TreeNode(value);
  }

  static insertNode(tree, value) {
    // Rule 1: If tree is empty, create root
    if (!tree) return new TreeNode(value);
    
    // Rule 2: If the value is less than the root, insert in left subtree
    if (value < tree.value) {
      tree.left = TreeFunctions.insertNode(tree.left, value);
      return tree;
    }
  
    // Rule 3: If the value is greater than the root, insert in right subtree
    if (value > tree.value) {
      tree.right = TreeFunctions.insertNode(tree.right, value);
      return tree;
    }
    
    // If the value is equal to the root, do nothing (abort insertion)
    console.log("Value already exists in the tree");
    return tree;
  }
}

export { TreeFunctions };

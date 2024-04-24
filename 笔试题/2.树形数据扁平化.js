const tree = {
  val: "A",
  id: 1,
  children: [
    {
      val: "B",
      id: 2,
      children: [
        {
          val: "D",
          id: 4,
          children: [],
        },
        {
          val: "E",
          id: 5,
          children: [],
        },
      ],
    },
    {
      val: "C",
      id: 3,
      children: [
        {
          val: "F",
          id: 6,
          children: [],
        },
      ],
    },
  ],
};

// 输出结果
// [
//   { val: 'A', id: 1, parentId: null },
//   { val: 'B', id: 2, parentId: 1 },
//   { val: 'D', id: 4, parentId: 2 },
//   { val: 'E', id: 5, parentId: 2 },
//   { val: 'C', id: 3, parentId: 1 },
//   { val: 'F', id: 6, parentId: 3 }
// ]

/**
 * 将树形结构扁平化为数组
 * @param node 当前节点
 * @param parentId 父节点ID，默认为null
 * @returns 扁平化后的数组
 */
function flattenTree(node, parentId) {
  const result = [];
  result.push({ val: node.val, id: node.id, parentId: parentId || null });
  if (node.children.length > 0) {
    for (let child of node.children) {
      result.push(...flattenTree(child, node.id));
    }
  }
  return result;
}

console.log(flattenTree(tree));

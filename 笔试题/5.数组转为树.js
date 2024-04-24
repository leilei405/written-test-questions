// 输入:
const arr = [
  { id: 1, name: "部门A", parentId: 0 },
  { id: 2, name: "部门B", parentId: 1 },
  { id: 3, name: "部门C", parentId: 1 },
  { id: 4, name: "部门D", parentId: 2 },
  { id: 5, name: "部门E", parentId: 2 },
  { id: 6, name: "部门F", parentId: 3 },
];

// 输出:
const output = [
  {
    id: 1,
    name: "部门A",
    children: [
      {
        id: 2,
        name: "部门B",
        children: [
          {
            id: 4,
            name: "部门D",
            children: [],
          },
          {
            id: 5,
            name: "部门E",
            children: [],
          },
        ],
      },
      {
        id: 3,
        name: "部门C",
        children: [
          {
            id: 6,
            name: "部门F",
            children: [],
          },
        ],
      },
    ],
  },
];

// 思路:
function convert(arr) {
  const map = {};
  const tree = [];

  // 1. 构建map
  arr.forEach((item) => {
    map[item.id] = { ...item, children: [] };
  });

  // 2. 构建树
  arr.forEach((item) => {
    if (item.parentId !== 0) {
      map[item.parentId].children.push(map[item.id]);
    } else {
      tree.push(map[item.id]);
    }
  });
  return tree;
}

function convert(arr) {
  const nodeParent = new Map();
  const result = [];

  // 构建映射关系
  arr.forEach((node) => {
    node.children = [];
    nodeParent.set(node.id, node);
  });

  // 构建树
  arr.forEach((node) => {
    const parentId = node.parentId;
    const parentNode = nodeParent.get(parentId);
    if (parentNode) {
      parentNode.children.push(node);
    } else {
      result.push(node);
    }
  });

  return result;
}

console.log(convert(arr));

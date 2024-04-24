/**
 * 排序
 * ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5'] // 输入
 * ['4.3.5', '4.3.4.5', '4.2',' '2.3.3, '0.302.1', '0.1.1'] // 输出
 */

/**
 * 比较两个版本号的大小
 * @param versionA 版本号A
 * @param versionB 版本号B
 * @returns -1表示A小于B，0表示A等于B，1表示A大于B
 */
function compareVersions(versionA, versionB) {
  const partsA = versionA.split(".");
  const partsB = versionB.split(".");

  for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
    const partA = parseInt(partsA[i] || 0);
    const partB = parseInt(partsB[i] || 0);

    if (partA > partB) {
      return -1; // 如果 a 小于 b，则返回 -1，表示 a 在 b 之前
    } else if (partA < partB) {
      return 1; // 如果 a 大于 b，则返回 1，表示 a 在 b 之后
    }
  }

  // 如果两个版本号相等，则返回 0
  return 0;
}

function sortVersions(versions) {
  return versions.sort(compareVersions);
}

// 测试代码
const versions = ["0.1.1", "2.3.3", "0.302.1", "4.2", "4.3.5", "4.3.4.5"];
const sortedVersions = sortVersions(versions);
console.log(sortedVersions, "======"); // ['4.3.5', '4.3.4.5', '4.2',' '2.3.3, '0.302.1', '0.1.1']

function sortFn(a, b) {
  const paramA = a.split(".");
  const paramB = b.split(".");
  const maxLength = Math.max(paramA.length, paramB.length);

  for (let i = 0; i < maxLength; i++) {
    const A1 = parseInt(paramA[i] || 0);
    const B1 = parseInt(paramB[i] || 0);
    if (A1 > B1) {
      return -1;
    } else if (A1 < B1) {
      return 1;
    }
  }
  return 0;
}

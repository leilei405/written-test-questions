const str =
  "The quick brown fox jumps over the lazy dog. The dog slept over the verandah.";

/**
 * 统计字符串中出现次数最多的单词
 * @param str 待统计的字符串
 * @returns 返回一个对象，包含出现次数最多的单词和该单词的出现次数
 */
function selectWord1(str) {
  // 将字符串转为小写并去除句点，再按照空格分割为单词数组
  let res = str.toLowerCase().replace(".", "").split(" ");

  // 创建一个空对象用于统计单词出现的次数
  const worldCount = {};
  // 遍历单词数组
  for (let i = 0; i < res.length; i++) {
    const word = res[i];
    // 如果单词已经在 worldCount 中存在，则将其计数加一
    if (word in worldCount) {
      worldCount[word]++;
    } else {
      // 否则，将单词添加到 worldCount 中，并设置计数为 1
      worldCount[word] = 1;
    }
  }

  // 初始化最大单词和最大计数
  let maxWord = "";
  let maxCount = 0;
  // 遍历 worldCount 中的每个单词
  for (const word in worldCount) {
    // 如果当前单词的计数大于最大计数
    if (worldCount[word] > maxCount) {
      // 更新最大单词和最大计数
      maxWord = word;
      maxCount = worldCount[word];
    }
  }
  // 返回最大单词和最大计数
  return { maxWord, maxCount };
}

console.log(selectWord1(str), "==解法1==");

function selectWord2(str) {
  const wordList = str.toLowerCase().split(/[ .]/);
  const wordCount = {};

  for (let i = 0; i < wordList.length; i++) {
    const word = wordList[i];
    if (word in wordCount) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }

  let maxWord = "";
  let maxCount = 0;
  for (const word in wordCount) {
    if (wordCount[word] > maxCount) {
      maxWord = word;
      maxCount = wordCount[word];
    }
  }

  return { maxWord, maxCount };
}

console.log(selectWord2(str), "==解法2==");

// in 的用法  用来判断某个属性是否在对象中  in 左侧是属性名，右侧是对象
// 只是判断是否存在该属性  并不判断属性值是否为空

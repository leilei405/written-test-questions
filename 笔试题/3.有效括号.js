// 示例 1：
//     输入：s = "()"  输出：true
//     示例 2：
//     输入：s = "(()())"  输出：true
//     示例 3:
//     输入: s = '((())())' 输出: true
//     示例 4：
//     输入：s = ")("  输出：false
//     示例 5：
//     输入：s = "(" 输出：false
//     示例 6：
//     输入：s = ")" 输出：false
//     示例 7：
//     输入：s = "(((" 输出：false
//     示例 8：
//     输入：s = "())" 输出：false

const isValid = (str) => {
  // 判断字符串的长度是否等于奇数,等于则停止执行
  if (str.length % 2 === 1) return false;
  // 1. 定义一个栈
  const stack = [];
  // 2. 扫描字符串长度
  for (let i = 0; i < str.length; i += 1) {
    // 3. 声明一个变量，用来存储当前字符
    const char = str[i]; // i 做为index
    // 4. 如果遇到左括号，则将当前字符入栈
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      // 5. 如果遇到右括号，则判断栈顶元素是否与当前字符匹配
      // 获取数组最后一项
      const last = stack[stack.length - 1];
      // 6. 判断它和栈顶元素是否匹配，如果匹配则出栈
      if (
        (last === "(" && char === ")") ||
        (last === "[" && char === "]") ||
        (last === "{" && char === "}")
      ) {
        // 类型相同则在栈中删除
        stack.pop();
      } else {
        // 类型不匹配，则直接返回false
        return false;
      }
    }
  }
  // 7. 如果栈为空，则说明字符串有效
  if (stack.length === 0) {
    return true;
  }
};
console.log(isValid("((()))"));

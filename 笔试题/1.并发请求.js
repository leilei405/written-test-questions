/**
 * 并发请求多个url地址，返回promise数组
 * @param urls 请求的url地址列表，默认为空数组
 * @param maxNum 同时请求的最大数量，默认为所有url同时请求
 * @returns Promise数组，每个Promise对应一个url地址的请求结果
 */
function concurRequest(urls = [], maxNum) {
  if (urls.length === 0) return Promise.resolve([]);
  // 创建一个新的Promise对象，用于处理并发请求
  return new Promise((resolve) => {
    let index = 0; // 指向下一次请求的url对应的下标
    const result = []; // 存储所以请求结果
    let count = 0; // 记录请求次数
    // 定义一个异步函数_request，用于处理单个请求
    async function _request() {
      const i = index;
      const url = urls[index]; // 获取当前请求的url
      index++; // 更新下标，准备下一次请求
      try {
        const resp = await fetch(url);
        result[i] = resp;
      } catch (error) {
        result[i] = error;
      } finally {
        // 请求次数加1
        count++;
        // 如果所有请求都已完成，则解析Promise并返回结果
        if (count === urls.length) {
          resolve(result);
        }
        // 如果还有未完成的请求，则继续发起请求
        if (index < urls.length) {
          _request();
        }
      }
    }
    // 循环发起最多maxNum个请求
    for (let i = 0; i < Math.min(urls.length, maxNum); i++) {
      _request();
    }
  });
}

/**
 * 获取数据
 * @param urls 请求的url数组
 * @param maxAttempts 每个URL的最大请求次数
 * @param currentAttempts 当前已尝试的次数（递归使用）
 * @returns 返回Promise对象，resolve时返回解析后的JSON数据数组，reject时返回Error对象
 */
function fetchDataWithRetry(url, maxAttempts = 3, currentAttempts = 1) {
  return new Promise((resolve, reject) => {
    if (currentAttempts > maxAttempts) {
      return reject(new Error(`达到最大请求次数：${maxAttempts}`));
    }

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("响应不ok");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        return fetchDataWithRetry(url, maxAttempts, currentAttempts + 1);
      });
  });
}

function fetchData(urls, maxAttempts = 3) {
  return Promise.all(urls.map((url) => fetchDataWithRetry(url, maxAttempts)));
}
const urls = ["https://api1.com", "https://api2.com", "https://api3.com"];

// 最多请求三次 使用
fetchData(urls)
  .then((data) => {
    console.log(data); // 处理获取到的数据数组
  })
  .catch((err) => {
    console.error(err); // 处理错误
  });

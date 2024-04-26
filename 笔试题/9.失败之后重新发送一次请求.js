function fetchData(url, maxCount) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        if (res.status === 200) {
          resolve(res.json());
        } else {
          reject(new Error(`请求失败，状态码: ${res.status}`));
        }
      })
      .catch((err) => {
        if (maxCount > 0) {
          fetchData(url, maxCount - 1);
        } else {
          reject(new Error("请求失败", err));
        }
      });
  });
}

// https://api2.com mock 接口
// https://jsonplaceholder.typicode.com/todos/${1}  真实请求接口
fetchData(`https://jsonplaceholder.typicode.com/todos/${1}`, 1)
  .then((res) => {
    if (res) {
      console.log(res);
    }
  })
  .catch((err) => {
    console.error(err);
  });

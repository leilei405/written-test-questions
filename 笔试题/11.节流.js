/**
 * 节流函数
 * @param {Function} fn - 要节流的函数
 * @param {number} delay - 节流时间间隔（毫秒）
 * @returns {Function} - 节流后的函数
 */
function throttle(fn, delay) {
  let timerId = null;
  return function (...args) {
    if (timerId) {
      return;
    }

    timerId = setTimeout(() => {
      fn.apply(this, args);
      timerId = null;
    }, delay);
  };
}

window.addEventListener(
  "scroll",
  throttle(function () {
    console.log("scroll");
  }, 1000)
);

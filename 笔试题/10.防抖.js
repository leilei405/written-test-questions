/**
 * 防抖函数
 *
 * @param fn 需要防抖的函数
 * @param delay 延迟时间（毫秒）
 * @returns 返回防抖后的函数
 */
function debounce(fn, delay) {
  let timerId = null;

  return function (...params) {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      fn.apply(this, params);
    }, delay);
  };
}

// 使用防抖
window.addEventListener(
  "resize",
  debounce(function () {
    console.log("resize");
  }, 1000)
);

/**
 * 防抖函数
 * @param fn 需要防抖的函数
 * @param delay 延迟时间（毫秒）
 * @returns 返回防抖后的函数
 * @description hook版本
 */
// import React, { useState, useEffect } from "react";
// const useDebounce = (value, delay) => {
//   const [debounceValue, setDebounce] = useState(value);

//   useEffect(() => {
//     const timeId = setTimeout(() => {
//       setDebounce(value);
//     }, delay);

//     // 在组件卸载时清除定时器
//     return () => {
//       clearTimeout(timeId);
//     };
//   }, [value, delay]);

//   return debounceValue;
// };

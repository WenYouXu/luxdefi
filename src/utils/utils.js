export const addThousandSeparator = (num) => {
  return num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0;
};

export const require_ = (url) => {
  return new URL(`${url}`, import.meta.url).href;
};

export const numToString = (value) => {
  let res = "";
  let isNegative = false;
  if (value < 0) {
    isNegative = true;
    value *= -1;
  }

  if (value >= 1000000) {
    let result = (value / 1000000).toFixed(2);
    res = result.toString() + "M";
    return isNegative ? "-" + res : res;
  } else if (value >= 1000) {
    let result = (value / 1000).toFixed(2);
    res = result.toString() + "K";
    return isNegative ? "-" + res : res;
  } else {
    res = value.toString();
    return isNegative ? "-" + res : res;
  }
};

export function getUrlKey() {
  var url = window.location.href;

  // 提取路径参数
  let urlParams = url.split("?");
  var params; // 获取 "?" 后面的部分

  if (urlParams.length > 1) params = urlParams[1]; // 获取 "?" 后面的部分
  else return {};
  var paramArray = params.split("&"); // 将参数分割成数组

  // 创建一个对象来存储参数
  var paramObj = {};

  // 遍历参数数组，将参数和值存储到对象中
  paramArray.forEach(function (param) {
    var keyValue = param.split("=");
    var key = decodeURIComponent(keyValue[0]);
    var value = decodeURIComponent(keyValue[1]);
    paramObj[key] = value;
  });
  return paramObj;
}

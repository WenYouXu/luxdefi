export default {
  plugins: {
    "postcss-px-to-viewport": {
      viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度
      viewportUnit: "vw", // 指定需要转换成的视窗单位，建议使用vw
      unitPrecision: 5, // 指定`px`转换为视窗单位值的小数位数
      propList: ["*"], // 能转化为vw的属性列表
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位
      mediaQuery: false, // 允许在媒体查询中转换`px`
      // 其他配置...
    },
  },
};
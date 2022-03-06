/*
 * @Author: mulingyuer
 * @Date: 2022-02-13 22:47:00
 * @LastEditTime: 2022-03-06 21:53:25
 * @LastEditors: mulingyuer
 * @Description: webpack配置
 * @FilePath: \Typecho_Theme_JJ\webpack.config.ts
 * 怎么可能会有bug！！！
 */
import { Configuration } from "webpack";
import { merge } from "webpack-merge";
//配置
import baseConfig from "./webpack/webpack.base";
import devConfig from "./webpack/webpack.dev";
import prodConfig from "./webpack/webpack.prod";
// const path = require('path');
// const resolve = function (myPath) {
//   return path.resolve(__dirname, myPath);
// };

module.exports = () => {
  //环境变量
  const nodeEnv = process.env.NODE_ENV;
  //模式
  switch (nodeEnv) {
    case "development": //开发模式
      return merge<Configuration>(baseConfig, devConfig);
      break;
    case "production": //生产模式
      return merge<Configuration>(baseConfig, prodConfig);
      break;
    default:
      throw new Error(`未知的开发环境：${nodeEnv}`);
  }
};

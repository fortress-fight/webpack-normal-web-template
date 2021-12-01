/*
 * @Description: webpack 的变量管理
 * @Author: F-Stone
 * @Date: 2021-12-01 13:32:32
 * @LastEditTime: 2021-12-01 15:29:47
 * @LastEditors: F-Stone
 */
const {name: PROJECT_NAME} = require("../../package.json");

const HASH_NAME = false;
const HASH_NAME_RULE = HASH_NAME ? "[name].[contenthash:8]" : "[name]"

const IS_DEV_MODULE = process.env.NODE_ENV == "development";

module.exports = {
    HASH_NAME,
    HASH_NAME_RULE,
    IS_DEV_MODULE,
    PROJECT_NAME
}

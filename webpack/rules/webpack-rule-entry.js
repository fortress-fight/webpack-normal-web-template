/*
 * @Description: webpack rule 的入口文件
 * @Author: F-Stone
 * @Date: 2021-12-01 16:52:49
 * @LastEditTime: 2021-12-02 17:44:03
 * @LastEditors: F-Stone
 */
const { assetRules } = require("./webpack-rule-asset");
const { devStyleRules, proStyleRules } = require("./webpack-rule-style");
const { ejsRules } = require("./webpack-rule-template");

exports.WEBPACK_PUB_RULES = [...assetRules, ...ejsRules];
exports.WEBPACK_DEV_RULES = [...devStyleRules ];
exports.WEBPACK_PRO_RULES = [...proStyleRules ];
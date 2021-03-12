/**
 * @fileoverview 路由使用连字符-分割单词
 * @author zy
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "路由使用连字符-分割单词",
      category: "Fill me in",
      recommended: false,
    },
    //打开修复功能
    fixable: "code", // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
  },

  create: function (context) {
    let reg = /[(A-Z_]/;
    return {
      "VariableDeclaration > VariableDeclarator > ArrayExpression > ObjectExpression > Property": node => {
        // console.log(node, node.value.value, "node");
        // 属性名为 path，并且其对应的值包含大写字母 && _
        if (node.key.name === "path" && reg.test(node.value.value)) {
          // 只报错
          context.report({
            node,
            message: `禁止路径中有大写字母,或者下划线_,${node.value.value}`,
          });
        }
      },
    };
  },
};

/**
 * @fileoverview 路由使用连字符-分割单词
 * @author zy
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/vue-router"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6, // 默认支持语法为es5
  },
});
ruleTester.run("vue-router", rule, {
  // 正确使用的例子
  valid: [
    {
      code: `let a = [
        {
          path: 'common-workflsw-detail',
          name: 'commonWorkflowDetail',
          code: 30101,
        },
      ]`,
    },
  ],
  // 错误的例子
  invalid: [
    {
      code: `let a = [
        {
          path: 'common_workflswDetail',
          name: 'commonWorkflowDetail',
          code: 30101,
        },
      ]`,
      errors: [
        {
          message: "Fill me in.",
          type: "Me too",
        },
      ],
    },
  ],
});
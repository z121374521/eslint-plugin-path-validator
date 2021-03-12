# eslint-plugin-path-validator

vue 路由规范

## 实现

规范路由文件的 path 中禁止出现驼峰和\_，统一使用连字符 -

## 安装

首先需要安装 [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

接下来，安装 `eslint-plugin-path-validator`:

```
$ npm install eslint-plugin-path-validator --save-dev
```

## 使用

将“eslint-plugin-path-validator”添加到“.eslintrc”配置文件的 overrides 部分。您可以省略`eslint-plugin-`前缀：

```json
{
  "overrides": [
    {
      // 指定目录使用自定义规则校验，路径采用glob格式
      "files": ["**/src/router/modules/*.js"],
      // 自定义插件
      "plugins": ["path-validator"],
      // 规则
      "rules": {
        "path-validator/vue-router": 2
      }
    }
  ]
}
```

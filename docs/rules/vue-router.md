# 路由使用连字符-分割单词 (vue-router)

## 规则详细信息

校验路由文件path对应的URl使用连字符 - 来分割单词，禁止使用驼峰 或者 _

错误代码实例:

```js
const businessEntranceRouter = [
  {
    path: 'busine_entrance',
    name: 'BusinessEntrance',
    code: 301,
    component: () => import('@/views/business-entrance/business-manager.vue'),
    meta: {
      ...meta,
      searchable: true,
      title: '业务统一管理',
      tags: ['业务类'],
    },
  },
  {
    path: 'busineEntrance',
    name: 'BusinessEntrance',
    code: 301,
    component: () => import('@/views/business-entrance/business-manager.vue'),
    meta: {
      ...meta,
      searchable: true,
      title: '业务统一管理',
      tags: ['业务类'],
    },
  },
]
```

正确代码示例:

```js

const businessEntranceRouter = [
  {
    path: 'busine-entrance',
    name: 'BusinessEntrance',
    code: 301,
    component: () => import('@/views/business-entrance/business-manager.vue'),
    meta: {
      ...meta,
      searchable: true,
      title: '业务统一管理',
      tags: ['业务类'],
    },
  },
  {
    path: 'busine-entrance',
    name: 'BusinessEntrance',
    code: 301,
    component: () => import('@/views/business-entrance/business-manager.vue'),
    meta: {
      ...meta,
      searchable: true,
      title: '业务统一管理',
      tags: ['业务类'],
    },
  },
]

```

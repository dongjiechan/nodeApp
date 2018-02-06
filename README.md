# note-x

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
## 关于router痛点
``` bash
1、	如何传参？两种方法

（1）	直接在定义路由地址的时候，{ path: '/index/:id ', name: Index, component: Index}，使用时，如果用route-link的话,在 :to = '/index/123' 即可，或者this.route.push('/index/123');有点直观简洁，适用于编辑传id的，缺点:在多参数时先得累赘。
（2）	This.route.push({ path:  ’/index’, name:  ‘Index’, params:  { id: 1234 }})，这样写可以使用this.route.params来取得参数，支持多参数
```
## 关于vuex
``` bash
每次开始项目都要投入一定时间了解vuex数据传递的流程。
官方文档说明它是一个状态管理机制，如果存在复杂的状态管理就要用到，如果项目单一，使用这个反而累赘。接下来的例子是不涉及api板块，单单拿出vuex的架构讲解
 
简单来说，action是做校验的层，mutation是提交数据的层，state是状态管理机制，先看下官网的例子
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})
新建一个store.js，把Index模块的状态仓库处理代码引入到modules
照着顺序建立index.js， mutation_type.js， mutations.js，actions.js,
Index.js里面包括了
state,
mutations,
actions,
getters
在mutation_type明明各种提交数据的名字，最好是大写，常量用大写比较直观，然后在mutation中引入，接着，写一个空白的函数，action也要用到这个，接着action内写着接收view传递过来的数据，进行校验，异步请求等数据处理操作，view中使用store.dispatch()，简单来说，平常在vue方法中处理数据的步骤挪到action里面做了，接着用commit调起mutation，在里面做数据返回操作
commit=>mutations,用来触发同步操作的方法。
dispatch =>actions,用来触发异步操作的方法。
```
## Eg : 
``` bash
Actions:  ADDEVENT: ({ commit }, params) => commit(ADDEVENT, params),
Mutations:  [ADDEVENT]: (states, obj) => {...}
```
乱讲了一堆，希望以后自己不要再踩到这个坑啦



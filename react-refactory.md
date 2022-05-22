# PC新版重構及優化

## 重構評估

---

## React 專案架構評估

> **src :**  webpack 給編譯的主要檔案夾
>
>> **assets :**: 存放靜態資源 **=>** 外部引入無重構需求
>>
>> **components :** 個頁面使用的單位元件 **=>** 需要切換成 .vue 的 component
>>
>> **config :** 常量參數 **=>** formatLobbyInput.js 回傳 template 需做調整
>>
>> **core :** API、WS、CHAT 核心 .js **=>** 單純更動路徑
>>
>> **fonts :** 存放靜態字形資源 **=>** 外部引入無重構需求
>>
>> **models :** API、WS、CHAT、Store 模型 **=>** Store 需重構成 Vuex
>>
>> **pages :** Router 渲染的頁面 **=>** 需要切換成.vue 的 component
>>
>> **router :** 設置 Router path 對應元件 **=>** 重構成 vue-router
>>
>> **themes :** antd 樣式客製化 **=>** 外部引入無重構需求
>>
>> **utils :** 共用工具包 **=>** 外部引入無重構需求
>>
>> **index.js :** dva 宣告處 **=>** 無重構需求
>>
>> **index.less :** less 引入口 **=>** 外部引入無重構需求

---

## Vue 專案架構整合

> **src :**  webpack 給編譯的主要檔案夾。
>
>> **assets :**: 存放靜態資源 **=>** 直接複製 React 專案
>>
>> **components :** 個頁面使用的單位元件 **=>** 重構並優化成 .vue 語法
>>
>> **config :** 常量參數 **=>** formatLobbyInput.js 回傳 template 需做調整
>>
>> **fonts :** 存放靜態字形資源 **=>** 直接複製 React 專案 *同路徑資料夾*
>>
>> **router :** 設置 Router path 對應元件 **=>** 元件式宣告變成指定路徑掛載
>>
>> **server :** 網路請求核心 + 模型 **=>** 整合 core ( *原路徑 src/core* ) + model ( *原路徑 src/models* )
>>
>> **store :** Vuex 全局 state 管理 **=>** 重構 sage 成 Vuex 架構 ( *原路徑 src/models* )
>>
>> **themes :** antd 樣式常量參數 **=>** 直接複製 React 專案 
>>
>> **utils :** 共用工具包 **=>** 直接複製 React 專案 
>>
>> **views :** Router 渲染的頁面 **=>** 重構並優化成 .vue 語法 ( *原路徑 src/pages* )
>>
>> **main.js :** webpack 打包入口 **=>** 在此設定全局參數及產生 Vue 實例
>>
>> **mainPage.vue :** 所有頁面的總容器 **=>** React 的 mainPage.js 重構成 .vue 語法 ( *原路徑 src/pages/mainPage.js* )
>>
>> **index.less :** 全局 antd 樣式客製化 **=>** 直接複製 React 專案

---

## Vue CLI 建置

#### CLI 參數設定
npm 全局安裝 vue/cli 套件
```
$ npm install -g @vue/cli
```
創建專案
```
$ vue create huobao-pc-vue
```
你会被提示选取一个 preset，选“手动选择特性”来选取需要的特性。

- [x] Babel
- [x] Router
- [x] Vuex
- [x] CSS Pre-processors (之後會問你語言選擇 less)

完成設定後 vue/cli 就會幫你架設好初始環境。詳細資訊請參考 [Vue CLI 建置](https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create)

#### antd 引入
在 Vue 使用的 antd npm 套件叫做 ant-design-vue

```
$ npm install ant-design-vue --save
```

#### babel.config.js 設定

運行 antd 如果加载了全部的 antd 组件的样式（对前端性能是个隐患）。
此时我们需要对 vue-cli 的默认配置进行自定义。[參考 Ant Design of Vue 官網](https://www.antdv.com/docs/vue/use-with-vue-cli-cn/)

babel-plugin-import 是一个用于按需加载组件代码和样式的 babel 插件
在終端機上先安裝套件

```
$ npm install babel-plugin-import --save-dev
```
然後去 babel.config.js 檔案做設定

```javascript
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }
    ]
  ]
}
```
在 src/main.js 里全局添加模块。

```javascript
  // 引入 antd 組件
  import { Button } from 'ant-design-vue';

  //  全局註冊 antd 組件
  Vue.component(Button.name, Button)
```
或是在各別元件添加模块。

```javascript
  // 引入 antd 組件
  import { Button } from 'ant-design-vue';
  
  //  各別註冊 antd 組件
  Vue({
    //  如果 template 是使用 render JSX 下面程式碼可以忽略
    components: {
      Button,
    },
  })
```

#### vue.config.js 設定
如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。这个问题可以通过 vue.config.js 中的 devServer.proxy 选项来配置。[參考 Vue CLI 官網](https://cli.vuejs.org/zh/config/#devserver-proxy)

我們這邊就直接複製 React 的 .webpackrc 參數至 vue.config.js，整合如下。
```javascript
module.exports = {
  devServer: {
    proxy: {
      '/cn/cgi/api': {
        "target": "https://wwwspeeder.bwit.cc",
        "changeOrigin": true
      },
      '/config.js': {
        "target": "https://wwwspeeder.bwit.cc",
        "changeOrigin": true
      }
    }
  }
}
```
關於 antd less 我們裡面有使用到計算屬性，樣式加載這邊就還需要補上。
```javascript
css: {
  loaderOptions: {
    less: {
      //  允許在 less 里計算屬性
      javascriptEnabled: true
    },
  }
}
```


---

## 重構流程

### vue内模块的顺序

重構成 vue 文件須參照以下的模塊順序
```javascript
//  component.vue <script> 部分
export default {
  name: 'XXX',
  mixin: [...],
  components: {...},
  props: {...},
  data: {...},
  computed: {...},
  watch: {...},
  // 生命周期
  mounted() {...},
  methods: {...},
  //  JSX render 函式
  render() {...},
}
```
使用 `style-resources-loader` 让全局变量直接可用，去除每个组件内样式对 normal.less 的引用
```javascript
//  component.vue <style> 部分
<style lang="less">

// 已經全局引入 normal.less的引用
@import '~@/themes/normal.less';

.open-lhc-ball {
  display: flex;
  flex-direction: column;
  justify-content: center;
  ...
}


</style>
```

### server 路徑調整
服務相關的 JS 路徑調整

### store 重構
redux-saga 切換成 Vuex 格式，以下是 store 資料夾結構。
> **store** 
>> **index.js :** Vuex 實例宣告 **=>** 在此引入全部 modules
>>
>> **modules :**: 各別功能模块 **=>** 對應 React 專案的(src/models/store)

```javascript
// 路徑 src/store/index.js
import Vue from 'vue'
import Vuex from 'vuex'

//  引入各別 modules
import activity from './modules/activity'
import chat from './modules/chat'
...
...

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    activity,
    chat,
    ...,
    ...,
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
```

#### namespaced

統一為`ture`，檔案名稱相當於 dva models 的 `namespace: '名稱'` 屬性

#### state

直接複製 React 專案的各模块里的 `state` 屬性

Vuex 跟  React-saga 傳值有些許不一樣，這邊說明下同步及非同步差異。


#### 同步 mutations

相當於 dva models 的 `reducers` 屬性

```javascript
// React-saga
reducers: {
  setPlayMethods(state, action) {
    return {
      ...state,
      playMethods: action.playMethods
    }
  },
}
```

```javascript
// Vuex
mutations: {
  //  第二個參數為 payload ，如果是多重值 建議使用 Object 傳進來
  setMethods(state, methods) {
    // Vuex 可直接對 state 賦值
    state.methods = methods
  },
}
```
#### 非同步 actions

相當於 dva models 的 `effects` 屬性

```javascript
// React-saga
effects: {
  *getCategories (payload, { call, put, select }) { 
    const data = yield call(api.lottery.getCategory, payload)
    yield put({ type: 'setCategories', data: data })
  }
}
```

```javascript
// Vuex
actions: {
  // 從 generator 改成 async/await
  async getCategories (context, payload) { 
    const data = await api.lottery.getCategory(payload)

    // 這邊要注意在 Vuex 里呼叫 mutations 使用 context.commit('XXX', payload)
    context.commit('setCategories', data)

    // 呼叫 actions 使用 await context.dispathc('XXX', payload)
    await context.dispatch('setCategories', data)
  },
}
```

> **注意:** 组件中很多地方使用 `mapStateToProps` 映射，需要改为 `mapState`。

> **注意:** 在各組件里使用 `mapState` 如果需要計算到該組件實例的值，必须使用常规函数，不然參照不到 `this` 會報錯。

```javascript
computed: {
  ...mapState({
    isFavorite: ({ lottery }) => lottery.favorite.find(item => {
      // 在 箭头函数 裡面使用到 this.XXX 會報錯
      return item.item_code === this.$route.params.code
    }) != null,

    // 應該要改成使用常规函数
    isFavorite ({ lottery }) { 
      return lottery.favorite.find(item => {
        return item.item_code === this.$route.params.code
      }) != null
    }
  })
},
```

### router 重構
react-router 重構成 vue-router，並掛載相關頁面元件。

#### 导航-声明式

組件 NavLink 或是 Link 改成 router-link

```javascript
// React
<NavLink to={`/open/${this.props.code}`}>详情</NavLink>
```
```html
<!-- Vue -->
<router-link :to="`/open/${code}`">详情</router-link>
```
#### 导航-编程式

```javascript
// React
this.props.history.push('/chat/redbao/my/2')

// Vue
this.$router.push({ path: '/chat/redbao' })
```
#### 数据获取

待補充


### veiws 整合 & components 元件整合

#### 单文件组件-屬性順序
再遷移過程中我們會把 React 的 `.js` 及 `.less` 文件整合成為 `.vue` 文件，此時 `.vue` 組件請參照以下的順序排列 选项 / 数据

>1.  **name**
>2.  **mixins**
>3.  **components**
>4.  **props**
>5.  **data**
>6.  **computed**
>7.  **watch**
>8.  **各生命週期** ( 如: mounted, created )
>9.  **methods**
>10. **render** ( 使用 JSX 時的选项 )

#### import引入
只有下属几种情况需要在vue文件中额外import
- antd-vue按需加载的组件
- moment等第三方插件
- 自定义组件
至于原来的api，可以再main.js中绑定到vue原型上，组件中直接this.$api的方式使用

#### 生命周期
>componentDidMounted -> mounted

>comonentWillMount -> beforeMount

>componentWIllUnmount -> beforeDestroy

>componentDidUmounted -> destroyed

>UNSAFE_compenentWillReceiveProps -> watch

#### render
许多在render函数中return前定义的临时变量均可以定义到computed中去

#### props
react项目中有些用了prop-type，有些没有，在迁移到vue时，每个组件的props均需要严格编写为{ type: xx, default/required: xx }模式

#### data
和state基本一致

#### setState
直接赋值

#### components

#### 样式和less
样式保留之前的类bem的class命名方式，不需要使用scoped
将less全局变量全局应用，从而不需要每个文件中引用

#### Vue JSX 使用注意事項
在 Vue 中使用 JSX 语法，它可以让我们回到更接近于 React 的语法，這裡使用到 Babel @vue/babel-preset-jsx 插件， Vue 已經內建好的無須額外做設置。 [Vue 官網 - JSX](https://cn.vuejs.org/v2/guide/render-function.html#JSX)
```javascript
<script>
export default {
  name: '.....',
  data() {....},
  //  上面是基本設置

  //  render 是在 Vue 使用 JSX 的屬性名稱
  render() {
    return (
      <div>
        <div id="app">
          <div  id="nav">
            <router-link to="/">MainPage</router-link> |
            <router-link to="/about">About</router-link>
          </div>

          {/* vue-router */}
          <router-view/>
        </div>
      </div>
    )
  },
}
</script>
```

為了比較跟 React 的差異，以下我們列出 Vue 使用 JSX 時可能會遇到的情況。

- 取代 `v-if` 及 `v-for` 使用 三元判斷 `? :` 及 `array.map`，跟原本 React 使用方式一致。

- props.children 在 Vue JSX 行為 `this.props.children` => `this.$slots.default`

```javascript
  // React JSX
  return (
    <div>
      { this.props.children }
    </div>
  )

  // Vue JSX
  return (
    <div>
      { this.$slots.default }
    </div>
  )
```

- `className` 要改成 `class`

```javascript
  // React JSX
  <div className={this.props.myClassName}></div>

  // Vue JSX
  <div class={this.myClassName}></div>
```

- style 如果是變數傳值須注意 `style={this.style}` 會報錯，要改成不一樣名稱 `style={this.propStyle}`

```javascript
  // React JSX
  <div style={this.props.style}></div>

  // Vue JSX 會報錯
  <div style={this.style}></div>

  // Vue JSX 正確
  <div style={this.propStyle}></div>
```

- style 物件傳值在 React 寫法的純數字在 Vue JSX 要改成加上 加上 `px` 的字串，如下。

```javascript
  // React JSX
  <div style={{margin: 10}}></div>

  // Vue JSX
  <div style={{margin: '10px'}}></div>
```

- 子元件傳遞事件給父元件 `this.props.onClick && this.props.onClick(e)` => `this.$emit('onClick', e)`
```javascript
  // React 
  onClick = (e) => {
    this.props.onClick && this.props.onClick(e)
  }
  render() {
    return (
      <div onClick={this.onClick}>
        // 內容...
      </div>
    )
  }
```
```javascript
  // Vue 
  methods: {
    onClick(e) {
      this.$emit('onTestClick', e)
    },
  },
  render() {
    return (
      <div onClick={this.onClick}>
        // 內容...
      </div>
    )
  }
```
- 父子元件使用 props 傳遞事件時可 直接指定函式 或是用 箭頭函式 `() => {}` 

```javascript
  // Vue JSX 父級
  render() {
    return (
      <div>
        {/* 直接指定函式 */}
        <Button testClick={this.testClick}>Componenet Test</Button>
        {/* 箭頭函式 */}
        <Button testClick={('接收參數') => this.testClick('接收參數')}>Componenet Test</Button>
      </div>
    )
  }
```
```javascript
  // Vue JSX 子級
  props:{
    testClick: Function
  }
  methods: {
    onClick('接收參數') {
      this.testClick('接收參數')
    }
  }
```

- 有時候 props 開頭為 on 時傳遞事件會變成 undefined ，請盡量避免使用 on 開頭命名 porps 事件。
```javascript
  // 這樣子元件 Button 接收到 onHide >> undefined
  <Button onHide={() => { console.log('123') }}>Modal Test</Button>

  // 請盡量避免使用 on 開頭命名 porps 才能正常收到值
  <Button doHide={() => { console.log('123') }}>Modal Test</Button>
```

- 如果要使用 `$emit('testClick')` 觸發父級事件時，要寫成 `vOn:testClick`

```javascript
  // Vue JSX
  render() {
    return (
      <div>
        {/* $emit 觸發事件時 onTestClick 接受不到 */}
        <Button testClick={this.onTestClick}>Componenet Test</Button>
        
        {/* 要寫成 vOn:onTestClick */}
        <Button vOn:testClick={this.onTestClick}>Componenet Test</Button>
      </div>
    )
  }
```

- HTML 事件名稱大小寫不一樣，以下統計發生狀況為 React 後者為 Vue

> onMouseEnter >> onMouseenter
> onMouseLeave >> onMouseleave

- 目前測試過 on 原生事件，key 類型的鍵盤事件如果不是在 input 元素被監聽會失效，如: keyup、keydown、keypress。

- 如果要動態注入HTML `dangerouslySetInnerHTML={{ __html: XXX }}` 要改成 `domPropsInnerHTML={html}`

- 目前編輯器上找不到 Vue JSX 的  sinppets ，相關快捷鍵也無作用 例: `{/* XX */}` 需要自己寫


要了解更多关于 Vue JSX 如何映射到 JavaScript，请阅读[使用文档](https://github.com/vuejs/jsx#installation)。

- Vue JSX 不支援 `{...props}` 展開屬性寫法

```javascript
  // Vue JSX
  render() {
    const props = {type: 1, color: 'red'}
    return (
      <div>
        {/* 不會報錯但是屬性不會被傳遞進去 */}
        <Button {...props}>Modal Test</Button>
      </div>
    )
  }
```

- React 在使用 props 及 state 上面命名屬性如果重複，在 Vue 全部屬性都是接在 this 之後，
所以如果是衝突到命名，我這邊會先將 props 進來或是 Vuex 進來的屬性加個前綴 如下例
`this.props.nums` => `this.propNums`
`this.state.nums` => `this.nums`

- React 組件的屬性用了很多類似 _XXX 的命名， 在使用 Vux JSX 編譯時 `_` 符號會報錯請注意，還有在 data 裡面宣告資料時開頭也不能用 `_`，不會報錯但是會 undefined。

```javascript
  // Vue JSX 報錯
  <BetGpc _media={this._media} />

  // 正確
  <BetGpc media={this._media} />
```

---

- antd form 目前只用方式為在組件 data 里宣告 form: Form.createForm(this, {})
```javascript
  import { Form } from 'ant-design-vue'

  // Vue data 屬性
  data () {
    return {
      form: Form.createForm(this, {})
    }
  },

```

> **注意** antd form `getFieldDecorator` 第二個參數 `options.validateTrigger` 在 React 事件名稱是 `'onChange'`，但是在 Vue 是 `'change'` 

- `qrcode.react` 套件替換成 `qrcode.vue` 詳情请阅读 [qrcode.vue](https://github.com/scopewu/qrcode.vue/blob/HEAD/README-zh_cn.md)

- `echarts-for-react` 套件替換成 `vue-echarts` 詳情请阅读 [vue-echarts](https://github.com/ecomfe/vue-echarts/blob/HEAD/README.zh_CN.md)

- `react-color` 套件替換成 `vue-color` 詳情请阅读 [vue-color](https://github.com/xiaokaike/vue-color#readme)

- `react-countup` 套件替換成 `vue-countup-v2` 詳情请阅读 [vue-countup-v2](https://github.com/xlsdg/vue-countup-v2)

- `react-copy-to-clipboard` 套件替換成 components/common/CopyToClipboard 共用元件，使用 `copy-to-clipboard` 做封裝，詳情请阅读 [copy-to-clipboard](https://www.npmjs.com/package/copy-to-clipboard)

- `React.Fragment` 使用 `vue-fragment` 替代 詳情请阅读 [vue-fragment](https://github.com/y-nk/vue-fragment#readme)

- `react-image-crop` 使用 `cropperjs` 替代 詳情请阅读 [cropperjs](https://github.com/fengyuanchen/cropperjs#getdatarounded)

- CashPassword 組件在生成DOM容器地方分開成 index.js 文件，監聽 keyup 事件無效，目前先使用 document 監聽再移除，如下待測試。

```javascript
  // React 寫法 
  <div onKeyUp={this.handleInput}>

  // Vue 寫法  還需要驗證實際能不能運行
  watch: {
    // modal 關閉時移除鍵盤監聽
    visible (val) {
      if (!val) {
        document.removeEventListener('keyup', this.handleInput)
      }
    }
  },
  mounted () {
    // modal 開啟時監聽鍵盤事件
    document.addEventListener('keyup', this.handleInput)
  },
```

### 這邊紀錄一下需要轉換或新解法的問題

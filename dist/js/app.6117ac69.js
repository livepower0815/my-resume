(function(t){function s(s){for(var i,l,r=s[0],n=s[1],o=s[2],f=0,v=[];f<r.length;f++)l=r[f],e[l]&&v.push(e[l][0]),e[l]=0;for(i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);d&&d(s);while(v.length)v.shift()();return c.push.apply(c,o||[]),a()}function a(){for(var t,s=0;s<c.length;s++){for(var a=c[s],i=!0,r=1;r<a.length;r++){var n=a[r];0!==e[n]&&(i=!1)}i&&(c.splice(s--,1),t=l(l.s=a[0]))}return t}var i={},e={app:0},c=[];function l(s){if(i[s])return i[s].exports;var a=i[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=i,l.d=function(t,s,a){l.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,s){if(1&s&&(t=l(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var i in t)l.d(a,i,function(s){return t[s]}.bind(null,i));return a},l.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(s,"a",s),s},l.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},l.p="/my-resume/dist/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],n=r.push.bind(r);r.push=s,r=r.slice();for(var o=0;o<r.length;o++)s(r[o]);var d=n;c.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},1263:function(t,s,a){t.exports=a.p+"img/vue.c5439280.png"},2261:function(t,s,a){t.exports=a.p+"img/nodejs.36700bee.png"},2407:function(t,s,a){t.exports=a.p+"img/firebase.a6c26916.png"},"3aa6":function(t,s,a){t.exports=a.p+"img/aboutme.5de1e4b4.jpg"},"3d2d":function(t,s,a){},"3f65":function(t,s,a){t.exports=a.p+"img/javascript.7d1ebefa.png"},"56d7":function(t,s,a){"use strict";a.r(s);var i=a("2b0e"),e=a("f13c"),c=a.n(e),l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],n=(a("5c0b"),a("2877")),o={},d=Object(n["a"])(o,l,r,!1,null,null,null);d.options.__file="App.vue";var f=d.exports,v=a("8c4f"),p=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("nav",{staticClass:"navbar navbar-expand-lg myNav"},[t._m(0),t._m(1),i("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarTogglerDemo03"}},[i("ul",{staticClass:"navbar-nav ml-auto mt-2 mt-lg-0"},[i("li",{staticClass:"nav-item"},[i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about",expression:"'#about'"}],staticClass:"nav-link",class:{active:"about"==t.navActive},attrs:{href:"#about"}},[t._v("About")])]),i("li",{staticClass:"nav-item"},[i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#skill",expression:"'#skill'"}],staticClass:"nav-link",class:{active:"skill"==t.navActive},attrs:{href:"#skill"}},[t._v("Skills")])]),i("li",{staticClass:"nav-item"},[i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#works",expression:"'#works'"}],staticClass:"nav-link",class:{active:"works"==t.navActive},attrs:{href:"#works"}},[t._v("Projects")])]),i("li",{staticClass:"nav-item"},[i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#experience",expression:"'#experience'"}],staticClass:"nav-link",class:{active:"experience"==t.navActive},attrs:{href:"#experience"}},[t._v("Experience")])]),i("li",{staticClass:"nav-item"},[i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact",expression:"'#contact'"}],staticClass:"nav-link",class:{active:"contact"==t.navActive},attrs:{href:"#contact"}},[t._v("Contact")])])])])]),i("div",{staticClass:"h100 top-img text-white d-flex align-items-center",style:{backgroundPosition:t.bgImgScroll}},[t._m(2)]),i("div",{attrs:{id:"about"}},[i("div",{staticClass:"container"},[i("h1",{staticClass:"myTitle-white"},[t._v("About Myself")]),i("div",{staticClass:"row aboutHide",class:{active:t.aboutShow}},[t._m(3),t._m(4)])])]),i("div",{attrs:{id:"skill"}},[i("div",{staticClass:"container"},[i("h1",{staticClass:"myTitle-white"},[t._v("Skills")]),i("div",{staticClass:"d-flex justify-content-center pb-5"},[i("div",{staticClass:"btn-group btn-group-lg",attrs:{role:"group","aria-label":"Basic example"}},[i("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(s){t.skillDispaly="gallery"}}},[i("i",{staticClass:"fas fa-grip-horizontal fa-2x"})]),i("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:function(s){t.skillDispaly="list"}}},[i("i",{staticClass:"far fa-list-alt fa-2x"})])])]),"list"==t.skillDispaly?i("div",{staticClass:"row d-flex justify-content-center"},[t._m(5)]):t._e(),"gallery"==t.skillDispaly?i("div",{staticClass:"row"},[t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17)]):t._e()])]),i("div",{attrs:{id:"works"}},[i("div",{staticClass:"container"},[i("h1",{staticClass:"myTitle-blue"},[t._v("Projects")]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"transform_3d"},[i("div",{staticClass:"myCard"},[i("div",{staticClass:"myCard_img"},[i("a",{attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.openModal(t.works[0])}}},[i("img",{staticClass:"img-fluid",attrs:{src:a("692b"),alt:"img"}})])])]),i("h3",{staticClass:"text-center py-4"},[t._v("猴寶拍拍-電子商務")])])]),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"transform_3d"},[i("div",{staticClass:"myCard"},[i("div",{staticClass:"myCard_img"},[i("a",{attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.openModal(t.works[1])}}},[i("img",{staticClass:"img-fluid",attrs:{src:a("5e73"),alt:"img"}})])])]),i("h3",{staticClass:"text-center py-4"},[t._v("夢想家 Blog")])])]),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"transform_3d"},[i("div",{staticClass:"myCard"},[i("div",{staticClass:"myCard_img"},[i("a",{attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.openModal(t.works[2])}}},[i("img",{staticClass:"img-fluid",attrs:{src:a("9287"),alt:"img"}})])])]),i("h3",{staticClass:"text-center py-4"},[t._v("BMI 計算器")])])]),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"transform_3d"},[i("div",{staticClass:"myCard"},[i("div",{staticClass:"myCard_img"},[i("a",{attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.openModal(t.works[3])}}},[i("img",{staticClass:"img-fluid",attrs:{src:a("9fcc"),alt:"img"}})])])]),i("h3",{staticClass:"text-center py-4"},[t._v("會議室預約系統")])])]),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"transform_3d"},[i("div",{staticClass:"myCard"},[i("div",{staticClass:"myCard_img"},[i("a",{attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.openModal(t.works[4])}}},[i("img",{staticClass:"img-fluid",attrs:{src:a("b7a2"),alt:"img"}})])])]),i("h3",{staticClass:"text-center py-4"},[t._v("CSS 貪食蛇")])])]),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"transform_3d"},[i("div",{staticClass:"myCard"},[i("div",{staticClass:"myCard_img"},[i("a",{attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.openModal(t.works[5])}}},[i("img",{staticClass:"img-fluid",attrs:{src:a("5f23"),alt:"img"}})])])]),i("h3",{staticClass:"text-center py-4"},[t._v("戰船遊戲")])])])])])]),i("div",{staticClass:"d-none"},t._l(t.works,function(t,s){return i("img",{key:s,attrs:{src:t.imgUrl,alt:""}})}),0),i("div",{staticClass:"modal fade",attrs:{id:"worksModal",tabindex:"-1",role:"dialog"}},[i("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[i("div",{staticClass:"modal-content myCard_content"},[i("div",{staticClass:"modal-header border-0"},[i("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.works_modal.title))]),t._m(18)]),i("div",{staticClass:"modal-body"},[i("img",{staticClass:"img-fluid",attrs:{src:t.works_modal.imgUrl,alt:"img"}}),i("ul",{staticClass:"mt-3"},t._l(t.works_modal.content,function(s,a){return i("li",{key:a,staticClass:"py-2"},[t._v(t._s(s))])}),0)]),i("div",{},[i("div",{staticClass:" text-center m-3 pb-4"},[i("a",{staticClass:"goToWeb rounded-pill",attrs:{href:t.works_modal.href,target:"_blank"}},[t._v("點擊前往作品網頁")])])])])])]),i("div",{attrs:{id:"experience"}},[i("div",{staticClass:"container"},[i("h1",{staticClass:"myTitle-white"},[t._v("Experience")]),t._m(19),t._m(20),t._m(21),i("div",{staticClass:"row d-flex justify-content-center py-4"},[t._m(22),i("div",{staticClass:"col-md-8"},[i("div",{staticClass:"exContent text-white"},[t._m(23),t._m(24),t._m(25),i("P",[t._v("依照商品的流通數量、出貨頻率等來規劃倉庫存放庫位，試著讓空間使用彈性最大化。協力分貨、包裝、貼標、改包裝、組裝、退貨處理。")])],1)])]),t._m(26)])]),i("div",{style:{backgroundPosition:t.contactScroll},attrs:{id:"contact"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row d-flex justify-content-center"},[i("div",{staticClass:"col-md-6 text-center text-white"},[i("div",{staticClass:"contact_card",class:{active:t.contactShow}},[i("h1",{staticClass:"py-4"},[t._v("Contact Me")]),t._m(27),i("h3",{staticClass:"py-3"},[t._v("宏宇 ( Kerry )")]),t._m(28),t._m(29),t._m(30),t._m(31),t._m(32),t._m(33)])])])])]),t._m(34)])},m=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("button",{staticClass:"navbar-toggler text-white",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo03"}},[a("span",[a("i",{staticClass:"fas fa-list-ul"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-feather-alt"}),t._v(" Kerry Resume")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6  d-flex justify-content-center"},[a("div",{staticClass:"imgHide"},[a("div",{staticClass:"img-profile"})])]),a("div",{staticClass:"col-md-6 d-flex align-items-md-center justify-content-center"},[a("div",{staticClass:"titleHide mx-md-5"},[a("div",{staticClass:"top-content text-center"},[a("h1",{staticClass:"text_effect pb-3"},[t._v("Hello I'm Kerry ")]),a("h4",{staticClass:"text_effect py-2"},[t._v("這世上沒有困難的事情")]),a("h4",{staticClass:"text_effect py-2"},[t._v("只要有熱誠跟興趣")]),a("h4",{staticClass:"text_effect py-2"},[t._v("就能維持自己向前的動力")])])])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"col-md-6"},[i("img",{staticClass:"img-fluid myShadow rounded my-3",attrs:{src:a("3aa6"),alt:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-md-6 d-flex align-items-center"},[a("div",{staticClass:"p-4 my-3 bgWhite"},[a("p",[t._v("Hello 您好，我叫做 陳宏宇 ( Kerry )")]),a("p",[t._v("2017年開始為自己定了前端的職涯方向，")]),a("p",[t._v("這段期間由於家庭因素的關係只能利用下班時間去做線上學習，")]),a("p",[t._v("目前已能獨立以 Vue.js & Node.js 架設商業的金流網頁。")]),a("p",[t._v("努力研究各種技術並整合使用，")]),a("p",[t._v("在不斷的追求、不斷的學習、不斷的創作的過程中，")]),a("p",[t._v("看到他人對於我的作品展現出笑容，")]),a("p",[t._v("這成就感使我覺得人生無比富有。")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-md-8 text-white skillList"},[a("h3",[t._v("前端(Front-end)")]),a("ul",[a("li",[a("b",[t._v("Vue.js")]),t._v(" - data 雙向綁定、模板元件化、 SPA 單頁式應用、Router、Vuex")]),a("li",[a("b",[t._v("Bootstrap")]),t._v(" - flexbox 網格、RWD 自適應排版")]),a("li",[a("b",[t._v("JavaScript")]),t._v(" - 熟悉 DOM 模型、this、閉包、Prototype、AJAX 等基本概念")]),a("li",[a("b",[t._v("jQuery")]),t._v(" - 為網頁添加具互動性的效果")]),a("li",[a("b",[t._v("HTML/CSS")]),t._v(" - 能撰寫語意化標籤、排版,SASS 預處理器使用")])]),a("h3",[t._v("後端(Back-end)")]),a("ul",[a("li",[a("b",[t._v("Node.js")]),t._v(" - NPM 套件使用、express.js 架設後端邏輯、EJS 樣板使用")]),a("li",[a("b",[t._v("Firebase")]),t._v(" - API 整合使用、雲端 Data 存放、會員資料管理及驗證")])]),a("h3",[t._v("前端(Other)")]),a("ul",[a("li",[a("b",[t._v("Webpack")]),t._v(" - 轉換 ES6、SASS、BABEL 檔案，打包網站")]),a("li",[a("b",[t._v("Git")]),t._v(" - 透過 Github 進行團隊協作、Github-Pages 前端部署、Heroku 後端部署")]),a("li",[a("b",[t._v("ES6")]),t._v(" - 了解 Promise 非同步處理、解構賦值、其餘參數等概念")]),a("li",[a("b",[t._v("Photoshop")]),t._v("  - 圖片去背、切版、調色處理")]),a("li",[t._v("使用搭配 MVC、MVVM 開發風格")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[i("div",{staticClass:"flip-card"},[i("div",{staticClass:"flip-card-inner"},[i("div",{staticClass:"flip-card-front"},[i("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:a("6d2e"),alt:"Avatar"}})]),i("div",{staticClass:"flip-card-back"},[i("h2",[t._v("HTML")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" 善用語意化命名結構")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" SVG 繪圖")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" SEO 搜尋優化")])])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[i("div",{staticClass:"flip-card"},[i("div",{staticClass:"flip-card-inner"},[i("div",{staticClass:"flip-card-front"},[i("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:a("8858"),alt:"Avatar"}})]),i("div",{staticClass:"flip-card-back"},[i("h2",[t._v("CSS")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" SASS 預處理器")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" RWD 手刻 breakpoints")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" Flex / Grid 排版")])])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[i("div",{staticClass:"flip-card"},[i("div",{staticClass:"flip-card-inner"},[i("div",{staticClass:"flip-card-front"},[i("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:a("3f65"),alt:"Avatar"}})]),i("div",{staticClass:"flip-card-back"},[i("h2",[t._v("JavaScript")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" 熟悉 DOM 模型、this、閉包、Prototype、AJAX 等基本概念")])])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[i("div",{staticClass:"flip-card "},[i("div",{staticClass:"flip-card-inner"},[i("div",{staticClass:"flip-card-front"},[i("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:a("60bd"),alt:"Avatar"}})]),i("div",{staticClass:"flip-card-back"},[i("h2",[t._v("jQuery")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" 靈活操作 DOM 元素")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" AJAX 方法使用")])])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[i("div",{staticClass:"flip-card"},[i("div",{staticClass:"flip-card-inner"},[i("div",{staticClass:"flip-card-front"},[i("img",{staticClass:"mt-3",staticStyle:{width:"180px",height:"180px"},attrs:{src:a("8898"),alt:"Avatar"}})]),i("div",{staticClass:"flip-card-back"},[i("h2",[t._v("Bootstrap")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" flexbox 網格")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" RWD 自適應排版")])])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[i("div",{staticClass:"flip-card"},[i("div",{staticClass:"flip-card-inner"},[i("div",{staticClass:"flip-card-front"},[i("img",{staticClass:"mt-5",staticStyle:{width:"130px",height:"130px"},attrs:{src:a("1263"),alt:"Avatar"}})]),i("div",{staticClass:"flip-card-back"},[i("h2",[t._v("Vue.js")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" data 雙向綁定")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" 模板元件化")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" Vue CLI")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" Router、 Vuex")])])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[i("div",{staticClass:"flip-card"},[i("div",{staticClass:"flip-card-inner"},[i("div",{staticClass:"flip-card-front"},[i("img",{staticStyle:{width:"200px",height:"200px"},attrs:{src:a("2261"),alt:"Avatar"}})]),i("div",{staticClass:"flip-card-back"},[i("h2",[t._v("Node.js")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" NPM 套件使用")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" express.js 架設後端邏輯")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" EJS 樣板使用")])])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[i("div",{staticClass:"flip-card"},[i("div",{staticClass:"flip-card-inner"},[i("div",{staticClass:"flip-card-front"},[i("img",{staticStyle:{width:"200px",height:"200px"},attrs:{src:a("2407"),alt:"Avatar"}})]),i("div",{staticClass:"flip-card-back"},[i("h2",[t._v("Firebase")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" 雲端 Data 存放")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" 會員資料管理及驗證")])])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[i("div",{staticClass:"flip-card"},[i("div",{staticClass:"flip-card-inner"},[i("div",{staticClass:"flip-card-front"},[i("img",{staticClass:"mt-3",staticStyle:{width:"130px",height:"150px"},attrs:{src:a("9808"),alt:"Avatar"}})]),i("div",{staticClass:"flip-card-back"},[i("h2",[t._v("Webpack")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" 轉換 ES6、SASS、BABEL 檔案")])])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[i("div",{staticClass:"flip-card"},[i("div",{staticClass:"flip-card-inner"},[i("div",{staticClass:"flip-card-front"},[i("img",{staticClass:"mt-3",staticStyle:{width:"130px",height:"130px"},attrs:{src:a("683c"),alt:"Avatar"}})]),i("div",{staticClass:"flip-card-back"},[i("h2",[t._v("Git")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" Github 進行團隊協作")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" Github-Pages 前端部署")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" Heroku 後端部署")])])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[i("div",{staticClass:"flip-card"},[i("div",{staticClass:"flip-card-inner"},[i("div",{staticClass:"flip-card-front"},[i("img",{staticClass:"mt-3",staticStyle:{width:"120px",height:"130px"},attrs:{src:a("a4a6"),alt:"Avatar"}})]),i("div",{staticClass:"flip-card-back"},[i("h2",[t._v("ES6")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" 了解 Promise 非同步處理、解構賦值、其餘參數等概念")])])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[i("div",{staticClass:"flip-card"},[i("div",{staticClass:"flip-card-inner"},[i("div",{staticClass:"flip-card-front"},[i("img",{staticClass:"mt-3",staticStyle:{width:"130px",height:"130px"},attrs:{src:a("b700"),alt:"Avatar"}})]),i("div",{staticClass:"flip-card-back"},[i("h2",[t._v("Other")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" MVC、MVVM 開發風格")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" Photoshop 去背、切版、調色處理")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("button",{staticClass:"close text-white",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"row d-flex justify-content-center py-4"},[i("div",{staticClass:"col-md-3 justify-content-md-end d-none d-md-flex"},[i("div",{staticClass:"position-relative exInner"},[i("img",{staticClass:"img-fluid exImg",attrs:{src:a("ab0c"),alt:"img"}}),i("div",{staticClass:"exLine"})])]),i("div",{staticClass:"col-md-8"},[i("div",{staticClass:"exContent text-white"},[i("h4",{staticClass:"pb-4"},[t._v("國瑞汽車 | 品管員 | "),i("span",{staticClass:"d-inline-block"},[i("i",{staticClass:"fas fa-clock"}),t._v(" 2014 年 7 月 - 至今")])]),i("p",[i("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 參與社內技能競賽活動獲得第一名，2016及2018年代表台灣區 TOYOTA 參加豐田亞太技能競賽獲得 優秀賞。")]),i("div",{staticClass:"row pb-4"},[i("div",{staticClass:"col-md-6"},[i("a",{attrs:{href:"https://drive.google.com/file/d/1A4mgGDbRd5xpPi3CYVEtIYv5qOnAjZtB/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"}},[i("img",{staticClass:"img-fluid exCert",attrs:{src:a("e3c2"),alt:"img"}})])]),i("div",{staticClass:"col-md-6"},[i("a",{attrs:{href:"https://drive.google.com/file/d/1HEPv7Nq2i4MrmkoIoQiIFfdwn2OO8VNZ/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"}},[i("img",{staticClass:"img-fluid exCert",attrs:{src:a("f07d"),alt:"img"}})])])]),i("p",[i("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 參與公司的 QCC\n              (品管圈)，透過每次的活動跟同仁一起合作、集思廣益，活用品管七大手法，來解決工作現場、管理、文化等方面所發生的問題及課題。")]),i("p",[t._v("身為公司的一員我積極參與公司的各項活動，品管圈會議中讓我可以有機會在大眾面前講話，增加自己的溝通能力，改善了個性，與養成專心處理問題的能力。參加技能競賽更能讓我意識到本身工作的重要性與職責，因而對自己的工作更感到自豪。")])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"row d-flex justify-content-center py-4"},[i("div",{staticClass:"col-md-3 justify-content-md-end d-none d-md-flex"},[i("div",{staticClass:"position-relative exInner"},[i("img",{staticClass:"img-fluid exImg",attrs:{src:a("c0fa"),alt:"img"}}),i("div",{staticClass:"exLine"})])]),i("div",{staticClass:"col-md-8"},[i("div",{staticClass:"exContent text-white"},[i("h4",{staticClass:"pb-4"},[t._v("悅城科技 | 品保工程師 | "),i("span",{staticClass:"d-inline-block"},[i("i",{staticClass:"fas fa-clock"}),t._v(" 2013 年 10 月 -\n                2014 年 2 月")])]),i("p",[i("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 薄化面板成品良率管控")]),i("p",[i("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 面板廠相關規範制定整合")]),i("p",[t._v("工作需要對應各個面板廠(群創、友達等)的整合工程師，客戶所要求的良率以及面板的薄化標準與自身公司的產能之間，我會去衡量抓出一個平衡點，在這過程中去學習提升我整合事情的能力。")])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"row d-flex justify-content-center py-4"},[i("div",{staticClass:"col-md-3 justify-content-md-end d-none d-md-flex"},[i("div",{staticClass:"position-relative exInner"},[i("img",{staticClass:"img-fluid exImg",attrs:{src:a("aa44"),alt:"img"}}),i("div",{staticClass:"exLine"})])]),i("div",{staticClass:"col-md-8"},[i("div",{staticClass:"exContent text-white"},[i("h4",{staticClass:"pb-4"},[t._v("富捷實驗室 | 品保工程師 | "),i("span",{staticClass:"d-inline-block"},[i("i",{staticClass:"fas fa-clock"}),t._v(" 2011 年 10 月 -\n                2013 年 8 月")])]),i("p",[i("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 混泥土、鋼筋品質檢測")]),i("p",[t._v("檢測混泥土的抗壓係數以及鋼筋的抗拉係數是否能合乎在標準範圍內，降低產品使用週期低的風險，確保顧客能使用到令消費者放心的商品。")])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"col-md-3 justify-content-md-end d-none d-md-flex"},[i("div",{staticClass:"position-relative exInner"},[i("img",{staticClass:"img-fluid exImg",attrs:{src:a("bcf3"),alt:"img"}}),i("div",{staticClass:"exLine"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h4",{staticClass:"pb-4"},[t._v("NEC物流公司 | 倉儲管理 | "),a("span",{staticClass:"d-inline-block"},[a("i",{staticClass:"fas fa-clock"}),t._v(" 2010 年 7 月 -\n                2011 年 7 月")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 大樓倉庫進出貨處理")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 倉庫空間規劃")])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"row d-flex justify-content-center py-4"},[i("div",{staticClass:"col-md-3 justify-content-md-end d-none d-md-flex"},[i("div",{staticClass:"position-relative exInner"},[i("img",{staticClass:"img-fluid exImg",attrs:{src:a("f82e"),alt:"img"}})])]),i("div",{staticClass:"col-md-8"},[i("div",{staticClass:"exContent text-white"},[i("h4",{staticClass:"pb-4"},[t._v("國立虎尾科技大學 | 工業工程管理 | "),i("span",{staticClass:"d-inline-block"},[i("i",{staticClass:"fas fa-clock"}),t._v(" 2010 年 6 月\n                畢業")])]),i("p",[i("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 工管系學會-跑跑卡丁車活動總召：")]),i("p",[t._v("舉辦系上電子遊戲競賽，藉由競賽活動來增加系上同學之間的交流，我主要負責賽制相關規則制定、擬定獎金發放額度，場地以及工作人員的選擇與調配。")]),i("p",[i("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 畢業聯誼會-名人演講講座策劃：")]),i("p",[t._v("當時向經紀公司請了陳漢典來學校，我必須在校務跟經紀公司之間做好溝通的橋樑，協調演講費部分的定案，讓經紀公司可以接受且校務局的合理，在這過程去提升我的協調能力。")]),i("p",[i("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 吉他社-社團期末發表總召：")]),i("p",[t._v("負責活動人員的安排、活動流程制定、場地選擇與探勘、拜訪周邊商家提供活動贊助。")])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"row d-flex justify-content-center"},[i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"px-3"},[i("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:a("93dd"),alt:""}})])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h5",{staticClass:"pb-3"},[a("a",{staticClass:"text-white",attrs:{href:"mailto:livepower0815@gmail.com"}},[a("i",{staticClass:"fas fa-envelope"}),t._v("\n                livepower0815@gmail.com")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h5",{staticClass:"pb-3"},[a("i",{staticClass:"fas fa-phone"}),t._v(" 0975-320-521")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{attrs:{href:"https://www.facebook.com/profile.php?id=100000312843510",target:"_blank"}},[a("i",{staticClass:"fab fa-facebook-square"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{attrs:{href:"https://github.com/livepower0815/my-resume",target:"_blank"}},[a("i",{staticClass:"fab fa-github"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{attrs:{href:"https://www.cakeresume.com/livepower0815",target:"_blank"}},[a("i",{staticClass:"fas fa-copyright"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{attrs:{href:"https://www.linkedin.com/in/kerry-chen-39558617b/",target:"_blank"}},[a("i",{staticClass:"fab fa-linkedin"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"footer"}},[a("p",{staticClass:"text-white"},[t._v("Copyright © Kerry Resume Website 宏宇簡歷網頁")])])}],u=a("1157"),C=a.n(u),_={name:"home",data(){return{viewprotH:0,viewprotW:0,windowH:0,skillDispaly:"gallery",works_modal:{},navLinksH:{},works:[{title:"猴寶拍拍-電子商務",imgUrl:"https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/monkey.png?alt=media&token=80a4d221-a852-4517-8867-d61e4511403a",href:"https://livepower0815.github.io/my-vue-cli3/dist/",content:["使用 Vue cli、webpack 開發擁有購物車及結帳系統的 SPA 網頁","搭建 Heroku 串接 智付通第三方金流 API","axios 串接後端 API 商務","使用 Bootstrap4、SASS 製作 RWD 網頁","擁有可編輯上傳商品的後台 dashboard (如需後台帳密可洽詢本人)"]},{title:"夢想家 Blog",imgUrl:"https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/blog.png?alt=media&token=22a92f96-5b8b-45df-8e68-7912b1051fcc",href:"https://limitless-wildwood-49993.herokuapp.com/",content:["使用 node.js、express 開發的後端 Blog","使用 EJS 樣板渲染前端網頁","使用 Bootstrap4 製作 RWD 網頁","整合 Firebase 完成會員功能、留言板功能","擁有可編輯上傳文章的後台 dashboard (如需後台帳密可洽詢本人)","開啟網頁時 Heroku 需喚醒請耐心等待一會"]},{title:"BMI 計算器",imgUrl:"https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/BMI.png?alt=media&token=43607bf7-176f-4afa-a99d-774688715432",href:"https://livepower0815.github.io/test1/hexSchool/day17(BMI計算)/",content:["使用 Vue 綁定雙向資料結構 開發 todolist","使用 Bootstrap4 製作 RWD 網頁","使用 Localstorage 儲存 list 資料"]},{title:"會議室預約系統",imgUrl:"https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/meeting.png?alt=media&token=5389af65-61d1-44e0-b3ac-750a46a851b3",href:"https://livepower0815.github.io/test1/meetingRoom/",content:["使用 Bootstrap4 製作 RWD 網頁","整合 Firebase 存取資料、渲染 TodoList","自行撰寫 資料儲存格式、doubleBooking 驗證邏輯"]},{title:"CSS 貪食蛇",imgUrl:"https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/snake.png?alt=media&token=7da4da70-1795-42bb-9b27-5274e529bece",href:"https://livepower0815.github.io/test1/snakeGame/",content:["單純使用 JavaScript 及 CSS 撰寫，全部邏輯不參考網路自行構想","電腦平板手機皆可使用點擊操作"]},{title:"戰船遊戲",imgUrl:"https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/ship.png?alt=media&token=9e8f65a7-deb1-4b13-a69e-9c766fb044c6",href:"https://livepower0815.github.io/test1/hexSchool/the%20first%20days/battleShip.html",content:["JavaScript 深入淺出 練習作品","紅心代表擊中 黑心代表MISS","環境設定: 紅心條 數量:3 , 長度:3 位置採用隨機生成"]}]}},computed:{contactShow(){const t=this;return t.viewprotH>t.navLinksH.contact-t.windowH/3},aboutShow(){const t=this;return t.viewprotH>t.navLinksH.about-t.windowH/4},bgImgScroll(){const t=this;let s="0px "+t.viewprotH/2+"px",a="center center";return t.viewprotW<768?a:s},contactScroll(){const t=this;let s="0px "+(t.viewprotH-t.navLinksH.contact)+"px",a="center center";return t.viewprotW<768?a:s},navActive(){const t=this;let s="";return s=t.viewprotH+5>t.navLinksH.contact?"contact":t.viewprotH+5>t.navLinksH.experience?"experience":t.viewprotH+5>t.navLinksH.works?"works":t.viewprotH+5>t.navLinksH.skill?"skill":t.viewprotH+5>t.navLinksH.about?"about":"",s}},methods:{openModal(t){const s=this;s.works_modal=t,C()("#worksModal").modal("show")}},mounted(){const t=this,s=document.querySelector("#about"),a=document.querySelector("#skill"),i=document.querySelector("#works"),e=document.querySelector("#experience"),c=document.querySelector("#contact");t.viewprotW=window.outerWidth,t.windowH=window.outerHeight,window.addEventListener("resize",function(){t.viewprotW=window.outerWidth,t.windowH=window.outerHeight}),window.addEventListener("scroll",function(){t.viewprotH=window.pageYOffset,t.navLinksH.about=s.offsetTop,t.navLinksH.skill=a.offsetTop,t.navLinksH.works=i.offsetTop,t.navLinksH.experience=e.offsetTop,t.navLinksH.contact=c.offsetTop}),setTimeout(()=>{document.querySelector(".titleHide").classList.add("active")},2500),setTimeout(()=>{document.querySelector(".imgHide").classList.add("active")},2e3)}},h=_,g=(a("9692"),Object(n["a"])(h,p,m,!1,null,"7716bf29",null));g.options.__file="Home.vue";var b=g.exports;i["a"].use(v["a"]);var x=new v["a"]({routes:[{path:"/",name:"home",component:b}]}),k=a("2f62");i["a"].use(k["a"]);var w=new k["a"].Store({state:{},mutations:{},actions:{}});a("4989");i["a"].config.productionTip=!1,i["a"].use(c.a,{container:"body",duration:1e3,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),new i["a"]({router:x,store:w,render:t=>t(f)}).$mount("#app")},"5c0b":function(t,s,a){"use strict";var i=a("5e27"),e=a.n(i);e.a},"5e27":function(t,s,a){},"5e73":function(t,s,a){t.exports=a.p+"img/blog.86450ce1.png"},"5f23":function(t,s,a){t.exports=a.p+"img/ship.8ca958f2.png"},"60bd":function(t,s,a){t.exports=a.p+"img/jquery.2be752cf.png"},"683c":function(t,s,a){t.exports=a.p+"img/git.451352fc.png"},"692b":function(t,s,a){t.exports=a.p+"img/monkey.0b52e622.png"},"6d2e":function(t,s,a){t.exports=a.p+"img/html.126e68aa.png"},8858:function(t,s,a){t.exports=a.p+"img/css.8e348af7.png"},8898:function(t,s,a){t.exports=a.p+"img/bootstrap.d1d7a23a.png"},9287:function(t,s,a){t.exports=a.p+"img/BMI.6f1c6daa.png"},"93dd":function(t,s,a){t.exports=a.p+"img/flower.d09f0ff0.jpg"},9692:function(t,s,a){"use strict";var i=a("3d2d"),e=a.n(i);e.a},9808:function(t,s,a){t.exports=a.p+"img/webpack.3ef52f14.png"},"9fcc":function(t,s,a){t.exports=a.p+"img/meeting.efce6a1b.png"},a4a6:function(t,s,a){t.exports=a.p+"img/ES6.ec833031.png"},aa44:function(t,s,a){t.exports=a.p+"img/test.814e0274.png"},ab0c:function(t,s,a){t.exports=a.p+"img/car.24dc1c04.png"},b700:function(t,s,a){t.exports=a.p+"img/rest.7d540db2.png"},b7a2:function(t,s,a){t.exports=a.p+"img/snake.96bd50bd.png"},bcf3:function(t,s,a){t.exports=a.p+"img/box.1e852bfd.png"},c0fa:function(t,s,a){t.exports=a.p+"img/iconfinder_Phone Red_41319.5be4a1f1.png"},e3c2:function(t,s,a){t.exports=a.p+"img/AP-2018.9ec2121f.jpg"},f07d:function(t,s,a){t.exports=a.p+"img/AP-2016.e26ceca5.jpg"},f82e:function(t,s,a){t.exports=a.p+"img/Graduation.aee1f51b.png"}});
//# sourceMappingURL=app.6117ac69.js.map
(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],v=0,d=[];v<o.length;v++)r=o[v],i[r]&&d.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==i[c]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/my-resume/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"06b3":function(t,e,s){"use strict";s("9976")},"21bb":function(t,e,s){"use strict";s("7a98")},"3aa6":function(t,e,s){t.exports=s.p+"img/aboutme.5de1e4b4.jpg"},"4df1":function(t,e,s){"use strict";s("a102")},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),i=s("f13c"),n=s.n(i),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},o=[],c=(s("5c0b"),s("2877")),l={},u=Object(c["a"])(l,r,o,!1,null,null,null),v=u.exports,d=s("8c4f"),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",["works"==t.navActive||"experience"==t.navActive||"contact"==t.navActive?s("div",{staticClass:"bg-img2"}):s("div",{staticClass:"bg-img1"}),s("Nav",{attrs:{"view-port-h":t.viewprotH,"nav-active":t.navActive}}),s("MyHeader"),s("MyAbout",{attrs:{"about-show":t.aboutShow}}),s("MySkill"),s("MyExperience"),s("MyWorks"),s("MyContact",{attrs:{"contact-show":t.contactShow}}),t._m(0)],1)},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"footer"}},[s("p",{staticClass:"text-white"},[t._v("Copyright © Kerry Resume Website")])])}],m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar navbar-expand-lg myNav",class:{"scroll-color":t.viewPortH>300}},[t._m(0),t._m(1),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarTogglerDemo03"}},[s("ul",{staticClass:"navbar-nav ml-auto mt-2 mt-lg-0"},[s("li",{staticClass:"nav-item"},[s("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about",expression:"'#about'"}],staticClass:"nav-link",class:{active:"about"==t.navActive},attrs:{href:"#about"}},[t._v("About")])]),s("li",{staticClass:"nav-item"},[s("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#skill",expression:"'#skill'"}],staticClass:"nav-link",class:{active:"skill"==t.navActive},attrs:{href:"#skill"}},[t._v("Skills")])]),s("li",{staticClass:"nav-item"},[s("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#experience",expression:"'#experience'"}],staticClass:"nav-link",class:{active:"experience"==t.navActive},attrs:{href:"#experience"}},[t._v("Experience")])]),s("li",{staticClass:"nav-item"},[s("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#works",expression:"'#works'"}],staticClass:"nav-link",class:{active:"works"==t.navActive},attrs:{href:"#works"}},[t._v("Projects")])]),s("li",{staticClass:"nav-item"},[s("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact",expression:"'#contact'"}],staticClass:"nav-link",class:{active:"contact"==t.navActive},attrs:{href:"#contact"}},[t._v("Contact")])])])])])},b=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler text-white",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo03"}},[s("span",[s("i",{staticClass:"fas fa-list-ul"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[s("i",{staticClass:"fas fa-feather-alt"}),t._v(" Kerry Resume")])}],_=(s("c5f6"),{name:"Nav",props:{viewPortH:{type:[String,Number],required:!0},navActive:{type:String,required:!0}}}),h=_,C=(s("4df1"),Object(c["a"])(h,m,b,!1,null,"b514c75e",null)),w=C.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h100 top-img text-white d-flex align-items-center",staticStyle:{backgroundPosition:"center center"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6  d-flex justify-content-center"},[s("div",{staticClass:"imgHide"},[s("div",{staticClass:"img-profile"})])]),s("div",{staticClass:"col-md-6 d-flex align-items-md-center justify-content-center"},[s("div",{staticClass:"titleHide mx-md-5"},[s("div",{staticClass:"top-content text-center"},[s("h1",{staticClass:"text_effect pb-3"},[t._v("Hi I'm Kerry ")]),s("h4",{staticClass:"text_effect py-2"},[t._v("世上沒有困難事")]),s("h4",{staticClass:"text_effect py-2"},[t._v("熱誠及興趣能維持你向前的動力")])])])])])])])}],k={name:"MyHeader"},y=k,S=Object(c["a"])(y,g,x,!1,null,"6ec20ca0",null),E=S.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"about"}},[s("div",{staticClass:"container"},[s("h1",{staticClass:"myTitle-white"},[t._v("About Myself")]),s("div",{staticClass:"row aboutHide",class:{active:t.aboutShow}},[t._m(0),t._m(1)])])])},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-6"},[a("img",{staticClass:"img-fluid myShadow rounded my-3",attrs:{src:s("3aa6"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-6 d-flex align-items-center"},[s("div",{staticClass:"p-4 my-3 bgWhite"},[s("p",[t._v("\n            ＊ 三年+ WEB 前端開發經驗"),s("br"),t._v("\n            ＊ 後台管理介面規劃"),s("br"),t._v("\n            ＊ 前端即時訊息應用整合"),s("br"),t._v("\n            ＊ 跨團隊合作交流能力"),s("br"),s("br"),t._v("\n            嗨您好，我叫做 陳宏宇 ( Kerry )"),s("br"),t._v("\n            我擁有三年的前端開發經驗（Vue: 3年, React: 2月），目前負責過 客戶關係＆彩票平台＆即時訊息 等大型專案開發。"),s("br"),t._v("\n            近一年已能獨立主導大型應用、規劃前端團隊人力調派，並透過自身的溝通技巧協調跨部門的合作方針。"),s("br"),t._v("\n            此外，我也經常去探索當前主流的框架技術，並針對專案情境，適當的引入部分核心技術提升團隊開發量能。"),s("br"),t._v("\n            我是個善於交流及溝通的人，同時也是有個快樂家庭的小爸爸，這個身份讓我獲得更多的責任感及抗壓能力。"),s("br"),t._v("\n            我喜歡學習新的事物並研究各種技術來整合使用，會定期設定讀書單或是線上課程學習列表或是參加線上講座。"),s("br"),t._v("\n            在不斷的追求、不斷的學習、不斷的創作的過程中，看到他人對於我的作品展現出笑容，這成就感使我覺得人生無比富有。\n          ")])])])}],M={name:"MyAbout",props:{aboutShow:{type:Boolean,required:!0}}},A=M,I=(s("a700"),Object(c["a"])(A,H,j,!1,null,"71b25476",null)),L=I.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"skill"}},[s("div",{staticClass:"container"},[s("h1",{staticClass:"myTitle-white"},[t._v("Skills")]),s("div",{staticClass:"row d-flex justify-content-center"},[s("div",{staticClass:"col-md-6 text-white skillList"},[s("h3",[t._v("FE-Framework ▾")]),s("ul",[s("li",[s("b",[t._v("Vue")]),t._v(" - Vue3／Vuex／Pinia／Router")]),s("li",[s("b",[t._v("React")]),t._v(" - Redux(thunk／Saga)／Hooks／Router")]),s("li",[s("b",[t._v("other")]),t._v(" - i18n")])]),s("h3",[t._v("Builder ▾")]),s("ul",[s("li",[s("b",[t._v("Webpack／Vite")])])]),s("h3",[t._v("DevOps ▾")]),s("ul",[s("li",[s("b",[t._v("Rancher／Jenkins／Docker／Nginx／Linux")])])]),s("h3",[t._v("Cowork ▾")]),s("ul",[s("li",[s("b",[t._v("Git／Slack／Jira／Trello／Zeplin／Figma")])])]),s("h3",[t._v("Testing ▾")]),s("ul",[s("li",[s("b",[t._v("Jest／Puppeteer(E2E)")])])]),s("h3",[t._v("Back-End ▾")]),s("ul",[s("li",[s("b",[t._v("Nuxt／Express")])])]),s("h3",[t._v("UI-Framework ▾")]),s("ul",[s("li",[s("b",[t._v("Bootstrap／AntD／Element-UI／Vant／Tailwind／Windy")])])]),s("h3",[t._v("Database ▾")]),s("ul",[s("li",[s("b",[t._v("Firebase／MongoDB")])])])])])])])}],T={name:"MySkill",props:{},data:function(){return{}}},V=T,W=(s("06b3"),Object(c["a"])(V,P,$,!1,null,"135e3699",null)),R=W.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"works"}},[s("div",{staticClass:"container"},[s("h1",{staticClass:"myTitle-blue"},[t._v("Projects")]),s("div",{staticClass:"row"},t._l(t.works,(function(e,a){return s("div",{key:a,staticClass:"col-md-4"},[s("div",{staticClass:"transform_3d"},[s("div",{staticClass:"myCard"},[s("div",{staticClass:"myCard_img"},[s("a",{attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.openModal(e)}}},[s("img",{staticClass:"img-fluid",attrs:{src:e.imgUrl,alt:"img"}})])])]),s("h3",{staticClass:"text-center py-4"},[t._v(t._s(e.title))])])])})),0)]),s("div",{staticClass:"modal fade",attrs:{id:"worksModal",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content myCard_content"},[s("div",{staticClass:"modal-header border-0"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.worksModal.title))]),t._m(0)]),s("div",{staticClass:"modal-body"},[s("img",{staticClass:"img-fluid",attrs:{src:t.worksModal.imgUrl,alt:"img"}}),s("ul",{staticClass:"mt-3"},t._l(t.worksModal.content,(function(e,a){return s("li",{key:a,staticClass:"py-2"},[t._v(t._s(e))])})),0)]),s("div",{},[""==t.worksModal.href?s("div",{staticClass:" text-center m-3 pb-4"},[s("button",{staticClass:"goToWeb-noDemo rounded-pill"},[t._v("版權問題無法提供 Demo")])]):s("div",{staticClass:" text-center m-3 pb-4"},[s("a",{staticClass:"goToWeb rounded-pill",attrs:{href:t.worksModal.href,target:"_blank"}},[t._v("點擊前往作品網頁")])])])])])]),s("div",{staticClass:"d-none"},t._l(t.works,(function(t,e){return s("img",{key:e,attrs:{src:t.imgUrl,alt:""}})})),0)])},D=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"close text-white",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],O=s("1157"),J=s.n(O),N={name:"MyWorks",data:function(){return{worksModal:{},works:[{title:"返多寶",imgUrl:s("6db1"),href:"https://www.fundobit.com/",content:["Vue & Element UI & i18n","虛擬貨幣手續優惠整合平台","RWD 設計","多國語系支援"]},{title:"猴寶拍拍-電子商務",imgUrl:s("692b"),href:"https://livepower0815.github.io/my-vue-cli3/dist/",content:["使用 Vue cli、webpack 開發擁有購物車及結帳系統的 SPA 網頁","搭建 Heroku 串接 智付通第三方金流 API","axios 串接後端 API 商務","使用 Bootstrap4、SASS 製作 RWD 網頁","擁有可編輯上傳商品的後台 dashboard (如需後台帳密可洽詢本人)"]},{title:"流程 GUI 設定介面",imgUrl:s("be80"),href:"https://livepower0815.github.io/flow-setting/dist/",content:["Vue & Element UI & jsplumb","基於 Element UI 及 jsplumb 的流程設定介面"]},{title:"CRM Web App",imgUrl:s("fdd1"),href:"",content:["前端框架為 Vue.js 前後端分離使用相關 Vue 套件如 Cli3、Router","Vux 管理全域 User & Customer info 資料，使 component 能更靈活的取得父級資訊","使用 primse 包裝 axios 套件串接 後端 Java RESTful API","整合 Google Maps API 提升客戶列表使用者體驗"]},{title:"夢想家 Blog",imgUrl:s("5e73"),href:"https://limitless-wildwood-49993.herokuapp.com/",content:["使用 node.js、express 開發的後端 Blog","使用 EJS 樣板渲染前端網頁","使用 Bootstrap4 製作 RWD 網頁","整合 Firebase 完成會員功能、留言板功能","擁有可編輯上傳文章的後台 dashboard (如需後台帳密可洽詢本人)","開啟網頁時 Heroku 需喚醒請耐心等待一會"]},{title:"Youtube API 影片搜尋",imgUrl:s("d7ee"),href:"https://livepower0815.github.io/React-youtube-API/build/",content:["使用 React 框架開發","搭配 Youtube API 撰寫影片搜尋應用"]}]}},methods:{openModal:function(t){this.worksModal=t,J()("#worksModal").modal("show")}}},B=N,q=(s("b050"),Object(c["a"])(B,U,D,!1,null,"6daad968",null)),F=q.exports,K=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"experience"}},[a("div",{staticClass:"container"},[a("h1",{staticClass:"myTitle-white"},[t._v("Experience")]),a("div",{staticClass:"row d-flex justify-content-center py-4"},[a("div",{staticClass:"col-md-3 justify-content-md-end d-none d-md-flex"},[a("div",{staticClass:"position-relative exInner"},[a("img",{staticClass:"img-fluid exImg",attrs:{src:s("beb6"),alt:"img"}}),a("div",{staticClass:"exLine"})])]),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"exContent text-white"},[a("h4",{staticClass:"pb-4"},[t._v("天堂遊戲 | 前端工程師 | "),a("span",{staticClass:"d-inline-block"},[a("i",{staticClass:"fas fa-clock"}),t._v(" 2020 年 3 月 - 在職")])]),a("p",{staticStyle:{"font-weight":"500","font-size":"20px"}},[t._v("▲ Milestone：")]),a("p",{staticStyle:{"line-height":"32px"}},[t._v("\n            ◎ 聊天系統引入 TypeScript 固定各類訊息格式，並充分利用 VS Code toolling 特性。"),a("br"),t._v("\n            ◎ 新專案導入 Vue3 配上 Vite 打包環境，節省開發時間及優化前端效能。"),a("br"),t._v("\n            ◎ 實作片段緩存演算，以整合後端API及本地訊息資料，達到本地端片段緩存。"),a("br"),t._v("\n            ◎ Assist the team to introduce the Unit Testing and lead the demo of the asynchronous process."),a("br"),t._v("\n            ◎ CICD打包部署流程建置／docker file pipe 優化／gitlab CD 拆分環境／ rencher and jenkins config setting。"),a("br"),t._v("\n            ◎ 引入多語系並實作語言json包／後端文案整合／部分語系拆分客製化樣板"),a("br"),t._v("\n            ◎ 實作智能客服流程ＧＵＩ設定介面，提升使用直覺感。"),a("br"),t._v("\n            ◎ 整合 Jira API 因應公司任務流程來客製化顯示介面，以提升同仁對於Jira使用度及降低主管查詢團隊工時的不便性。"),a("br"),t._v("\n            ◎ 漸進式重構 Knockout 至 Vue 框架，達成前後端分離。局部效能、維護性及明確分工得到有效提升。\n          ")]),a("p",{staticStyle:{"font-weight":"500","font-size":"20px"}},[t._v("▲ Responsible for：")]),a("p",[a("i",{staticClass:"fas fa-tools pr-3"}),t._v(" IM Application")]),a("p",[t._v("\n            description：Like the What App Web。"),a("br"),t._v("\n            core tech：Vue3／TypeScript／Pinia／Vite／Docker／Jenkins\n          ")]),a("p",[a("i",{staticClass:"fas fa-tools pr-3"}),t._v(" CSR Application")]),a("p",[t._v("\n            description：Communication tool for customer feedback of the main product。"),a("br"),t._v("\n            core tech：Vue／Vuex／Element UI／Jest／i18n／Webpack／Docker／Rancher\n          ")]),a("p",[a("i",{staticClass:"fas fa-tools pr-3"}),t._v(" Jira 工單管理系統")]),a("p",[t._v("\n            description：內部需求工單管理系統"),a("br"),t._v("\n            core tech：Vue／Antd UI／Echarts／Webpack／Docker／Rancher\n          ")]),a("p",[a("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 彩票開獎網")]),a("p",[t._v("\n            description： Instant and historical records of all kinds of lottery draws。"),a("br"),t._v("\n            core tech：Nuxt／Linux／Echarts／Canvas\n          ")]),a("p",[a("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 彩票官網、後台")]),a("p",[t._v("\n            description： refactoring the old structure and developed at the same time。"),a("br"),t._v("\n            core tech：Knockout／Golang／Vue／Linux／Jenkins\n          ")])])])]),a("div",{staticClass:"row d-flex justify-content-center py-4"},[a("div",{staticClass:"col-md-3 justify-content-md-end d-none d-md-flex"},[a("div",{staticClass:"position-relative exInner"},[a("img",{staticClass:"img-fluid exImg",attrs:{src:s("beb6"),alt:"img"}}),a("div",{staticClass:"exLine"})])]),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"exContent text-white"},[a("h4",{staticClass:"pb-4"},[t._v("雲中雲 | 前端工程師 | "),a("span",{staticClass:"d-inline-block"},[a("i",{staticClass:"fas fa-clock"}),t._v(" 2019 年 11 月 -\n              2020 年 1 月")])]),a("p",[a("i",{staticClass:"fas fa-tools pr-3"}),t._v(" admin 後台串接 API")]),a("p",[a("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 購彩網前台架構遷移，整個專案由 React 重構成 Vue 架構")]),a("p",[t._v("在任職期間研究並開始使用 React 框架，因為有個重大遷移專案，必須熟悉 React 及 Vue 兩者的架構才能做到最相容的轉換，UI 元件的客製化及 jsx\n            的使用上得到了飛躍式的進步，並且在12月底完成遷移並測試完成。1月初台方撤資，遺憾的無緣與台灣同事再繼續共事。")])])])]),a("div",{staticClass:"row d-flex justify-content-center py-4"},[a("div",{staticClass:"col-md-3 justify-content-md-end d-none d-md-flex"},[a("div",{staticClass:"position-relative exInner"},[a("img",{staticClass:"img-fluid exImg",attrs:{src:s("beb6"),alt:"img"}}),a("div",{staticClass:"exLine"})])]),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"exContent text-white"},[a("h4",{staticClass:"pb-4"},[t._v("昕力資訊 | 前端工程師 | "),a("span",{staticClass:"d-inline-block"},[a("i",{staticClass:"fas fa-clock"}),t._v(" 2019 年 2 月 -\n              2019 年 10 月")])]),a("p",[a("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 串接後端 Java API：CRM 專案功能查詢、新增、刪除、修改")]),a("p",[a("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 前端 UI/UX 調整頁面邏輯：List Data 的 filter、彈跳資訊或提示的視窗、相關 loading 效果、等...")]),a("p",[a("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 協助解決 Browser (Chrome、Safari、IE) 與裝置(電腦、手機、平板)之間的相容問題")]),a("p",[a("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 透過 Sourcetree 幫前端設計團隊撰寫假資料以利設計師切版時候的作業，並有效與前端設計公司做版面整合及調整")]),a("p",[t._v("主要負責客戶關係管理專案前端 Vue.js，依照客戶 SPEC 串接後端 API 、撰寫前端邏輯、向設計師溝通調整 UI/UX layout。")])])])]),a("div",{staticClass:"row d-flex justify-content-center py-4"},[a("div",{staticClass:"col-md-3 justify-content-md-end d-none d-md-flex"},[a("div",{staticClass:"position-relative exInner"},[a("img",{staticClass:"img-fluid exImg",attrs:{src:s("f82e"),alt:"img"}})])]),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"exContent text-white"},[a("h4",{staticClass:"pb-4"},[t._v("國立虎尾科技大學 | 工業工程管理 | "),a("span",{staticClass:"d-inline-block"},[a("i",{staticClass:"fas fa-clock"}),t._v(" 2010 年 6 月\n              畢業")])]),a("p",[a("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 畢業聯誼會-名人演講講座策劃：")]),a("p",[t._v("當時向經紀公司請了陳漢典來學校，我必須在校務跟經紀公司之間做好溝通的橋樑，協調演講費部分的定案，讓經紀公司可以接受且校務局的合理，在這過程去提升我的協調能力。")]),a("p",[a("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 吉他社-社團期末發表總召：")]),a("p",[t._v("負責活動人員的安排、活動流程制定、場地選擇與探勘、拜訪周邊商家提供活動贊助。")])])])])])])}],z={name:"MyExperience",props:{}},Y=z,X=Object(c["a"])(Y,K,G,!1,null,"d134fd56",null),Z=X.exports,Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"contact"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row d-flex justify-content-center"},[s("div",{staticClass:"col-md-6 text-center text-white"},[s("div",{staticClass:"contact_card",class:{active:t.contactShow}},[s("h1",{staticClass:"py-4"},[t._v("Contact Me")]),t._m(0),s("h3",{staticClass:"py-3"},[t._v("宏宇 ( Kerry )")]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6)])])])])])},tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row d-flex justify-content-center"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"px-3"},[a("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:s("93dd"),alt:""}})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h5",{staticClass:"pb-3"},[s("a",{staticClass:"text-white",attrs:{href:"mailto:livepower0815@gmail.com"}},[s("i",{staticClass:"fas fa-envelope"}),t._v("\n              livepower0815@gmail.com")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h5",{staticClass:"pb-3"},[s("i",{staticClass:"fas fa-phone"}),t._v(" 0975-320-521")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"https://www.facebook.com/profile.php?id=100000312843510",target:"_blank"}},[s("i",{staticClass:"fab fa-facebook-square"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"https://github.com/livepower0815/my-resume",target:"_blank"}},[s("i",{staticClass:"fab fa-github"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"https://www.cakeresume.com/livepower0815",target:"_blank"}},[s("i",{staticClass:"fas fa-copyright"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"https://www.linkedin.com/in/kerry-chen-39558617b/",target:"_blank"}},[s("i",{staticClass:"fab fa-linkedin"})])}],et={name:"MyContact",props:{contactShow:{type:Boolean,required:!0}}},st=et,at=Object(c["a"])(st,Q,tt,!1,null,"479b5999",null),it=at.exports,nt={name:"home",components:{Nav:w,MyHeader:E,MyAbout:L,MySkill:R,MyWorks:F,MyExperience:Z,MyContact:it},data:function(){return{viewprotH:0,viewprotW:0,windowH:0,navLinksH:{}}},computed:{contactShow:function(){var t=this;return t.viewprotH>t.navLinksH.contact-t.windowH/3},aboutShow:function(){var t=this;return t.viewprotH>t.navLinksH.about-t.windowH/4},bgImgScroll:function(){var t=this,e="0px "+t.viewprotH/2+"px",s="center center";return t.viewprotW<768?s:e},contactScroll:function(){var t=this,e="0px "+(t.viewprotH-t.navLinksH.contact)+"px",s="center center";return t.viewprotW<768?s:e},navActive:function(){var t=this,e="";return e=t.viewprotH+5>t.navLinksH.contact?"contact":t.viewprotH+5>t.navLinksH.experience?"experience":t.viewprotH+5>t.navLinksH.works?"works":t.viewprotH+5>t.navLinksH.skill?"skill":t.viewprotH+5>t.navLinksH.about?"about":"",e}},mounted:function(){var t=this,e=document.querySelector("#about"),s=document.querySelector("#skill"),a=document.querySelector("#works"),i=document.querySelector("#experience"),n=document.querySelector("#contact");t.viewprotW=window.outerWidth,t.windowH=window.outerHeight,window.addEventListener("resize",(function(){t.viewprotW=window.outerWidth,t.windowH=window.outerHeight})),window.addEventListener("scroll",(function(){t.viewprotH=window.pageYOffset,t.navLinksH.about=e.offsetTop,t.navLinksH.skill=s.offsetTop,t.navLinksH.works=a.offsetTop,t.navLinksH.experience=i.offsetTop,t.navLinksH.contact=n.offsetTop})),setTimeout((function(){document.querySelector(".titleHide").classList.add("active")}),2500),setTimeout((function(){document.querySelector(".imgHide").classList.add("active")}),2e3)}},rt=nt,ot=(s("21bb"),Object(c["a"])(rt,f,p,!1,null,null,null)),ct=ot.exports;a["a"].use(d["a"]);var lt=new d["a"]({routes:[{path:"/",name:"home",component:ct}]}),ut=s("2f62");a["a"].use(ut["a"]);var vt=new ut["a"].Store({state:{},mutations:{},actions:{}});s("4989");a["a"].config.productionTip=!1,a["a"].use(n.a,{container:"body",duration:1e3,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),new a["a"]({router:lt,store:vt,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("e332")},"5e73":function(t,e,s){t.exports=s.p+"img/blog.86450ce1.png"},"692b":function(t,e,s){t.exports=s.p+"img/monkey.0b52e622.png"},"6db1":function(t,e,s){t.exports=s.p+"img/FDB-demo.72ea5468.png"},7730:function(t,e,s){},"7a98":function(t,e,s){},"8e3d":function(t,e,s){},"93dd":function(t,e,s){t.exports=s.p+"img/flower.d09f0ff0.jpg"},9976:function(t,e,s){},a102:function(t,e,s){},a700:function(t,e,s){"use strict";s("7730")},b050:function(t,e,s){"use strict";s("8e3d")},be80:function(t,e,s){t.exports=s.p+"img/flow-demo.efdfe8bd.png"},beb6:function(t,e,s){t.exports=s.p+"img/iconfinder_Notebook_by_Artdesigner_60879.759c605e.png"},d7ee:function(t,e,s){t.exports=s.p+"img/video.36cc7193.png"},e332:function(t,e,s){},f82e:function(t,e,s){t.exports=s.p+"img/Graduation.aee1f51b.png"},fdd1:function(t,e,s){t.exports=s.p+"img/crm.e9108981.png"}});
//# sourceMappingURL=app.d6a802cc.js.map
(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],v=0,u=[];v<r.length;v++)o=r[v],i[o]&&u.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(u.length)u.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/my-resume/dist/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"06b3":function(t,e,a){"use strict";a("9976")},"21bb":function(t,e,a){"use strict";a("7a98")},3899:function(t,e,a){"use strict";a("e203")},"3aa6":function(t,e,a){t.exports=a.p+"img/aboutme.5de1e4b4.jpg"},"4df1":function(t,e,a){"use strict";a("a102")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),i=a("f13c"),n=a.n(i),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],c=(a("5c0b"),a("2877")),l={},d=Object(c["a"])(l,o,r,!1,null,null,null),v=d.exports,u=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",["works"==t.navActive||"experience"==t.navActive||"contact"==t.navActive?a("div",{staticClass:"bg-img2"}):a("div",{staticClass:"bg-img1"}),a("Nav",{attrs:{"view-port-h":t.viewprotH,"nav-active":t.navActive}}),a("MyHeader"),a("MyAbout",{attrs:{"about-show":t.aboutShow}}),a("MySkill"),a("MyExperience"),a("MyWorks"),a("MyContact",{attrs:{"contact-show":t.contactShow}}),t._m(0)],1)},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"footer"}},[a("p",{staticClass:"text-white"},[t._v("Copyright © Kerry Resume Website")])])}],m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg myNav",class:{"scroll-color":t.viewPortH>300}},[t._m(0),t._m(1),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarTogglerDemo03"}},[a("ul",{staticClass:"navbar-nav ml-auto mt-2 mt-lg-0"},[a("li",{staticClass:"nav-item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about",expression:"'#about'"}],staticClass:"nav-link",class:{active:"about"==t.navActive},attrs:{href:"#about"}},[t._v("About")])]),a("li",{staticClass:"nav-item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#skill",expression:"'#skill'"}],staticClass:"nav-link",class:{active:"skill"==t.navActive},attrs:{href:"#skill"}},[t._v("Skills")])]),a("li",{staticClass:"nav-item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#experience",expression:"'#experience'"}],staticClass:"nav-link",class:{active:"experience"==t.navActive},attrs:{href:"#experience"}},[t._v("Experience")])]),a("li",{staticClass:"nav-item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#works",expression:"'#works'"}],staticClass:"nav-link",class:{active:"works"==t.navActive},attrs:{href:"#works"}},[t._v("Projects")])]),a("li",{staticClass:"nav-item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact",expression:"'#contact'"}],staticClass:"nav-link",class:{active:"contact"==t.navActive},attrs:{href:"#contact"}},[t._v("Contact")])])])])])},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler text-white",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo03"}},[a("span",[a("i",{staticClass:"fas fa-list-ul"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-feather-alt"}),t._v(" Kerry Resume")])}],h=(a("c5f6"),{name:"Nav",props:{viewPortH:{type:[String,Number],required:!0},navActive:{type:String,required:!0}}}),C=h,_=(a("4df1"),Object(c["a"])(C,m,b,!1,null,"b514c75e",null)),g=_.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"h100 top-img text-white d-flex align-items-center",staticStyle:{backgroundPosition:"center center"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6  d-flex justify-content-center"},[a("div",{staticClass:"imgHide"},[a("div",{staticClass:"img-profile"})])]),a("div",{staticClass:"col-md-6 d-flex align-items-md-center justify-content-center"},[a("div",{staticClass:"titleHide mx-md-5"},[a("div",{staticClass:"top-content text-center"},[a("h1",{staticClass:"text_effect pb-3"},[t._v("Hi I'm Kerry ")]),a("h4",{staticClass:"text_effect py-2"},[t._v("世上沒有困難事")]),a("h4",{staticClass:"text_effect py-2"},[t._v("熱誠及興趣能維持你向前的動力")])])])])])])])}],x={name:"MyHeader"},y=x,S=Object(c["a"])(y,w,k,!1,null,"6ec20ca0",null),M=S.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"about"}},[a("div",{staticClass:"container"},[a("h1",{staticClass:"myTitle-white"},[t._v("About Myself")]),a("div",{staticClass:"row aboutHide",class:{active:t.aboutShow}},[t._m(0),t._m(1)])])])},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-6"},[s("img",{staticClass:"img-fluid myShadow rounded my-3",attrs:{src:a("3aa6"),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-6 d-flex align-items-center"},[a("div",{staticClass:"p-4 my-3 bgWhite"},[a("p",[t._v("Hello 您好，我叫做 陳宏宇 ( Kerry )")]),a("p",[t._v("我是個善於交流及溝通的人，同時也是有個快樂家庭的小爸爸，這個身份讓我獲得更多的責任感及抗壓能力。")]),a("p",[t._v("我擁有三年的前端開發經驗（Vue: 3年, React: 2月）。")]),a("p",[t._v("近一年已能獨立主導大型應用、規劃前端團隊人力資源、協調跨部門的合作方針、引入部分核心技術提升團隊開發量能。")]),a("p",[t._v("我喜歡學習新的事物並研究各種技術來整合使用，所以會定期設定讀書單或是線上課程學習列表。")]),a("p",[t._v("並在不斷的追求、不斷的學習、不斷的創作的過程中，看到他人對於我的作品展現出笑容，這成就感使我覺得人生無比富有。")])])])}],E={name:"MyAbout",props:{aboutShow:{type:Boolean,required:!0}}},A=E,I=(a("b149"),Object(c["a"])(A,H,j,!1,null,"352797ba",null)),P=I.exports,L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"skill"}},[a("div",{staticClass:"container"},[a("h1",{staticClass:"myTitle-white"},[t._v("Skills")]),a("div",{staticClass:"row d-flex justify-content-center"},[a("div",{staticClass:"col-md-6 text-white skillList"},[a("h3",[t._v("FE-Framework ▾")]),a("ul",[a("li",[a("b",[t._v("Vue")]),t._v(" - Vue3／Vuex／Pinia／Router")]),a("li",[a("b",[t._v("React")]),t._v(" - Redux(thunk／Saga)／Hooks／Router")]),a("li",[a("b",[t._v("other")]),t._v(" - i18n")])]),a("h3",[t._v("Builder ▾")]),a("ul",[a("li",[a("b",[t._v("Webpack／Vite")])])]),a("h3",[t._v("DevOps ▾")]),a("ul",[a("li",[a("b",[t._v("Rancher／Jenkins／Docker／Nginx／Linux")])])]),a("h3",[t._v("Cowork ▾")]),a("ul",[a("li",[a("b",[t._v("Git／Slack／Jira／Trello／Zeplin／Figma")])])]),a("h3",[t._v("Testing ▾")]),a("ul",[a("li",[a("b",[t._v("Jest／Puppeteer(E2E)")])])]),a("h3",[t._v("Back-End ▾")]),a("ul",[a("li",[a("b",[t._v("Nuxt／Express")])])]),a("h3",[t._v("UI-Framework ▾")]),a("ul",[a("li",[a("b",[t._v("Bootstrap／AntD／Element-UI／Vant／Tailwind／Windy")])])]),a("h3",[t._v("Database ▾")]),a("ul",[a("li",[a("b",[t._v("Firebase／MongoDB")])])])])])])])}],R={name:"MySkill",props:{},data:function(){return{}}},T=R,D=(a("06b3"),Object(c["a"])(T,L,$,!1,null,"135e3699",null)),W=D.exports,V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"works"}},[s("div",{staticClass:"container"},[s("h1",{staticClass:"myTitle-blue"},[t._v("Projects")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"transform_3d"},[s("div",{staticClass:"myCard"},[s("div",{staticClass:"myCard_img"},[s("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.openModal(t.works[0])}}},[s("img",{staticClass:"img-fluid",attrs:{src:a("fdd1"),alt:"img"}})])])]),s("h3",{staticClass:"text-center py-4"},[t._v("CRM Web App")])])]),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"transform_3d"},[s("div",{staticClass:"myCard"},[s("div",{staticClass:"myCard_img"},[s("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.openModal(t.works[1])}}},[s("img",{staticClass:"img-fluid",attrs:{src:a("692b"),alt:"img"}})])])]),s("h3",{staticClass:"text-center py-4"},[t._v("猴寶拍拍-電子商務")])])]),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"transform_3d"},[s("div",{staticClass:"myCard"},[s("div",{staticClass:"myCard_img"},[s("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.openModal(t.works[2])}}},[s("img",{staticClass:"img-fluid",attrs:{src:a("5e73"),alt:"img"}})])])]),s("h3",{staticClass:"text-center py-4"},[t._v("夢想家 Blog")])])]),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"transform_3d"},[s("div",{staticClass:"myCard"},[s("div",{staticClass:"myCard_img"},[s("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.openModal(t.works[3])}}},[s("img",{staticClass:"img-fluid",attrs:{src:a("7faf"),alt:"img"}})])])]),s("h3",{staticClass:"text-center py-4"},[t._v("Unsplash API 圖片牆")])])]),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"transform_3d"},[s("div",{staticClass:"myCard"},[s("div",{staticClass:"myCard_img"},[s("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.openModal(t.works[4])}}},[s("img",{staticClass:"img-fluid",attrs:{src:a("d7ee"),alt:"img"}})])])]),s("h3",{staticClass:"text-center py-4"},[t._v("Youtube API 影片搜尋")])])]),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"transform_3d"},[s("div",{staticClass:"myCard"},[s("div",{staticClass:"myCard_img"},[s("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.openModal(t.works[5])}}},[s("img",{staticClass:"img-fluid",attrs:{src:a("5f23"),alt:"img"}})])])]),s("h3",{staticClass:"text-center py-4"},[t._v("戰船遊戲")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"worksModal",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content myCard_content"},[s("div",{staticClass:"modal-header border-0"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.worksModal.title))]),t._m(0)]),s("div",{staticClass:"modal-body"},[s("img",{staticClass:"img-fluid",attrs:{src:t.worksModal.imgUrl,alt:"img"}}),s("ul",{staticClass:"mt-3"},t._l(t.worksModal.content,(function(e,a){return s("li",{key:a,staticClass:"py-2"},[t._v(t._s(e))])})),0)]),s("div",{},[""==t.worksModal.href?s("div",{staticClass:" text-center m-3 pb-4"},[s("button",{staticClass:"goToWeb-noDemo rounded-pill"},[t._v("版權問題無法提供 Demo")])]):s("div",{staticClass:" text-center m-3 pb-4"},[s("a",{staticClass:"goToWeb rounded-pill",attrs:{href:t.worksModal.href,target:"_blank"}},[t._v("點擊前往作品網頁")])])])])])]),s("div",{staticClass:"d-none"},t._l(t.works,(function(t,e){return s("img",{key:e,attrs:{src:t.imgUrl,alt:""}})})),0)])},U=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close text-white",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],O=a("1157"),J=a.n(O),N={name:"MyWorks",data:function(){return{worksModal:{},works:[{title:"CRM Web App 客戶關係管理網頁平台",imgUrl:"https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/crm.png?alt=media&token=8de94e5d-615d-4afb-b55a-691878d34240",href:"",content:["前端框架為 Vue.js 前後端分離使用相關 Vue 套件如 Cli3、Router","Vux 管理全域 User & Customer info 資料，使 component 能更靈活的取得父級資訊","使用 primse 包裝 axios 套件串接 後端 Java RESTful API","整合 Google Maps API 提升客戶列表使用者體驗"]},{title:"猴寶拍拍-電子商務",imgUrl:"https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/monkey.png?alt=media&token=80a4d221-a852-4517-8867-d61e4511403a",href:"https://livepower0815.github.io/my-vue-cli3/dist/",content:["使用 Vue cli、webpack 開發擁有購物車及結帳系統的 SPA 網頁","搭建 Heroku 串接 智付通第三方金流 API","axios 串接後端 API 商務","使用 Bootstrap4、SASS 製作 RWD 網頁","擁有可編輯上傳商品的後台 dashboard (如需後台帳密可洽詢本人)"]},{title:"夢想家 Blog",imgUrl:"https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/blog.png?alt=media&token=22a92f96-5b8b-45df-8e68-7912b1051fcc",href:"https://limitless-wildwood-49993.herokuapp.com/",content:["使用 node.js、express 開發的後端 Blog","使用 EJS 樣板渲染前端網頁","使用 Bootstrap4 製作 RWD 網頁","整合 Firebase 完成會員功能、留言板功能","擁有可編輯上傳文章的後台 dashboard (如需後台帳密可洽詢本人)","開啟網頁時 Heroku 需喚醒請耐心等待一會"]},{title:"Unsplash API 圖片牆",imgUrl:"https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/image-wall.png?alt=media&token=2d34037e-40f3-457b-bf11-8f1f45674aca",href:"https://livepower0815.github.io/react-image-wall/build/",content:["使用 React 框架開發","搭配 Unsplash API 撰寫圖片搜尋應用"]},{title:"Youtube API 影片搜尋",imgUrl:"https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/video.png?alt=media&token=f54a3550-478e-4f87-b3a0-f12f2d028038",href:"https://livepower0815.github.io/React-youtube-API/build/",content:["使用 React 框架開發","搭配 Youtube API 撰寫影片搜尋應用"]},{title:"戰船遊戲",imgUrl:"https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/ship.png?alt=media&token=9e8f65a7-deb1-4b13-a69e-9c766fb044c6",href:"https://livepower0815.github.io/test1/hexSchool/the%20first%20days/battleShip.html",content:["JavaScript 深入淺出 練習作品","紅心代表擊中 黑心代表MISS","環境設定: 紅心條 數量:3 , 長度:3 位置採用隨機生成"]}]}},methods:{openModal:function(t){this.worksModal=t,J()("#worksModal").modal("show")}}},q=N,B=(a("3899"),Object(c["a"])(q,V,U,!1,null,"43084aba",null)),K=B.exports,F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"experience"}},[s("div",{staticClass:"container"},[s("h1",{staticClass:"myTitle-white"},[t._v("Experience")]),s("div",{staticClass:"row d-flex justify-content-center py-4"},[s("div",{staticClass:"col-md-3 justify-content-md-end d-none d-md-flex"},[s("div",{staticClass:"position-relative exInner"},[s("img",{staticClass:"img-fluid exImg",attrs:{src:a("beb6"),alt:"img"}}),s("div",{staticClass:"exLine"})])]),s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"exContent text-white"},[s("h4",{staticClass:"pb-4"},[t._v("天堂遊戲 | 前端工程師 | "),s("span",{staticClass:"d-inline-block"},[s("i",{staticClass:"fas fa-clock"}),t._v(" 2020 年 3 月 - 在職")])]),s("p",{staticStyle:{"font-weight":"500","font-size":"20px"}},[t._v("▲ Milestone：")]),s("p",{staticStyle:{"line-height":"32px"}},[t._v("\n            ◎ 聊天系統引入 TypeScript 固定各類訊息格式，並充分利用 VS Code toolling 特性。"),s("br"),t._v("\n            ◎ 新專案導入 Vue3 配上 Vite 打包環境，節省開發時間及優化前端效能。"),s("br"),t._v("\n            ◎ 實作片段緩存演算，以整合後端API及本地訊息資料，達到本地端片段緩存。"),s("br"),t._v("\n            ◎ Assist the team to introduce the Unit Testing and lead the demo of the asynchronous process."),s("br"),t._v("\n            ◎ CICD打包部署流程建置／docker file pipe 優化／gitlab CD 拆分環境／ rencher and jenkins config setting。"),s("br"),t._v("\n            ◎ 引入多語系並實作語言json包／後端文案整合／部分語系拆分客製化樣板"),s("br"),t._v("\n            ◎ 實作智能客服流程ＧＵＩ設定介面，提升使用直覺感。"),s("br"),t._v("\n            ◎ 整合 Jira API 因應公司任務流程來客製化顯示介面，以提升同仁對於Jira使用度及降低主管查詢團隊工時的不便性。"),s("br"),t._v("\n            ◎ 漸進式重構 Knockout 至 Vue 框架，達成前後端分離。局部效能、維護性及明確分工得到有效提升。\n          ")]),s("p",{staticStyle:{"font-weight":"500","font-size":"20px"}},[t._v("▲ Responsible for：")]),s("p",[s("i",{staticClass:"fas fa-tools pr-3"}),t._v(" IM Application")]),s("p",[t._v("\n            description：Like the What App Web。"),s("br"),t._v("\n            core tech：Vue3／TypeScript／Pinia／Vite／Docker／Jenkins\n          ")]),s("p",[s("i",{staticClass:"fas fa-tools pr-3"}),t._v(" CSR Application")]),s("p",[t._v("\n            description：Communication tool for customer feedback of the main product。"),s("br"),t._v("\n            core tech：Vue／Vuex／Element UI／Jest／i18n／Webpack／Docker／Rancher\n          ")]),s("p",[s("i",{staticClass:"fas fa-tools pr-3"}),t._v(" Jira 工單管理系統")]),s("p",[t._v("\n            description：內部需求工單管理系統"),s("br"),t._v("\n            core tech：Vue／Antd UI／Echarts／Webpack／Docker／Rancher\n          ")]),s("p",[s("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 彩票開獎網")]),s("p",[t._v("\n            description： Instant and historical records of all kinds of lottery draws。"),s("br"),t._v("\n            core tech：Nuxt／Linux／Echarts／Canvas\n          ")]),s("p",[s("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 彩票官網、後台")]),s("p",[t._v("\n            description： refactoring the old structure and developed at the same time。"),s("br"),t._v("\n            core tech：Knockout／Golang／Vue／Linux／Jenkins\n          ")])])])]),s("div",{staticClass:"row d-flex justify-content-center py-4"},[s("div",{staticClass:"col-md-3 justify-content-md-end d-none d-md-flex"},[s("div",{staticClass:"position-relative exInner"},[s("img",{staticClass:"img-fluid exImg",attrs:{src:a("beb6"),alt:"img"}}),s("div",{staticClass:"exLine"})])]),s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"exContent text-white"},[s("h4",{staticClass:"pb-4"},[t._v("雲中雲 | 前端工程師 | "),s("span",{staticClass:"d-inline-block"},[s("i",{staticClass:"fas fa-clock"}),t._v(" 2019 年 11 月 -\n              2020 年 1 月")])]),s("p",[s("i",{staticClass:"fas fa-tools pr-3"}),t._v(" admin 後台串接 API")]),s("p",[s("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 購彩網前台架構遷移，整個專案由 React 重構成 Vue 架構")]),s("p",[t._v("在任職期間研究並開始使用 React 框架，因為有個重大遷移專案，必須熟悉 React 及 Vue 兩者的架構才能做到最相容的轉換，UI 元件的客製化及 jsx\n            的使用上得到了飛躍式的進步，並且在12月底完成遷移並測試完成。可惜在1月初陸方資金發生了一些問題，遺憾的無緣與台灣同事再繼續共事。")])])])]),s("div",{staticClass:"row d-flex justify-content-center py-4"},[s("div",{staticClass:"col-md-3 justify-content-md-end d-none d-md-flex"},[s("div",{staticClass:"position-relative exInner"},[s("img",{staticClass:"img-fluid exImg",attrs:{src:a("beb6"),alt:"img"}}),s("div",{staticClass:"exLine"})])]),s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"exContent text-white"},[s("h4",{staticClass:"pb-4"},[t._v("昕力資訊 | 前端工程師 | "),s("span",{staticClass:"d-inline-block"},[s("i",{staticClass:"fas fa-clock"}),t._v(" 2019 年 2 月 -\n              2019 年 10 月")])]),s("p",[s("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 串接後端 Java API：CRM 專案功能查詢、新增、刪除、修改")]),s("p",[s("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 前端 UI/UX 調整頁面邏輯：List Data 的 filter、彈跳資訊或提示的視窗、相關 loading 效果、等...")]),s("p",[s("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 協助解決 Browser (Chrome、Safari、IE) 與裝置(電腦、手機、平板)之間的相容問題")]),s("p",[s("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 透過 Sourcetree 幫前端設計團隊撰寫假資料以利設計師切版時候的作業，並有效與前端設計公司做版面整合及調整")]),s("p",[t._v("主要負責客戶關係管理專案前端 Vue.js，依照客戶 SPEC 串接後端 API 、撰寫前端邏輯、向設計師溝通調整 UI/UX layout。")])])])]),s("div",{staticClass:"row d-flex justify-content-center py-4"},[s("div",{staticClass:"col-md-3 justify-content-md-end d-none d-md-flex"},[s("div",{staticClass:"position-relative exInner"},[s("img",{staticClass:"img-fluid exImg",attrs:{src:a("f82e"),alt:"img"}})])]),s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"exContent text-white"},[s("h4",{staticClass:"pb-4"},[t._v("國立虎尾科技大學 | 工業工程管理 | "),s("span",{staticClass:"d-inline-block"},[s("i",{staticClass:"fas fa-clock"}),t._v(" 2010 年 6 月\n              畢業")])]),s("p",[s("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 畢業聯誼會-名人演講講座策劃：")]),s("p",[t._v("當時向經紀公司請了陳漢典來學校，我必須在校務跟經紀公司之間做好溝通的橋樑，協調演講費部分的定案，讓經紀公司可以接受且校務局的合理，在這過程去提升我的協調能力。")]),s("p",[s("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 吉他社-社團期末發表總召：")]),s("p",[t._v("負責活動人員的安排、活動流程制定、場地選擇與探勘、拜訪周邊商家提供活動贊助。")])])])])])])}],Y={name:"MyExperience",props:{}},z=Y,X=Object(c["a"])(z,F,G,!1,null,"7522e6f0",null),Z=X.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"contact"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row d-flex justify-content-center"},[a("div",{staticClass:"col-md-6 text-center text-white"},[a("div",{staticClass:"contact_card",class:{active:t.contactShow}},[a("h1",{staticClass:"py-4"},[t._v("Contact Me")]),t._m(0),a("h3",{staticClass:"py-3"},[t._v("宏宇 ( Kerry )")]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6)])])])])])},tt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row d-flex justify-content-center"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"px-3"},[s("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:a("93dd"),alt:""}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h5",{staticClass:"pb-3"},[a("a",{staticClass:"text-white",attrs:{href:"mailto:livepower0815@gmail.com"}},[a("i",{staticClass:"fas fa-envelope"}),t._v("\n              livepower0815@gmail.com")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h5",{staticClass:"pb-3"},[a("i",{staticClass:"fas fa-phone"}),t._v(" 0975-320-521")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"https://www.facebook.com/profile.php?id=100000312843510",target:"_blank"}},[a("i",{staticClass:"fab fa-facebook-square"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"https://github.com/livepower0815/my-resume",target:"_blank"}},[a("i",{staticClass:"fab fa-github"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"https://www.cakeresume.com/livepower0815",target:"_blank"}},[a("i",{staticClass:"fas fa-copyright"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"https://www.linkedin.com/in/kerry-chen-39558617b/",target:"_blank"}},[a("i",{staticClass:"fab fa-linkedin"})])}],et={name:"MyContact",props:{contactShow:{type:Boolean,required:!0}}},at=et,st=Object(c["a"])(at,Q,tt,!1,null,"479b5999",null),it=st.exports,nt={name:"home",components:{Nav:g,MyHeader:M,MyAbout:P,MySkill:W,MyWorks:K,MyExperience:Z,MyContact:it},data:function(){return{viewprotH:0,viewprotW:0,windowH:0,navLinksH:{}}},computed:{contactShow:function(){var t=this;return t.viewprotH>t.navLinksH.contact-t.windowH/3},aboutShow:function(){var t=this;return t.viewprotH>t.navLinksH.about-t.windowH/4},bgImgScroll:function(){var t=this,e="0px "+t.viewprotH/2+"px",a="center center";return t.viewprotW<768?a:e},contactScroll:function(){var t=this,e="0px "+(t.viewprotH-t.navLinksH.contact)+"px",a="center center";return t.viewprotW<768?a:e},navActive:function(){var t=this,e="";return e=t.viewprotH+5>t.navLinksH.contact?"contact":t.viewprotH+5>t.navLinksH.experience?"experience":t.viewprotH+5>t.navLinksH.works?"works":t.viewprotH+5>t.navLinksH.skill?"skill":t.viewprotH+5>t.navLinksH.about?"about":"",e}},mounted:function(){var t=this,e=document.querySelector("#about"),a=document.querySelector("#skill"),s=document.querySelector("#works"),i=document.querySelector("#experience"),n=document.querySelector("#contact");t.viewprotW=window.outerWidth,t.windowH=window.outerHeight,window.addEventListener("resize",(function(){t.viewprotW=window.outerWidth,t.windowH=window.outerHeight})),window.addEventListener("scroll",(function(){t.viewprotH=window.pageYOffset,t.navLinksH.about=e.offsetTop,t.navLinksH.skill=a.offsetTop,t.navLinksH.works=s.offsetTop,t.navLinksH.experience=i.offsetTop,t.navLinksH.contact=n.offsetTop})),setTimeout((function(){document.querySelector(".titleHide").classList.add("active")}),2500),setTimeout((function(){document.querySelector(".imgHide").classList.add("active")}),2e3)}},ot=nt,rt=(a("21bb"),Object(c["a"])(ot,p,f,!1,null,null,null)),ct=rt.exports;s["a"].use(u["a"]);var lt=new u["a"]({routes:[{path:"/",name:"home",component:ct}]}),dt=a("2f62");s["a"].use(dt["a"]);var vt=new dt["a"].Store({state:{},mutations:{},actions:{}});a("4989");s["a"].config.productionTip=!1,s["a"].use(n.a,{container:"body",duration:1e3,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),new s["a"]({router:lt,store:vt,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("e332")},"5e73":function(t,e,a){t.exports=a.p+"img/blog.86450ce1.png"},"5f23":function(t,e,a){t.exports=a.p+"img/ship.8ca958f2.png"},"692b":function(t,e,a){t.exports=a.p+"img/monkey.0b52e622.png"},"7a98":function(t,e,a){},"7faf":function(t,e,a){t.exports=a.p+"img/image-wall.51cc4143.png"},"93dd":function(t,e,a){t.exports=a.p+"img/flower.d09f0ff0.jpg"},9976:function(t,e,a){},a102:function(t,e,a){},b149:function(t,e,a){"use strict";a("bad3")},bad3:function(t,e,a){},beb6:function(t,e,a){t.exports=a.p+"img/iconfinder_Notebook_by_Artdesigner_60879.759c605e.png"},d7ee:function(t,e,a){t.exports=a.p+"img/video.36cc7193.png"},e203:function(t,e,a){},e332:function(t,e,a){},f82e:function(t,e,a){t.exports=a.p+"img/Graduation.aee1f51b.png"},fdd1:function(t,e,a){t.exports=a.p+"img/crm.e9108981.png"}});
//# sourceMappingURL=app.9b1ecd77.js.map
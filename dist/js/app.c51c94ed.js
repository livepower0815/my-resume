(function(t){function a(a){for(var i,l,r=a[0],o=a[1],n=a[2],d=0,p=[];d<r.length;d++)l=r[d],e[l]&&p.push(e[l][0]),e[l]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);f&&f(a);while(p.length)p.shift()();return c.push.apply(c,n||[]),s()}function s(){for(var t,a=0;a<c.length;a++){for(var s=c[a],i=!0,l=1;l<s.length;l++){var o=s[l];0!==e[o]&&(i=!1)}i&&(c.splice(a--,1),t=r(r.s=s[0]))}return t}var i={},e={app:0},c=[];function l(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5273d30c"}[t]+".js"}function r(a){if(i[a])return i[a].exports;var s=i[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.e=function(t){var a=[],s=e[t];if(0!==s)if(s)a.push(s[2]);else{var i=new Promise(function(a,i){s=e[t]=[a,i]});a.push(s[2]=i);var c,o=document.createElement("script");o.charset="utf-8",o.timeout=120,r.nc&&o.setAttribute("nonce",r.nc),o.src=l(t),c=function(a){o.onerror=o.onload=null,clearTimeout(n);var s=e[t];if(0!==s){if(s){var i=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.src,l=new Error("Loading chunk "+t+" failed.\n("+i+": "+c+")");l.type=i,l.request=c,s[1](l)}e[t]=void 0}};var n=setTimeout(function(){c({type:"timeout",target:o})},12e4);o.onerror=o.onload=c,document.head.appendChild(o)}return Promise.all(a)},r.m=t,r.c=i,r.d=function(t,a,s){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)r.d(s,i,function(a){return t[a]}.bind(null,i));return s},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/my-resume/dist/",r.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],n=o.push.bind(o);o.push=a,o=o.slice();for(var d=0;d<o.length;d++)a(o[d]);var f=n;c.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},1263:function(t,a,s){t.exports=s.p+"img/vue.c5439280.png"},"15eb":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA4CAYAAABNGP5yAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAACqFJREFUaIHlmltsXMUZx/9z7l6vdze2147Xjh2T2ODYoRiXJFzVSnWapkmJUkWqGqkiQC9BvUogAq1aoj4QVFFkWiQotKXtCwKpxX1oUSlIoAKhrQmQQgI4sR3biS/xbvZ+9lxm+mDP8Z7d9WXjXccS/7c9O2dm/r/5Zr7v7FmCEurnt6/bwEAepAy9hNBfUuXSM0dfgFHKMUotUopOuHEw3AkBivMFpWOM4OG1DGJFABY0nitKx4goHvOlZ575wUvIrGTMUuuyACzbeK7WIIiiAFy28VytIRDLAvCzPeuaBYk8SCgOrch4rtYAiEUBlM14rq4giIIAVs14jijoOIFwLKCHn14tEC4AV8p4rlYTBAHWjvFcrQYIcnRf9ZNrzXiuKOg4oeKvA8bMY6UGQe7bFWBahQaRGhBKUheWT+WICHLvrgDTvNUAoyBU/9SBmAfA9SkDkQ+A61MCQljwGyKAiR5Ykg8mUUDZiudZNgkQGsHwq7O2b7jYe6UlW3AQgrYmI4IxIG4IiBoS9JS5vtj7lwbAtcZAZBu32cKBvJSWD4DrCoMolXGu4gFwrTKIUhvnunwAXGUGUYxxQjBVbP8rB+CMXloQxRiXtEoWDG0+HvBbvXjz5eKmvWAdsFJdZh1RjHFFq0Rt63UIbPws2tqvQXd39zuSJH0rFAoNLHe80kVAroqMiMsx7gldiy2dW9HV1YWKigoAuN6yrLfHxsaeUFX1J8FgML7kNMsWAblaICJWsuKdnZ3cuEu2bUMUxTEA329sbPzLYn2WLwJyVSAiEkUa97f0oP3qjoLGbdsGYwySJEEURQBoAvDn0dHRfkLI95qamkYL9V0WAIZJocgLmJoDkclkEM4s/hPEclZc13VomsZNw7IsRKNReL1eqKoKQRBun5iJbAMQKjRGWQBs2PZV6AZDavQ4zNhE0fdz477m69F+dQe6urogSfNTTSQSSCaTCAaD0DQNwHwEiKKIqqoqyLIMxhgIIfjgwqWGl4+f+FHvju7HcscqC4Dg+ka0dt2MoaFt+OS910En310WiEIrriiKs7pcXq8XHo8HgjAfZdltFEUBYwyZTAaapuHU+TBiqcxhAKsDAAAkSUJbWxtCoRA++qgbF0feh3F+oCCIbOMbWzdh69at8Hq9AIBMJgNBEECIO4Vw83yVGWNgjDnXbduGpmmwKcVIOIFwSt907ty5iubm5rRrnmVxn6XKykr09PRgorERp0+3IhMegnF+AHYqsuge58ZUVXX1ZxgGFGX+7OBgCCEuSHzLTMbS2ODT8MpQRHhndPpRAPdk91c2ANkTZYyhvr4e9fX1GBnZiDP+ZkiN21Hrb8DmtqvR2dkJxpjrgMs2Y9u2EwWyLLvGSafT0DQtL0IAIJVKYWgqjFMXIthcXYGPx2b2Y7UACILgrCIwC8E0Taxfvx6hUAjhcBjt7e0QBMG1ypTSvNXk4c1DnX9n2zZUVc1ra5omFEWBx+PBualBJBMJjMQttAWUug/Onm3pvOqqEWee5QKQSqUQj88XYoQQSJIEVVUhyzIaGhoKhjhjDJRS1zVJklwHHpcois510zQdeNlRMjETwfBMHA0qxalwhpw8e/EJV9+CpMYA+FbsOEderzfPSLaJWCwG27ahKAr8fj8kSXLSGNdcRed8tizLaafrumvLcNOmaYIQgng8juHhYVwTUNAVCsCiFoyMjtPjU7e65lTTsb2psuGaF2W1wiolAEEQXLmbG+Lyer2wbRu6rmNychLJZDJvH+emP94fIaRgCQzM1ggnT57EiRMnMDMzAzETx/4tdbhxUz3OTc5gYGzGd/zEyc/z9s6Ix+4/4Gep5LNGeGSPmUmv6Gy4ECXYsfsb+MxNX4QgSjAMIy/Uc8VTWCAQAGMMmqaBMYZ0Og1FUSBJEizLAmMMsiyDUuqKqEgkguHhYUQiEdi2DUqpaytIiopTEQvPvTeOI3t3/PvO3bdudwHIBZEKj+xlmbSY+/1yNDg6jamohXW16/GF/Xfguh29UJYAkC1N0+D3+wHMrqiqqq7UB8ABEA6HMTg4iEQisWS/giBgwpIRNxXjobv3qcAi/w84dv8Bv52I/0G/NLqnWBAj49MYj8zvqEBNPXr334GeW3ZBlOQF7+OmdF2Hx+OBz+dzSt1cRSIRDA0NIRwOO2dHdoYA4PqcHTGWVoVrOzZ/u6er6zdL/lRxOSDGJy5i5KKZdz1QU4/vHn0S/nVBZDIZiKIIURSdSeq6DlmWXXtfVVX4fD7nGjd+6dIllzHG2LK2GlcwGLx3165djy5p6J9vfJh59T+Dz+3e/bk+UanqsK1UG2xr0fSZSqcQSdG863o6CcMw0NZ1gxPS2SvD0x1fuVgsBkopDMOAz+fDwMAAhoeHoeu60ye/n6dZZw6plJMWc88LQsh0NBr9en9//+JGsnXkkReiP37ipX2VTVtqKurb+4laYS/UlgCQxMLB9b+BN5FKzNYHhTLF3AQBzK6+aZpgjOHZv7+OSCLtmOPKTZPAbOjbtg1JkvLAUEqhadrjhw4d0gGg6ENuORGRTKWQzFBYWYg8/lqEOm5BcPMNMC0bLS0trn75anHZtg1ZlqEoCt4bj6Dv1Q8hMxut1R6XIf7Ul50ieYFV6CEKwLSu6wf6+/stYAWVYHZEVNa1/1XIiQh5LgI8/lq0XLcTG2+4HZW1GwAAZ86cQSQScfXHQzSZTDoFFKUUF5MZ/O6/oxC9fvxj8CJGEu5yhRDiHJSFqsVcSZL0diwWc950luwX/GP3H/CzePyP6ejoly+MjYq0ogFsXQc8NU0F27e0tOC2227jkyrYxqIMvz9+Bq8OR2cv2Ba8mTDuuXkzVGbmVYqFZJomRFF0nhvm0uU4gGO6rj9d8nc5j9z3lSoT635a3br9a5TSpunpaSdV5WrPnj0IBoN51/kh+MaZafz2nTFkLOq8nWaWge4qE/u6GpBOJl2HKd82C4kXVnPKAHiobC+znn/+eSUSidxt2/YDC4EIhULo7e11nvKcPG1ZmEzZeO2T85hKmKhSJViMImHYYAwQbQM9dRpqxfxUm202OwMIgsBXPwPgGUrpw4cPHx4v+2vNpUDs3LkTdXV1rpVLWxSPv/YRKhQJA+fjYIwhWKnApAzTSRM3bfBhYHAU39m2AT6SDyG3JpirOSzDMJ7ixnnbVXuv29fXp6qqejel9Eg2iJqaGuzdu9fV9m8fjuNP705AFIAbm/z417koRAGo8ygIVSkYjxuYSBi4Sk7i4LUhwJ79J75pmnlbYC4rfKzr+pfuuuuus7nzWvU3/IVA9PT0oLGxEQBwajKGoy++BcumEGQV9QEvan1enJ5Jw6eKuL7Bi49n0ojoFtKGhd2NErY1eFxPmsC8cQB3HDx48K2F5nPF/uKQDaKysrJpy5YtiBkUj7xyCsORNJhtgtoWYNvorNEwkrDR3VyDN8+nIQqARxIhCkAqrePOrhoE5dmtsFzjXFf8zy4cRFtb2y+mUnbF+xeiBdu1VnswMhOHYVoQZRmEzOf86goJm6oI0snkso1zXXEAXBwEY+yIIAiFi4fCcp3qxY67ZgBwcRCEkAcANC7SdEXGudYcAK6+vj5V07RvAjgCN4iSGOdaswC4OAhK6Q8FQXipVMa5/g+Fr+8aZYyHoAAAAABJRU5ErkJggg=="},2238:function(t,a,s){"use strict";var i=s("49e1"),e=s.n(i);e.a},2261:function(t,a,s){t.exports=s.p+"img/nodejs.36700bee.png"},2407:function(t,a,s){t.exports=s.p+"img/firebase.a6c26916.png"},"31c7":function(t,a){t.exports="data:image/png;base64,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"},"3aa6":function(t,a,s){t.exports=s.p+"img/aboutme.5de1e4b4.jpg"},"3f65":function(t,a,s){t.exports=s.p+"img/javascript.7d1ebefa.png"},"49e1":function(t,a,s){},"56d7":function(t,a,s){"use strict";s.r(a);s("cadf"),s("551c"),s("097d");var i=s("2b0e"),e=s("f13c"),c=s.n(e),l=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],o=(s("5c0b"),s("2877")),n={},d=Object(o["a"])(n,l,r,!1,null,null,null);d.options.__file="App.vue";var f=d.exports,p=s("8c4f"),v=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("nav",{staticClass:"navbar navbar-expand-lg myNav"},[t._m(0),t._m(1),i("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarTogglerDemo03"}},[i("ul",{staticClass:"navbar-nav ml-auto mt-2 mt-lg-0"},[i("li",{staticClass:"nav-item"},[i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about",expression:"'#about'"}],staticClass:"nav-link",class:{active:"about"==t.navActive},attrs:{href:"#about"}},[t._v("About")])]),i("li",{staticClass:"nav-item"},[i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#skill",expression:"'#skill'"}],staticClass:"nav-link",class:{active:"skill"==t.navActive},attrs:{href:"#skill"}},[t._v("Skills")])]),i("li",{staticClass:"nav-item"},[i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#works",expression:"'#works'"}],staticClass:"nav-link",class:{active:"works"==t.navActive},attrs:{href:"#works"}},[t._v("Projects")])]),i("li",{staticClass:"nav-item"},[i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#experience",expression:"'#experience'"}],staticClass:"nav-link",class:{active:"experience"==t.navActive},attrs:{href:"#experience"}},[t._v("Experience")])]),i("li",{staticClass:"nav-item"},[i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact",expression:"'#contact'"}],staticClass:"nav-link",class:{active:"contact"==t.navActive},attrs:{href:"#contact"}},[t._v("Contact")])])])])]),i("div",{staticClass:"h100 top-img text-white d-flex align-items-center",style:{backgroundPosition:t.bgImgScroll}},[t._m(2)]),i("div",{style:{backgroundPosition:t.aboutScroll},attrs:{id:"about"}},[t._m(3)]),t._m(4),i("div",{attrs:{id:"works"}},[i("div",{staticClass:"container"},[i("h1",{staticClass:"myTitle-blue"},[t._v("Projects")]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"p-3 transform_3d"},[i("h3",{staticClass:"text-center py-4"},[t._v("猴寶拍拍-購物網")]),i("div",{staticClass:"myCard"},[i("div",{staticClass:"myCard_img"},[i("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.openModal(t.works[0])}}},[i("img",{staticClass:"img-fluid",attrs:{src:s("692b"),alt:"img"}})])])])])]),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"p-3 transform_3d"},[i("h3",{staticClass:"text-center py-4"},[t._v("夢想家 Blog")]),i("div",{staticClass:"myCard"},[i("div",{staticClass:"myCard_img"},[i("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.openModal(t.works[1])}}},[i("img",{staticClass:"img-fluid",attrs:{src:s("5e73"),alt:"img"}})])])])])]),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"p-3 transform_3d"},[i("h3",{staticClass:"text-center py-4"},[t._v("BMI 計算器")]),i("div",{staticClass:"myCard"},[i("div",{staticClass:"myCard_img"},[i("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.openModal(t.works[2])}}},[i("img",{staticClass:"img-fluid",attrs:{src:s("9287"),alt:"img"}})])])])])]),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"p-3 transform_3d"},[i("h3",{staticClass:"text-center py-4"},[t._v("會議室預約系統")]),i("div",{staticClass:"myCard"},[i("div",{staticClass:"myCard_img"},[i("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.openModal(t.works[3])}}},[i("img",{staticClass:"img-fluid",attrs:{src:s("9fcc"),alt:"img"}})])])])])]),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"p-3 transform_3d"},[i("h3",{staticClass:"text-center py-4"},[t._v("CSS 貪食蛇")]),i("div",{staticClass:"myCard"},[i("div",{staticClass:"myCard_img"},[i("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.openModal(t.works[4])}}},[i("img",{staticClass:"img-fluid",attrs:{src:s("b7a2"),alt:"img"}})])])])])]),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"p-3 transform_3d"},[i("h3",{staticClass:"text-center py-4"},[t._v("戰船遊戲")]),i("div",{staticClass:"myCard"},[i("div",{staticClass:"myCard_img"},[i("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.openModal(t.works[5])}}},[i("img",{staticClass:"img-fluid",attrs:{src:s("5f23"),alt:"img"}})])])])])])])])]),i("div",{staticClass:"d-none"},t._l(t.works,function(t,a){return i("img",{key:a,attrs:{src:t.imgUrl,alt:""}})}),0),i("div",{staticClass:"modal fade",attrs:{id:"worksModal",tabindex:"-1",role:"dialog"}},[i("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[i("div",{staticClass:"modal-content myCard_content"},[i("div",{staticClass:"modal-header border-0"},[i("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.works_modal.title))]),t._m(5)]),i("div",{staticClass:"modal-body"},[i("img",{staticClass:"img-fluid",attrs:{src:t.works_modal.imgUrl,alt:"img"}}),i("ul",{staticClass:"mt-3"},t._l(t.works_modal.content,function(a,s){return i("li",{key:s,staticClass:"py-2"},[t._v(t._s(a))])}),0)]),i("div",{},[i("div",{staticClass:" text-center m-3 pb-4"},[i("a",{staticClass:"goToWeb rounded-pill",attrs:{href:t.works_modal.href,target:"_blank"}},[t._v("點擊前往作品網頁")])])])])])]),t._m(6),t._m(7)])},m=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler text-white",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo03"}},[s("span",[s("i",{staticClass:"fas fa-list-ul"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[s("i",{staticClass:"fas fa-feather-alt"}),t._v(" Kerry Resume")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"top-content d-flex justify-content-center"},[s("h1",{staticClass:"text_effect"},[t._v("Hello I'm Kerry ")])])]),s("div",{staticClass:"col-md-6  d-flex justify-content-center"},[s("div",{staticClass:"img-profile"})])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"container"},[i("h1",{staticClass:"myTitle-white"},[t._v("About Myself")]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("img",{staticClass:"img-fluid myShadow rounded",attrs:{src:s("3aa6"),alt:""}})]),i("div",{staticClass:"col-md-6 d-flex align-items-center"},[i("div",{staticClass:"p-4 my-3 bgWhite"},[i("p",[t._v("Hello 您好，我叫做 陳宏宇 ( Kerry )")]),i("p",[t._v("2017年開始為自己定了前端的職涯方向，")]),i("p",[t._v("這段期間由於家庭因素的關係只能利用下班時間去做線上學習，")]),i("p",[t._v("目前已能獨立以Vue.js & Node.js架設商業的金流網頁，")]),i("p",[t._v("世上沒有困難的事情，")]),i("p",[t._v("只有熱誠跟興趣才能長久維持自己向前的動力。")])])])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"skill"}},[i("div",{staticClass:"container"},[i("h1",{staticClass:"myTitle-white"},[t._v("Skills")]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[i("div",{staticClass:"flip-card"},[i("div",{staticClass:"flip-card-inner"},[i("div",{staticClass:"flip-card-front"},[i("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:s("6d2e"),alt:"Avatar"}})]),i("div",{staticClass:"flip-card-back"},[i("h2",[t._v("HTML")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" 善用語意化命名結構")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" SVG 繪圖")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" SEO 搜尋優化")])])])])]),i("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[i("div",{staticClass:"flip-card"},[i("div",{staticClass:"flip-card-inner"},[i("div",{staticClass:"flip-card-front"},[i("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:s("8858"),alt:"Avatar"}})]),i("div",{staticClass:"flip-card-back"},[i("h2",[t._v("CSS")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" SASS 預處理器")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" RWD 手刻 breakpoints")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" Flex / Grid 排版")])])])])]),i("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[i("div",{staticClass:"flip-card"},[i("div",{staticClass:"flip-card-inner"},[i("div",{staticClass:"flip-card-front"},[i("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:s("3f65"),alt:"Avatar"}})]),i("div",{staticClass:"flip-card-back"},[i("h2",[t._v("JavaScript")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" 熟悉 DOM 模型、this、閉包、Prototype、AJAX 等基本概念")])])])])]),i("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[i("div",{staticClass:"flip-card "},[i("div",{staticClass:"flip-card-inner"},[i("div",{staticClass:"flip-card-front"},[i("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:s("60bd"),alt:"Avatar"}})]),i("div",{staticClass:"flip-card-back"},[i("h2",[t._v("jQuery")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" 靈活操作 DOM 元素")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" AJAX 方法使用")])])])])]),i("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[i("div",{staticClass:"flip-card"},[i("div",{staticClass:"flip-card-inner"},[i("div",{staticClass:"flip-card-front"},[i("img",{staticClass:"mt-3",staticStyle:{width:"180px",height:"180px"},attrs:{src:s("8898"),alt:"Avatar"}})]),i("div",{staticClass:"flip-card-back"},[i("h2",[t._v("Bootstrap")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" flexbox 網格")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" RWD 自適應排版")])])])])]),i("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[i("div",{staticClass:"flip-card"},[i("div",{staticClass:"flip-card-inner"},[i("div",{staticClass:"flip-card-front"},[i("img",{staticClass:"mt-5",staticStyle:{width:"130px",height:"130px"},attrs:{src:s("1263"),alt:"Avatar"}})]),i("div",{staticClass:"flip-card-back"},[i("h2",[t._v("Vue.js")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" data 雙向綁定")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" 模板元件化")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" Vue CLI")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" Router、 Vuex")])])])])]),i("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[i("div",{staticClass:"flip-card"},[i("div",{staticClass:"flip-card-inner"},[i("div",{staticClass:"flip-card-front"},[i("img",{staticStyle:{width:"200px",height:"200px"},attrs:{src:s("2261"),alt:"Avatar"}})]),i("div",{staticClass:"flip-card-back"},[i("h2",[t._v("Node.js")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v("  NPM 套件使用")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" express.js 架設後端邏輯")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" EJS 樣板使用")])])])])]),i("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[i("div",{staticClass:"flip-card"},[i("div",{staticClass:"flip-card-inner"},[i("div",{staticClass:"flip-card-front"},[i("img",{staticStyle:{width:"200px",height:"200px"},attrs:{src:s("2407"),alt:"Avatar"}})]),i("div",{staticClass:"flip-card-back"},[i("h2",[t._v("Firebase")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" 雲端 Data 存放")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" 會員資料管理及驗證")])])])])]),i("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[i("div",{staticClass:"flip-card"},[i("div",{staticClass:"flip-card-inner"},[i("div",{staticClass:"flip-card-front"},[i("img",{staticClass:"mt-3",staticStyle:{width:"150px",height:"170px"},attrs:{src:s("9808"),alt:"Avatar"}})]),i("div",{staticClass:"flip-card-back"},[i("h2",[t._v("Webpack")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v("  轉換 ES6、SASS、BABEL 檔案")])])])])]),i("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[i("div",{staticClass:"flip-card"},[i("div",{staticClass:"flip-card-inner"},[i("div",{staticClass:"flip-card-front"},[i("img",{staticClass:"mt-3",staticStyle:{width:"150px",height:"150px"},attrs:{src:s("683c"),alt:"Avatar"}})]),i("div",{staticClass:"flip-card-back"},[i("h2",[t._v("Git")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" Github 進行團隊協作")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" Github-Pages 前端部署")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" Heroku 後端部署")])])])])]),i("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[i("div",{staticClass:"flip-card"},[i("div",{staticClass:"flip-card-inner"},[i("div",{staticClass:"flip-card-front"},[i("img",{staticClass:"mt-3",staticStyle:{width:"150px",height:"170px"},attrs:{src:s("a4a6"),alt:"Avatar"}})]),i("div",{staticClass:"flip-card-back"},[i("h2",[t._v("ES6")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" 了解 Promise 非同步處理、解構賦值、其餘參數等概念")])])])])]),i("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"},[i("div",{staticClass:"flip-card"},[i("div",{staticClass:"flip-card-inner"},[i("div",{staticClass:"flip-card-front"},[i("img",{staticClass:"mt-3",staticStyle:{width:"150px",height:"150px"},attrs:{src:s("b700"),alt:"Avatar"}})]),i("div",{staticClass:"flip-card-back"},[i("h2",[t._v("Other")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" MVC、MVVM 開發風格")]),i("p",[i("i",{staticClass:"far fa-check-circle"}),t._v(" Photoshop 去背、切版、調色處理")])])])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"close text-white",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"experience"}},[i("div",{staticClass:"container"},[i("h1",{staticClass:"myTitle-white"},[t._v("Experience")]),i("div",{staticClass:"row d-flex justify-content-center py-4"},[i("div",{staticClass:"col-md-4 d-flex justify-content-md-end"},[i("div",{staticClass:"exImg",staticStyle:{width:"64px"}},[i("img",{staticClass:"img-fluid",attrs:{src:s("f4f3"),alt:"img"}})])]),i("div",{staticClass:"col-md-8"},[i("div",{staticClass:"exContent text-white"},[i("h4",{staticClass:"pb-3"},[t._v("國瑞汽車 | 品管員 | 2014 年 7 月 - 至今")]),i("p",[i("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 完成車檢驗")]),i("p",[i("i",{staticClass:"fas fa-tools pr-3"}),t._v(" QCC品管圈活動")])])])]),i("div",{staticClass:"row d-flex justify-content-center py-4"},[i("div",{staticClass:"col-md-4 d-flex justify-content-md-end"},[i("div",{staticClass:"exImg",staticStyle:{width:"64px"}},[i("img",{staticClass:"img-fluid",attrs:{src:s("c0fa"),alt:"img"}})])]),i("div",{staticClass:"col-md-8"},[i("div",{staticClass:"exContent text-white"},[i("h4",{staticClass:"pb-3"},[t._v("悅城科技 | 品保工程師 | 2013 年 10 月 - 2014 年 2 月")]),i("p",[i("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 薄化面板成品良率管控")]),i("p",[i("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 面板廠相關規範制定整合")])])])]),i("div",{staticClass:"row d-flex justify-content-center py-4"},[i("div",{staticClass:"col-md-4 d-flex justify-content-md-end"},[i("div",{staticClass:"exImg",staticStyle:{width:"64px"}},[i("img",{staticClass:"img-fluid",attrs:{src:s("15eb"),alt:"img"}})])]),i("div",{staticClass:"col-md-8"},[i("div",{staticClass:"exContent text-white"},[i("h4",{staticClass:"pb-3"},[t._v("富捷實驗室 | 品保工程師 | 2011 年 10 月 - 2013 年 8 月")]),i("p",[i("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 混泥土、鋼筋品質檢測")])])])]),i("div",{staticClass:"row d-flex justify-content-center py-4"},[i("div",{staticClass:"col-md-4 d-flex justify-content-md-end"},[i("div",{staticClass:"exImg",staticStyle:{width:"64px"}},[i("img",{staticClass:"img-fluid",attrs:{src:s("31c7"),alt:"img"}})])]),i("div",{staticClass:"col-md-8"},[i("div",{staticClass:"exContent text-white"},[i("h4",{staticClass:"pb-3"},[t._v("NEC物流公司 | 倉儲管理 | 2010 年 7 月 - 2011 年 7 月")]),i("p",[i("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 大樓倉庫進出貨處理")]),i("p",[i("i",{staticClass:"fas fa-tools pr-3"}),t._v(" 倉庫空間規劃")])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"contact"}},[s("div",{staticClass:"container"},[s("h1",{staticClass:"myTitle-blue"},[t._v("Contact")])])])}],u=s("1157"),C=s.n(u),g={name:"home",data:function(){return{viewprotH:0,works_modal:{},navLinksH:{},works:[{title:"猴寶拍拍-購物網",imgUrl:"https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/monkey.png?alt=media&token=80a4d221-a852-4517-8867-d61e4511403a",href:"https://livepower0815.github.io/my-vue-cli3/dist/",content:["使用 Vue cli、webpack 開發擁有購物車及結帳系統的 SPA 網頁","使用 Bootstrap4、SASS 製作 RWD 網頁","使用 axios 串接後端 api 邏輯","擁有可編輯上傳商品的後台 dashboard (如需後台帳密可洽詢本人)"]},{title:"夢想家 Blog",imgUrl:"https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/blog.png?alt=media&token=22a92f96-5b8b-45df-8e68-7912b1051fcc",href:"https://limitless-wildwood-49993.herokuapp.com/",content:["使用 node.js、express 開發的後端 Blog","使用 EJS 樣板渲染前端網頁","使用 Bootstrap4 製作 RWD 網頁","整合 Firebase 完成會員功能、留言板功能","擁有可編輯上傳文章的後台 dashboard (如需後台帳密可洽詢本人)","開啟網頁時 Heroku 需喚醒請耐心等待一會"]},{title:"BMI 計算器",imgUrl:"https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/BMI.png?alt=media&token=43607bf7-176f-4afa-a99d-774688715432",href:"https://livepower0815.github.io/test1/hexSchool/day17(BMI計算)/",content:["使用 Vue 綁定雙向資料結構 開發 todolist","使用 Bootstrap4 製作 RWD 網頁","使用 Localstorage 儲存 list 資料"]},{title:"會議室預約系統",imgUrl:"https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/meeting.png?alt=media&token=5389af65-61d1-44e0-b3ac-750a46a851b3",href:"https://livepower0815.github.io/test1/meetingRoom/",content:["使用 Bootstrap4 製作 RWD 網頁","整合 Firebase 存取資料、渲染 TodoList","自行撰寫 資料儲存格式、doubleBooking 驗證邏輯"]},{title:"CSS 貪食蛇",imgUrl:"https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/snake.png?alt=media&token=7da4da70-1795-42bb-9b27-5274e529bece",href:"https://livepower0815.github.io/test1/snakeGame/",content:["單純使用 JavaScript 及 CSS 撰寫，全部邏輯不參考網路自行構想","電腦平板手機皆可使用點擊操作"]},{title:"戰船遊戲",imgUrl:"https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/ship.png?alt=media&token=9e8f65a7-deb1-4b13-a69e-9c766fb044c6",href:"https://livepower0815.github.io/test1/hexSchool/the%20first%20days/battleShip.html",content:["JavaScript 深入淺出 練習作品","紅心代表擊中 黑心代表MISS","環境設定: 紅心條 數量:3 , 長度:3 位置採用隨機生成"]}]}},computed:{bgImgScroll:function(){var t=this;return"0px "+(t.viewprotH-200)/2+"px"},aboutScroll:function(){var t=this;return"0px "+(t.viewprotH+700)/2+"px"},navActive:function(){var t=this,a="";return a=t.viewprotH+5>t.navLinksH.contact?"contact":t.viewprotH+5>t.navLinksH.experience?"experience":t.viewprotH+5>t.navLinksH.works?"works":t.viewprotH+5>t.navLinksH.skill?"skill":t.viewprotH+5>t.navLinksH.about?"about":"",a}},methods:{openModal:function(t){var a=this;a.works_modal=t,C()("#worksModal").modal("show")}},mounted:function(){var t=this,a=document.querySelector("#about"),s=document.querySelector("#skill"),i=document.querySelector("#works"),e=document.querySelector("#experience"),c=document.querySelector("#contact");window.addEventListener("scroll",function(){t.viewprotH=window.pageYOffset,t.navLinksH.about=a.offsetTop,t.navLinksH.skill=s.offsetTop,t.navLinksH.works=i.offsetTop,t.navLinksH.experience=e.offsetTop,t.navLinksH.contact=c.offsetTop})}},h=g,A=(s("2238"),Object(o["a"])(h,v,m,!1,null,"75cfd46c",null));A.options.__file="Home.vue";var b=A.exports;i["a"].use(p["a"]);var x=new p["a"]({routes:[{path:"/",name:"home",component:b},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}]}),y=s("2f62");i["a"].use(y["a"]);var k=new y["a"].Store({state:{},mutations:{},actions:{}});s("4989");i["a"].config.productionTip=!1,i["a"].use(c.a,{container:"body",duration:1e3,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),new i["a"]({router:x,store:k,render:function(t){return t(f)}}).$mount("#app")},"5c0b":function(t,a,s){"use strict";var i=s("5e27"),e=s.n(i);e.a},"5e27":function(t,a,s){},"5e73":function(t,a,s){t.exports=s.p+"img/blog.86450ce1.png"},"5f23":function(t,a,s){t.exports=s.p+"img/ship.8ca958f2.png"},"60bd":function(t,a,s){t.exports=s.p+"img/jquery.2be752cf.png"},"683c":function(t,a,s){t.exports=s.p+"img/git.451352fc.png"},"692b":function(t,a,s){t.exports=s.p+"img/monkey.0b52e622.png"},"6d2e":function(t,a,s){t.exports=s.p+"img/html.126e68aa.png"},8858:function(t,a,s){t.exports=s.p+"img/css.8e348af7.png"},8898:function(t,a,s){t.exports=s.p+"img/bootstrap.d1d7a23a.png"},9287:function(t,a,s){t.exports=s.p+"img/BMI.6f1c6daa.png"},9808:function(t,a,s){t.exports=s.p+"img/webpack.3ef52f14.png"},"9fcc":function(t,a,s){t.exports=s.p+"img/meeting.efce6a1b.png"},a4a6:function(t,a,s){t.exports=s.p+"img/ES6.ec833031.png"},b700:function(t,a,s){t.exports=s.p+"img/rest.7d540db2.png"},b7a2:function(t,a,s){t.exports=s.p+"img/snake.96bd50bd.png"},c0fa:function(t,a,s){t.exports=s.p+"img/iconfinder_Phone Red_41319.5be4a1f1.png"},f4f3:function(t,a,s){t.exports=s.p+"img/iconfinder_CarGrey_22990.77fe5626.png"}});
//# sourceMappingURL=app.c51c94ed.js.map
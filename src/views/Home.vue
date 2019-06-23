<template>
  <div>
    <div v-if="navActive == 'works' || navActive == 'experience' || navActive == 'contact'" class="bg-img2"></div>
    <div v-else class="bg-img1"></div>
    <!-- 這裡是 navbar  -->
    <nav class="navbar navbar-expand-lg myNav">
      <button class="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03">
        <span><i class="fas fa-list-ul"></i></span>
      </button>
      <a class="navbar-brand" href="#"><i class="fas fa-feather-alt"></i> Kerry Resume</a>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#about" v-scroll-to="'#about'" :class="{'active':navActive == 'about'}">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skill" v-scroll-to="'#skill'" :class="{'active':navActive == 'skill'}">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#works" v-scroll-to="'#works'" :class="{'active':navActive == 'works'}">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#experience" v-scroll-to="'#experience'" :class="{'active':navActive == 'experience'}">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact" v-scroll-to="'#contact'" :class="{'active':navActive == 'contact'}">Contact</a>
          </li>
        </ul>

      </div>
    </nav>
    <!-- 這裡是 header  -->
    <div class="h100 top-img text-white d-flex align-items-center" style="backgroundPosition:center center">
      <div class="container">
        <div class="row">
          <div class="col-md-6  d-flex justify-content-center">
            <div class="imgHide">
              <div class="img-profile"></div>
            </div>
          </div>
          <div class="col-md-6 d-flex align-items-md-center justify-content-center">
            <div class="titleHide mx-md-5">
              <div class="top-content text-center">
                <h1 class="text_effect pb-3">Hello I'm Kerry </h1>
                <h4 class="text_effect py-2">這世上沒有困難的事情</h4>
                <h4 class="text_effect py-2">只要有熱誠跟興趣</h4>
                <h4 class="text_effect py-2">就能維持自己向前的動力</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- 這裡是 About  -->
    <div id="about">
      <div class="container">
        <h1 class="myTitle-white">About Myself</h1>
        <div class="row aboutHide" :class="{'active':aboutShow}">
          <div class="col-md-6">
            <img src="../assets/aboutme.jpg" alt="" class="img-fluid myShadow rounded my-3">
          </div>
          <div class="col-md-6 d-flex align-items-center">
            <div class="p-4 my-3 bgWhite">
              <p>Hello 您好，我叫做 陳宏宇 ( Kerry )</p>
              <p>2017年開始為自己定了前端的職涯方向，</p>
              <p>這段期間由於家庭因素的關係只能利用下班時間去做線上學習，</p>
              <p>目前已能獨立以 Vue.js & Node.js 架設商業的金流網頁。</p>
              <p>努力研究各種技術並整合使用，</p>
              <p>在不斷的追求、不斷的學習、不斷的創作的過程中，</p>
              <p>看到他人對於我的作品展現出笑容，</p>
              <p>這成就感使我覺得人生無比富有。</p>

            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- 這裡是 Skill  -->
    <div id="skill">
      <div class="container">
        <h1 class="myTitle-white">Skills</h1>
        <div class="d-flex justify-content-center pb-5">
          <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
            <button @click="skillDispaly = 'gallery'" type="button" class="btn btn-primary"><i class="fas fa-grip-horizontal fa-2x"></i></button>
            <button @click="skillDispaly = 'list'" type="button" class="btn btn-info"><i class="far fa-list-alt fa-2x"></i></button>
          </div>
        </div>
        
        <div class="row d-flex justify-content-center" v-if="skillDispaly == 'list'">
          <div class="col-md-8 text-white skillList">
            <h3>前端(Front-end)</h3>
            <ul>
              <li><b>Vue.js</b> - data 雙向綁定、模板元件化、 SPA 單頁式應用、Router、Vuex</li>
              <li><b>Bootstrap</b> - flexbox 網格、RWD 自適應排版</li>
              <li><b>JavaScript</b> - 熟悉 DOM 模型、this、閉包、Prototype、AJAX 等基本概念</li>
              <li><b>jQuery</b> - 為網頁添加具互動性的效果</li>
              <li><b>HTML/CSS</b> - 能撰寫語意化標籤、排版,SASS 預處理器使用</li>
            </ul>
            <h3>後端(Back-end)</h3>
            <ul>
              <li><b>Node.js</b> - NPM 套件使用、express.js 架設後端邏輯、EJS 樣板使用</li>
              <li><b>Firebase</b> - API 整合使用、雲端 Data 存放、會員資料管理及驗證</li>
            </ul>
            <h3>其他(Other)</h3>
            <ul>
              <li><b>Webpack</b> - 轉換 ES6、SASS、BABEL 檔案，打包網站</li>
              <li><b>Git</b> - 透過 Github 進行團隊協作、Github-Pages 前端部署、Heroku 後端部署</li>
              <li><b>ES6</b> - 了解 Promise 非同步處理、解構賦值、其餘參數等概念</li>
              <li><b>Photoshop</b>  - 圖片去背、切版、調色處理</li>
              <li>使用搭配 MVC、MVVM 開發風格</li>
            </ul>
          </div>
        </div>
        <div class="row" v-if="skillDispaly == 'gallery'">
          <div class="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="../assets/skill/html.png" alt="Avatar" style="width:150px;height:150px;">
                </div>
                <div class="flip-card-back">
                  <h2>HTML</h2>
                  <p><i class="far fa-check-circle"></i> 善用語意化命名結構</p>
                  <p><i class="far fa-check-circle"></i> SVG 繪圖</p>
                  <p><i class="far fa-check-circle"></i> SEO 搜尋優化</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="../assets/skill/css.png" alt="Avatar" style="width:150px;height:150px;">
                </div>
                <div class="flip-card-back">
                  <h2>CSS</h2>
                  <p><i class="far fa-check-circle"></i> SASS 預處理器</p>
                  <p><i class="far fa-check-circle"></i> RWD 手刻 breakpoints</p>
                  <p><i class="far fa-check-circle"></i> Flex / Grid 排版</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="../assets/skill/javascript.png" alt="Avatar" style="width:150px;height:150px;">
                </div>
                <div class="flip-card-back">
                  <h2>JavaScript</h2>
                  <p><i class="far fa-check-circle"></i> 熟悉 DOM 模型、this、閉包、Prototype、AJAX 等基本概念</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="flip-card ">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="../assets/skill/jquery.png" alt="Avatar" style="width:150px;height:150px;">
                </div>
                <div class="flip-card-back">
                  <h2>jQuery</h2>
                  <p><i class="far fa-check-circle"></i> 靈活操作 DOM 元素</p>
                  <p><i class="far fa-check-circle"></i> AJAX 方法使用</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img class="mt-3" src="../assets/skill/bootstrap.png" alt="Avatar" style="width:180px;height:180px;">
                </div>
                <div class="flip-card-back">
                  <h2>Bootstrap</h2>
                  <p><i class="far fa-check-circle"></i> flexbox 網格</p>
                  <p><i class="far fa-check-circle"></i> RWD 自適應排版</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img class="mt-5" src="../assets/skill/vue.png" alt="Avatar" style="width:130px;height:130px;">
                </div>
                <div class="flip-card-back">
                  <h2>Vue.js</h2>
                  <p><i class="far fa-check-circle"></i> data 雙向綁定</p>
                  <p><i class="far fa-check-circle"></i> 模板元件化</p>
                  <p><i class="far fa-check-circle"></i> Vue CLI</p>
                  <p><i class="far fa-check-circle"></i> Router、 Vuex</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="../assets/skill/nodejs.png" alt="Avatar" style="width:200px;height:200px;">
                </div>
                <div class="flip-card-back">
                  <h2>Node.js</h2>
                  <p><i class="far fa-check-circle"></i> NPM 套件使用</p>
                  <p><i class="far fa-check-circle"></i> express.js 架設後端邏輯</p>
                  <p><i class="far fa-check-circle"></i> EJS 樣板使用</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="../assets/skill/firebase.png" alt="Avatar" style="width:200px;height:200px;">
                </div>
                <div class="flip-card-back">
                  <h2>Firebase</h2>
                  <p><i class="far fa-check-circle"></i> 雲端 Data 存放</p>
                  <p><i class="far fa-check-circle"></i> 會員資料管理及驗證</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img class="mt-3" src="../assets/skill/webpack.png" alt="Avatar" style="width:130px;height:150px;">
                </div>
                <div class="flip-card-back">
                  <h2>Webpack</h2>
                  <p><i class="far fa-check-circle"></i> 轉換 ES6、SASS、BABEL 檔案</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img class="mt-3" src="../assets/skill/git.png" alt="Avatar" style="width:130px;height:130px;">
                </div>
                <div class="flip-card-back">
                  <h2>Git</h2>
                  <p><i class="far fa-check-circle"></i> Github 進行團隊協作</p>
                  <p><i class="far fa-check-circle"></i> Github-Pages 前端部署</p>
                  <p><i class="far fa-check-circle"></i> Heroku 後端部署</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img class="mt-3" src="../assets/skill/ES6.png" alt="Avatar" style="width:120px;height:130px;">
                </div>
                <div class="flip-card-back">
                  <h2>ES6</h2>
                  <p><i class="far fa-check-circle"></i> 了解 Promise 非同步處理、解構賦值、其餘參數等概念</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img class="mt-3" src="../assets/skill/rest.png" alt="Avatar" style="width:130px;height:130px;">
                </div>
                <div class="flip-card-back">
                  <h2>Other</h2>
                  <p><i class="far fa-check-circle"></i> MVC、MVVM 開發風格</p>
                  <p><i class="far fa-check-circle"></i> Photoshop 去背、切版、調色處理</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- 這裡是 Works  -->
    <div id="works">
      <div class="container">
        <h1 class="myTitle-blue">Projects</h1>
        <div class="row">
          <div class="col-md-4">
            <div class="transform_3d">
              <div class="myCard">
                <div class="myCard_img">
                  <a href="#" @click.prevent="openModal(works[0])"><img class="img-fluid" src="../assets/works/crm.png"
                      alt="img"></a>
                </div>
              </div>
              <h3 class="text-center py-4">CRM Web App</h3>
            </div>
          </div>
          <div class="col-md-4">
            <div class="transform_3d">
              <div class="myCard">
                <div class="myCard_img">
                  <a href="#" @click.prevent="openModal(works[1])"><img class="img-fluid" src="../assets/works/monkey.png"
                      alt="img"></a>
                </div>
              </div>
              <h3 class="text-center py-4">猴寶拍拍-電子商務</h3>
            </div>
          </div>
          <div class="col-md-4">
            <div class="transform_3d">
              <div class="myCard">
                <div class="myCard_img">
                  <a href="#" @click.prevent="openModal(works[2])"><img class="img-fluid" src="../assets/works/blog.png"
                      alt="img"></a>
                </div>
              </div>
              <h3 class="text-center py-4">夢想家 Blog</h3>
            </div>
          </div>
          <div class="col-md-4">
            <div class="transform_3d">

              <div class="myCard">
                <div class="myCard_img">
                  <a href="#" @click.prevent="openModal(works[3])"><img class="img-fluid" src="../assets/works/BMI.png"
                      alt="img"></a>
                </div>
              </div>
              <h3 class="text-center py-4">BMI 計算器</h3>
            </div>
          </div>
          <div class="col-md-4">
            <div class="transform_3d">

              <div class="myCard">
                <div class="myCard_img">
                  <a href="#" @click.prevent="openModal(works[4])"><img class="img-fluid" src="../assets/works/meeting.png"
                      alt="img"></a>
                </div>
              </div>
              <h3 class="text-center py-4">會議室預約系統</h3>
            </div>
          </div>
          <!-- <div class="col-md-4">
            <div class="transform_3d">

              <div class="myCard">
                <div class="myCard_img">
                  <a href="#" @click.prevent="openModal(works[4])"><img class="img-fluid" src="../assets/works/snake.png"
                      alt="img"></a>
                </div>
              </div>
              <h3 class="text-center py-4">CSS 貪食蛇</h3>
            </div>
          </div> -->
          <div class="col-md-4">
            <div class="transform_3d">

              <div class="myCard">
                <div class="myCard_img">
                  <a href="#" @click.prevent="openModal(works[5])"><img class="img-fluid" src="../assets/works/ship.png"
                      alt="img"></a>
                </div>
              </div>
              <h3 class="text-center py-4">戰船遊戲</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 預先載入圖片 -->
    <div class="d-none">
      <img v-for="(item, index) in works" :key="index" :src="item.imgUrl" alt="">
    </div>

    <!-- works Modal顯示詳細資料 -->
    <div class="modal fade" id="worksModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content myCard_content">
          <div class="modal-header border-0">
            <h5 class="modal-title" id="exampleModalLabel">{{works_modal.title}}</h5>
            <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="works_modal.imgUrl" alt="img" class="img-fluid">
            <ul class="mt-3">
              <li class="py-2" v-for="(content, index) in works_modal.content" :key="index">{{content}}</li>
            </ul>
          </div>
          <div class="">
            <div v-if="works_modal.href == ''" class=" text-center m-3 pb-4">
              <button class="goToWeb-noDemo rounded-pill">版權問題無法提供 Demo</button>
            </div>
            <div v-else class=" text-center m-3 pb-4">
              <a :href="works_modal.href" target="_blank" class="goToWeb rounded-pill">點擊前往作品網頁</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 這裡是 Experience  -->
    <div id="experience">
      <div class="container">
        <h1 class="myTitle-white">Experience</h1>
        <!-- thinkpower -->
        <div class="row d-flex justify-content-center py-4">
          <div class="col-md-3 justify-content-md-end d-none d-md-flex">
            <div class="position-relative exInner">
              <img class="img-fluid exImg" src="../assets/experience/iconfinder_Notebook_by_Artdesigner_60879.png" alt="img">
              <div class="exLine"></div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="exContent text-white">
              <h4 class="pb-4">昕力資訊 | 前端工程師 | <span class="d-inline-block"><i class="fas fa-clock"></i> 2019 年 2 月 - 至今</span></h4>
              <p><i class="fas fa-tools pr-3"></i> 串接後端 Java API：CRM 專案功能查詢、新增、刪除、修改</p>
              <p><i class="fas fa-tools pr-3"></i> 前端 UI/UX 調整頁面邏輯：List Data 的 filter、彈跳資訊或提示的視窗、相關 loading 效果、等...</p>
              <p><i class="fas fa-tools pr-3"></i> 協助解決 Browser (Chrome、Safari、IE) 與裝置(電腦、手機、平板)之間的相容問題</p>
              <p><i class="fas fa-tools pr-3"></i> 透過 Sourcetree 幫前端設計團隊撰寫假資料以利設計師切版時候的作業，並有效與前端設計公司做版面整合及調整</p>
              <p>主要負責客戶關係管理專案前端 Vue.js，依照客戶 SPEC 串接後端 API 、撰寫前端邏輯、向設計師溝通調整 UI/UX layout。</p>
            </div>
          </div>
        </div>
        <!-- 國瑞汽車 -->
        <div class="row d-flex justify-content-center py-4">
          <div class="col-md-3 justify-content-md-end d-none d-md-flex">
            <div class="position-relative exInner">
              <img class="img-fluid exImg" src="../assets/experience/car.png" alt="img">
              <div class="exLine"></div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="exContent text-white">
              <h4 class="pb-4">國瑞汽車 | 品管員 | <span class="d-inline-block"><i class="fas fa-clock"></i> 2014 年 7 月 - 2019 年 2 月</span></h4>
              <p><i class="fas fa-tools pr-3"></i> 參與社內技能競賽活動獲得第一名，2016及2018年代表台灣區 TOYOTA 參加豐田亞太技能競賽獲得 優秀賞。</p>
              <div class="row pb-4">
                <div class="col-md-6">
                  <a href="https://drive.google.com/file/d/1A4mgGDbRd5xpPi3CYVEtIYv5qOnAjZtB/view?usp=sharing" target="_blank"
                    rel="noopener noreferrer">
                    <img class="img-fluid exCert" src="../assets/experience/AP-2018.jpg" alt="img">
                  </a>
                </div>
                <div class="col-md-6">
                  <a href="https://drive.google.com/file/d/1HEPv7Nq2i4MrmkoIoQiIFfdwn2OO8VNZ/view?usp=sharing" target="_blank"
                    rel="noopener noreferrer">
                    <img class="img-fluid exCert" src="../assets/experience/AP-2016.jpg" alt="img">
                  </a>
                </div>
              </div>
              <p><i class="fas fa-tools pr-3"></i> 參與公司的 QCC
                (品管圈)，透過每次的活動跟同仁一起合作、集思廣益，活用品管七大手法，來解決工作現場、管理、文化等方面所發生的問題及課題。</p>
              <p>身為公司的一員我積極參與公司的各項活動，品管圈會議中讓我可以有機會在大眾面前講話，增加自己的溝通能力，改善了個性，與養成專心處理問題的能力。參加技能競賽更能讓我意識到本身工作的重要性與職責，因而對自己的工作更感到自豪。</p>
            </div>
          </div>
        </div>
        <!-- 悅城科技 -->
        <div class="row d-flex justify-content-center py-4">
          <div class="col-md-3 justify-content-md-end d-none d-md-flex">
            <div class="position-relative exInner">
              <img class="img-fluid exImg" src="../assets/experience/iconfinder_Phone Red_41319.png" alt="img">
              <div class="exLine"></div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="exContent text-white">
              <h4 class="pb-4">悅城科技 | 品保工程師 | <span class="d-inline-block"><i class="fas fa-clock"></i> 2013 年 10 月 -
                  2014 年 2 月</span></h4>
              <p><i class="fas fa-tools pr-3"></i> 薄化面板成品良率管控</p>
              <p><i class="fas fa-tools pr-3"></i> 面板廠相關規範制定整合</p>
              <p>工作需要對應各個面板廠(群創、友達等)的整合工程師，客戶所要求的良率以及面板的薄化標準與自身公司的產能之間，我會去衡量抓出一個平衡點，在這過程中去學習提升我整合事情的能力。</p>
            </div>
          </div>
        </div>
        <!-- 富捷實驗室 -->
        <div class="row d-flex justify-content-center py-4">
          <div class="col-md-3 justify-content-md-end d-none d-md-flex">
            <div class="position-relative exInner">
              <img class="img-fluid exImg" src="../assets/experience/test.png" alt="img">
              <div class="exLine"></div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="exContent text-white">
              <h4 class="pb-4">富捷實驗室 | 品保工程師 | <span class="d-inline-block"><i class="fas fa-clock"></i> 2011 年 10 月 -
                  2013 年 8 月</span></h4>
              <p><i class="fas fa-tools pr-3"></i> 混泥土、鋼筋品質檢測</p>
              <p>檢測混泥土的抗壓係數以及鋼筋的抗拉係數是否能合乎在標準範圍內，降低產品使用週期低的風險，確保顧客能使用到令消費者放心的商品。</p>
            </div>
          </div>
        </div>
        <!-- NEC物流公司 -->
        <div class="row d-flex justify-content-center py-4">
          <div class="col-md-3 justify-content-md-end d-none d-md-flex">
            <div class="position-relative exInner">
              <img class="img-fluid exImg" src="../assets/experience/box.png" alt="img">
              <div class="exLine"></div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="exContent text-white">
              <h4 class="pb-4">NEC物流公司 | 倉儲管理 | <span class="d-inline-block"><i class="fas fa-clock"></i> 2010 年 7 月 -
                  2011 年 7 月</span></h4>
              <p><i class="fas fa-tools pr-3"></i> 大樓倉庫進出貨處理</p>
              <p><i class="fas fa-tools pr-3"></i> 倉庫空間規劃</p>
              <P>依照商品的流通數量、出貨頻率等來規劃倉庫存放庫位，試著讓空間使用彈性最大化。協力分貨、包裝、貼標、改包裝、組裝、退貨處理。</P>
            </div>
          </div>
        </div>
        <!-- 國立虎尾科技大學 -->
        <div class="row d-flex justify-content-center py-4">
          <div class="col-md-3 justify-content-md-end d-none d-md-flex">
            <div class="position-relative exInner">
              <img class="img-fluid exImg" src="../assets/experience/Graduation.png" alt="img">
            </div>
          </div>
          <div class="col-md-8">
            <div class="exContent text-white">
              <h4 class="pb-4">國立虎尾科技大學 | 工業工程管理 | <span class="d-inline-block"><i class="fas fa-clock"></i> 2010 年 6 月
                  畢業</span></h4>
              <p><i class="fas fa-tools pr-3"></i> 工管系學會-跑跑卡丁車活動總召：</p>
              <p>舉辦系上電子遊戲競賽，藉由競賽活動來增加系上同學之間的交流，我主要負責賽制相關規則制定、擬定獎金發放額度，場地以及工作人員的選擇與調配。</p>
              <p><i class="fas fa-tools pr-3"></i> 畢業聯誼會-名人演講講座策劃：</p>
              <p>當時向經紀公司請了陳漢典來學校，我必須在校務跟經紀公司之間做好溝通的橋樑，協調演講費部分的定案，讓經紀公司可以接受且校務局的合理，在這過程去提升我的協調能力。</p>
              <p><i class="fas fa-tools pr-3"></i> 吉他社-社團期末發表總召：</p>
              <p>負責活動人員的安排、活動流程制定、場地選擇與探勘、拜訪周邊商家提供活動贊助。</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 這裡是 Contact  -->
    <div id="contact">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-md-6 text-center text-white">
            <div class="contact_card" :class="{'active':contactShow}">
              <h1 class="py-4">Contact Me</h1>
              <div class="row d-flex justify-content-center">
                <div class="col-md-6">
                  <div class="px-3">
                    <img class="img-fluid img-thumbnail" src="../assets/flower.jpg" alt="">
                  </div>
                </div>
              </div>
              <h3 class="py-3">宏宇 ( Kerry )</h3>
              <h5 class="pb-3"><a href="mailto:livepower0815@gmail.com" class="text-white"><i class="fas fa-envelope"></i>
                  livepower0815@gmail.com</a></h5>
              <h5 class="pb-3"><i class="fas fa-phone"></i> 0975-320-521</h5>
              <a href="https://www.facebook.com/profile.php?id=100000312843510" target="_blank"><i class="fab fa-facebook-square"></i></a>
              <a href="https://github.com/livepower0815/my-resume" class="" target="_blank"><i class="fab fa-github"></i></a>
              <a href="https://www.cakeresume.com/livepower0815" target="_blank"><i class="fas fa-copyright"></i></a>
              <a href="https://www.linkedin.com/in/kerry-chen-39558617b/" target="_blank"><i class="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 這裡是 Footer  -->
    <div id="footer">
      <p class="text-white">Copyright © Kerry Resume Website 宏宇簡歷網頁</p>
    </div>

  </div>
</template>

<script>
  import $ from 'jquery';

  export default {
    name: "home",
    data() {
      return {
        viewprotH: 0,
        viewprotW: 0,
        windowH: 0,
        skillDispaly:'gallery',
        works_modal: {},
        navLinksH: {},
        works: [{
            title: 'CRM Web App 客戶關係管理網頁平台',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/crm.png?alt=media&token=8de94e5d-615d-4afb-b55a-691878d34240',
            href: '',
            content: [
              '前端框架為 Vue.js 前後端分離使用相關 Vue 套件如 Cli3、Router',
              'Vux 管理全域 User & Customer info 資料，使 component 能更靈活的取得父級資訊',
              '使用 primse 包裝 axios 套件串接 後端 Java RESTful API',
              '整合 Google Maps API 提升客戶列表使用者體驗',
            ],
          },
          {
            title: '猴寶拍拍-電子商務',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/monkey.png?alt=media&token=80a4d221-a852-4517-8867-d61e4511403a',
            href: 'https://livepower0815.github.io/my-vue-cli3/dist/',
            content: [
              '使用 Vue cli、webpack 開發擁有購物車及結帳系統的 SPA 網頁',
              '搭建 Heroku 串接 智付通第三方金流 API',
              'axios 串接後端 API 商務',
              '使用 Bootstrap4、SASS 製作 RWD 網頁',
              '擁有可編輯上傳商品的後台 dashboard (如需後台帳密可洽詢本人)',
            ],
          },
          {
            title: '夢想家 Blog',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/blog.png?alt=media&token=22a92f96-5b8b-45df-8e68-7912b1051fcc',
            href: 'https://limitless-wildwood-49993.herokuapp.com/',
            content: [
              '使用 node.js、express 開發的後端 Blog',
              '使用 EJS 樣板渲染前端網頁',
              '使用 Bootstrap4 製作 RWD 網頁',
              '整合 Firebase 完成會員功能、留言板功能',
              '擁有可編輯上傳文章的後台 dashboard (如需後台帳密可洽詢本人)',
              '開啟網頁時 Heroku 需喚醒請耐心等待一會',
            ],
          },
          {
            title: 'BMI 計算器',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/BMI.png?alt=media&token=43607bf7-176f-4afa-a99d-774688715432',
            href: 'https://livepower0815.github.io/test1/hexSchool/day17(BMI計算)/',
            content: [
              '使用 Vue 綁定雙向資料結構 開發 todolist',
              '使用 Bootstrap4 製作 RWD 網頁',
              '使用 Localstorage 儲存 list 資料',
            ],
          },
          {
            title: '會議室預約系統',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/meeting.png?alt=media&token=5389af65-61d1-44e0-b3ac-750a46a851b3',
            href: 'https://livepower0815.github.io/test1/meetingRoom/',
            content: [
              '使用 Bootstrap4 製作 RWD 網頁',
              '整合 Firebase 存取資料、渲染 TodoList',
              '自行撰寫 資料儲存格式、doubleBooking 驗證邏輯',
            ],
          },
          // {
          //   title: 'CSS 貪食蛇',
          //   imgUrl: 'https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/snake.png?alt=media&token=7da4da70-1795-42bb-9b27-5274e529bece',
          //   href: 'https://livepower0815.github.io/test1/snakeGame/',
          //   content: [
          //     '單純使用 JavaScript 及 CSS 撰寫，全部邏輯不參考網路自行構想',
          //     '電腦平板手機皆可使用點擊操作',
          //   ],
          // },
          {
            title: '戰船遊戲',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/ship.png?alt=media&token=9e8f65a7-deb1-4b13-a69e-9c766fb044c6',
            href: 'https://livepower0815.github.io/test1/hexSchool/the%20first%20days/battleShip.html',
            content: [
              'JavaScript 深入淺出 練習作品',
              '紅心代表擊中 黑心代表MISS',
              '環境設定: 紅心條 數量:3 , 長度:3 位置採用隨機生成',
            ],
          },
        ],
      };
    },
    computed: {
      contactShow() {
        const vm = this;
        if (vm.viewprotH > (vm.navLinksH.contact - vm.windowH / 3)) {
          return true;
        } else {
          return false;
        }
      },
      aboutShow() {
        const vm = this;
        if (vm.viewprotH > (vm.navLinksH.about - vm.windowH / 4)) {
          return true;
        } else {
          return false;
        }
      },
      bgImgScroll() {
        const vm = this;
        let mdBG = 0 + "px " + (vm.viewprotH) / 2 + "px";
        let smBG = 'center center';
        if (vm.viewprotW < 768) {
          return smBG;
        } else {
          return mdBG;
        }

      },
      contactScroll() {
        const vm = this;
        let mdBG = 0 + "px " + (vm.viewprotH - vm.navLinksH.contact) + "px";
        let smBG = 'center center';
        if (vm.viewprotW < 768) {
          return smBG;
        } else {
          return mdBG;
        }
      },
      navActive() {
        const vm = this;
        let acitve = '';
        if (vm.viewprotH + 5 > vm.navLinksH.contact) {
          acitve = 'contact';
        } else if (vm.viewprotH + 5 > vm.navLinksH.experience) {
          acitve = 'experience';
        } else if (vm.viewprotH + 5 > vm.navLinksH.works) {
          acitve = 'works';
        } else if (vm.viewprotH + 5 > vm.navLinksH.skill) {
          acitve = 'skill';
        } else if (vm.viewprotH + 5 > vm.navLinksH.about) {
          acitve = 'about';
        } else {
          acitve = '';
        }
        return acitve;

      },
    },
    methods: {
      openModal(item) {
        const vm = this;
        vm.works_modal = item;
        $('#worksModal').modal('show');
      },
    },
    mounted() {
      const vm = this;
      const about = document.querySelector('#about');
      const skill = document.querySelector('#skill');
      const works = document.querySelector('#works');
      const experience = document.querySelector('#experience');
      const contact = document.querySelector('#contact');
      vm.viewprotW = window.outerWidth;
      vm.windowH = window.outerHeight;

      //紀錄視窗寬度
      window.addEventListener("resize", function () {
        vm.viewprotW = window.outerWidth;
        vm.windowH = window.outerHeight;
      });

      //紀錄視窗跟元件滾動位置
      window.addEventListener("scroll", function () {
        vm.viewprotH = window.pageYOffset;
        vm.navLinksH.about = about.offsetTop;
        vm.navLinksH.skill = skill.offsetTop;
        vm.navLinksH.works = works.offsetTop;
        vm.navLinksH.experience = experience.offsetTop;
        vm.navLinksH.contact = contact.offsetTop;
      });

      // header 內容淡入動畫
      setTimeout(() => {
        document.querySelector('.titleHide').classList.add('active')
      }, 2500);
      setTimeout(() => {
        document.querySelector('.imgHide').classList.add('active')
      }, 2000);
    }
  };
</script>

<style lang="scss" scoped>
  .test {
    color: rgb(251, 251, 251);
    margin: auto;
    position: absolute;
    background: rgb(24, 190, 196);
    border-radius: 5px;
    display: inline-block;
    margin-top: 50%;
    opacity: 0;
    transition: all 0.5s;
    cursor: pointer;
    z-index: 10;
    transform: translate(30px, 0px)
  }

  body {
    font-family: 'Noto Sans TC', sans-serif;
  }

  .text_effect {
    text-shadow: 3px 3px 6px #000000;
  }

  .bg-img1 {
    background-image: url("../assets/top.jpg");
    /* background-image: url(""); */
    background-size: cover;
    background-position: center center;
    z-index: -1000;
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    filter: blur(3px);
  }

  .bg-img2 {
    background-image: url("../assets/contact.jpeg");
    /* background-image: url(""); */
    background-size: cover;
    background-position: center center;
    z-index: -1000;
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    filter: blur(3px);
  }

  .h300 {
    height: 300vh;
  }

  .h50 {
    height: 50vh;
  }

  .h100 {
    min-height: 100vh;
  }

  .titleHide,
  .imgHide,
  .aboutHide,
  .contact_card {
    opacity: 0;
    transform: translate(0, -30px);
    transition: all 1s;
  }

  .contact_card a{
    padding: 0 10px;
  }

  .titleHide.active,
  .imgHide.active,
  .aboutHide.active,
  .contact_card.active {
    opacity: 1;
    transform: translate(0, 0);
  }

  .titleHide {
    border-radius: 10px;
    padding: 20px;
  }

  .titleHide h1 {
    letter-spacing: 2px;
  }


  .myNav {
    background: rgb(37, 43, 66);
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .myNav a {
    color: rgb(253, 253, 253);
  }

  .myNav a.active {
    color: rgb(71, 227, 255);
  }

  .myShadow {
    box-shadow: 10px 12px 18px 0 rgba(0, 0, 0, 0.438),
      -10px 12px 18px 0 rgba(0, 0, 0, 0.411);
  }

  .myTitle-blue {
    text-align: center;
    color: rgb(37, 43, 66);
    border-bottom: 3px solid rgb(37, 43, 66);
    padding: 30px 0;
    margin-bottom: 60px;
    position: relative;
    letter-spacing: 2px;
  }

  .myTitle-blue::before {
    position: absolute;
    left: 50%;
    bottom: 0;
    content: "";
    height: 15px;
    width: 15px;
    background: rgb(21, 157, 167);
    transform: rotate(45deg) translate(0, 13px);
  }

  .myTitle-white {
    text-align: center;
    color: rgb(255, 255, 255);
    border-bottom: 3px solid rgb(255, 255, 255);
    padding: 30px 0;
    margin-bottom: 60px;
    position: relative;
    letter-spacing: 2px;
    text-shadow: 3px 3px 6px #000000;
  }

  .myTitle-white::before {
    position: absolute;
    left: 50%;
    bottom: 0;
    content: "";
    height: 15px;
    width: 15px;
    background: rgb(71, 141, 189);
    transform: rotate(45deg) translate(0, 13px);
  }

  .transform_3d {
    perspective: 1000px;
    padding: 40px 10px;
  }

  .myCard {
    margin: 0 15px;
    box-shadow: 0px 16px 14px 2px rgba(0, 0, 0, 0.438);
    transition: all 0.4s;
    transform-style: preserve-3d;
    transform: rotatex(30deg);
  }

  .myCard:hover {
    transform: scale(1.1, 1.1);
  }

  .myCard_content {
    color: white;
    background: rgba(37, 43, 66, 0.835);
  }


  .bgWhite {
    background: rgba(65, 65, 65, 0.568);
    border-radius: 10px;
    color: white;
    text-shadow: 3px 3px 6px #000000;
  }

  .img-profile {
    height: 400px;
    width: 400px;
    background-image: url("../assets/profile.jpg");
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    border: rgb(255, 255, 255) 10px solid;
  }

  @media (max-width: 800px) {
    .img-profile {
      height: 300px;
      width: 300px;
    }
  }

  .goToWeb {
    border: white 2px solid;
    color: rgb(255, 255, 255);
    padding: 15px;
    font-size: 20px;
    transition: all 0.5s;
  }

  .goToWeb-noDemo {
    border: white 2px solid;
    color: rgb(0, 0, 0);
    padding: 15px;
    font-size: 20px;
    transition: all 0.5s;
  }

  .goToWeb:hover {
    text-decoration: none;
    background: rgb(236, 236, 236);
    color: #000;
  }

  .flip-card {
    margin: 20px 0;
    background-color: transparent;
    width: 200px;
    height: 200px;
    perspective: 1000px;
    /* Remove this if you don't want the 3D effect */
  }

  /* This container is needed to position the front and back side */
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  /* Do an horizontal flip when you move the mouse over the flip box container */
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  /* Position the front and back side */
  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  /* Style the front side (fallback if image is missing) */
  .flip-card-front {
    color: black;
  }

  /* Style the back side */
  .flip-card-back {
    color: white;
    transform: rotateY(180deg);
  }


  #about {
    padding-top: 60px;
    background: rgb(245, 245, 245);
    padding-bottom: 180px;
    background-image: url("../assets/about.jpeg");
    background-size: cover;
    background-position: center center;
  }


  #skill {
    padding-top: 60px;
    padding-bottom: 100px;
    background: rgb(37, 43, 66);
    background-image: linear-gradient(to bottom, rgb(37, 37, 37), rgb(39, 47, 83), rgb(39, 47, 83), rgb(37, 37, 37));
  }

  .skillList h3{
    padding: 20px 0 10px 0;
  }

  .skillList li {
    padding: 5px;
    font-size: 18px;
  }

  #works {
    padding-top: 60px;
    background-image: url('../assets/projects.jpeg');
    background-position: center center;
    background-size: cover;
    padding-bottom: 130px;

  }

  #works h3 {
    color: rgb(37, 43, 66);
  }

  #experience {
    padding-top: 60px;
    background-image: linear-gradient(to right, rgb(37, 37, 37), rgb(39, 47, 83), rgb(39, 47, 83), rgb(37, 37, 37));
    padding-bottom: 100px;
  }

  .exInner {
    width: 64px;
  }

  .exImg {
    position: absolute;
    background-image: linear-gradient(to bottom, rgb(24, 178, 192), rgb(71, 141, 189));
    border-radius: 50%;
    padding: 8px;
    z-index: 1;
    transition: all 0.5s;
  }

  .row:hover .exImg {
    transform: scale(1.3, 1.3);
  }

  #experience .row h4 {
    transition: all 0.5s;
  }

  #experience .row:hover h4 {
    color: rgb(68, 189, 219);
  }

  .exLine {
    position: absolute;
    width: 20px;
    height: 120%;
    left: 50%;
    transform: translate(-50%, 5%);
    background-image: linear-gradient(to bottom, rgb(71, 141, 189), rgb(71, 141, 189), rgb(24, 178, 192), rgb(24, 178, 192));
    z-index: 0;
  }

  .exContent {
    padding: 20px 15px;
  }

  .exCert {
    transition: all 0.3s;
  }

  .exCert:hover {
    box-shadow: 0px 0px 18px 5px #fdfdfd;
  }

  #contact {
    padding-top: 120px;
    padding-bottom: 130px;
  }

  .contact_card {
    background-image: linear-gradient(to bottom right, rgb(0, 79, 153), rgb(0, 149, 155));
    padding: 30px 0;
    border-radius: 20px;
    font-size: 40px;
  }

  .contact_card a {
    color: white;
    transition: all 0.4s;
  }

  .contact_card a:hover {
    color: rgb(21, 252, 232);
  }

  #footer {
    background: rgb(37, 43, 66);
    height: 20vh;
    position: relative;
  }

  #footer p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
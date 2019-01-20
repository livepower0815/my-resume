<template>
  <div>
    <!-- 這裡是 navbar  -->
    <nav class="navbar navbar-expand-lg myNav">
      <button class="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03">
        <span><i class="fas fa-list-ul"></i></span>
      </button>
      <a class="navbar-brand" href="/"><i class="fas fa-feather-alt"></i> Chowy Resume</a>

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
    <div class="h100 top-img text-white d-flex align-items-center" :style="{backgroundPosition:bgImgScroll}">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="top-content d-flex justify-content-center">
              <h1 class="text_effect">Hello I'm Chowy </h1>
            </div>
          </div>
          <div class="col-md-6  d-flex justify-content-center">
            <div class="img-profile">

            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- 這裡是 About  -->
    <div id="about">
      <div class="container">
        <h1 class="myTitle-white">About Myself</h1>
        <div class="row">
          <div class="col-md-6">
            <img src="../assets/aboutme.jpg" alt="" class="img-fluid myShadow rounded">
          </div>
          <div class="col-md-6 d-flex align-items-center">
            <div class="p-4 my-3 bgWhite">
              <p>Hello 您好，我叫做 陳宏宇 ( Chowy )</p>
              <p>2017年開始為自己定了前端的職涯方向，</p>
              <p>這段期間由於家庭因素的關係只能利用下班時間去做線上學習，</p>
              <p>目前已能獨立以Vue.js & Node.js架設商業的金流網頁，</p>
              <p>世上沒有困難的事情，</p>
              <p>只有熱誠跟興趣才能長久維持自己向前的動力。</p>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- 這裡是 Skill  -->
    <div id="skill">
      <div class="container">
        <h1 class="myTitle-white">Skills</h1>
        <div class="row">
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
                  <p><i class="far fa-check-circle"></i>  NPM 套件使用</p>
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
                  <img class="mt-3" src="../assets/skill/webpack.png" alt="Avatar" style="width:150px;height:170px;">
                </div>
                <div class="flip-card-back">
                  <h2>Webpack</h2>
                  <p><i class="far fa-check-circle"></i>  轉換 ES6、SASS、BABEL 檔案</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img class="mt-3" src="../assets/skill/git.png" alt="Avatar" style="width:150px;height:150px;">
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
                  <img class="mt-3" src="../assets/skill/ES6.png" alt="Avatar" style="width:150px;height:170px;">
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
                  <img class="mt-3" src="../assets/skill/rest.png" alt="Avatar" style="width:150px;height:150px;">
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
          <div class="col-sm-4">
            <div class="transform_3d">
              <h3 class="text-center py-4">猴寶拍拍-購物網</h3>
              <div class="myCard">
                <div class="myCard_img">
                  <a href="#" @click.prevent="openModal(works[0])"><img class="img-fluid" src="../assets/works/monkey.png"
                      alt="img"></a>
                </div>
              </div>

            </div>
          </div>
          <div class="col-sm-4">
            <div class="transform_3d">
              <h3 class="text-center py-4">夢想家 Blog</h3>
              <div class="myCard">
                <div class="myCard_img">
                  <a href="#" @click.prevent="openModal(works[1])"><img class="img-fluid" src="../assets/works/blog.png"
                      alt="img"></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="transform_3d">
              <h3 class="text-center py-4">BMI 計算器</h3>
              <div class="myCard">
                <div class="myCard_img">
                  <a href="#" @click.prevent="openModal(works[2])"><img class="img-fluid" src="../assets/works/BMI.png"
                      alt="img"></a>
                </div>
              </div>

            </div>
          </div>
          <div class="col-sm-4">
            <div class="transform_3d">
              <h3 class="text-center py-4">會議室預約系統</h3>
              <div class="myCard">
                <div class="myCard_img">
                  <a href="#" @click.prevent="openModal(works[3])"><img class="img-fluid" src="../assets/works/meeting.png"
                      alt="img"></a>
                </div>
              </div>

            </div>
          </div>
          <div class="col-sm-4">
            <div class="transform_3d">
              <h3 class="text-center py-4">CSS 貪食蛇</h3>
              <div class="myCard">
                <div class="myCard_img">
                  <a href="#" @click.prevent="openModal(works[4])"><img class="img-fluid" src="../assets/works/snake.png"
                      alt="img"></a>
                </div>
              </div>

            </div>
          </div>
          <div class="col-sm-4">
            <div class="transform_3d">
              <h3 class="text-center py-4">戰船遊戲</h3>
              <div class="myCard">
                <div class="myCard_img">
                  <a href="#" @click.prevent="openModal(works[5])"><img class="img-fluid" src="../assets/works/ship.png"
                      alt="img"></a>
                </div>
              </div>

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
            <div class=" text-center m-3 pb-4">
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
        <div class="row d-flex justify-content-center py-4">
          <div class="col-md-3 d-flex justify-content-md-end">
            <div class="exImg" style="width: 64px;">
              <img class="img-fluid" src="../assets/experience/car.png" alt="img">
            </div>
          </div>
          <div class="col-md-8">
            <div class="exContent text-white">
              <h4 class="pb-4">國瑞汽車 | 品管員 | 2014 年 7 月 - 至今</h4>
              <p><i class="fas fa-tools pr-3"></i> 完成車檢驗</p>
              <p><i class="fas fa-tools pr-3"></i> QCC品管圈活動</p>
            </div>
          </div>
        </div>
        <div class="row d-flex justify-content-center py-4">
          <div class="col-md-3 d-flex justify-content-md-end">
            <div class="exImg" style="width: 64px;">
              <img class="img-fluid" src="../assets/experience/iconfinder_Phone Red_41319.png" alt="img">
            </div>
          </div>
          <div class="col-md-8">
            <div class="exContent text-white">
              <h4 class="pb-4">悅城科技 | 品保工程師 | 2013 年 10 月 - 2014 年 2 月</h4>
              <p><i class="fas fa-tools pr-3"></i> 薄化面板成品良率管控</p>
              <p><i class="fas fa-tools pr-3"></i> 面板廠相關規範制定整合</p>
            </div>
          </div>
        </div>
        <div class="row d-flex justify-content-center py-4">
          <div class="col-md-3 d-flex justify-content-md-end">
            <div class="exImg" style="width: 64px;">
              <img class="img-fluid" src="../assets/experience/test.png" alt="img">
            </div>
          </div>
          <div class="col-md-8">
            <div class="exContent text-white">
              <h4 class="pb-4">富捷實驗室 | 品保工程師 | 2011 年 10 月 - 2013 年 8 月</h4>
              <p><i class="fas fa-tools pr-3"></i> 混泥土、鋼筋品質檢測</p>
            </div>
          </div>
        </div>
        <div class="row d-flex justify-content-center py-4">
          <div class="col-md-3 d-flex justify-content-md-end">
            <div class="exImg" style="width: 64px;">
              <img class="img-fluid" src="../assets/experience/box.png" alt="img">
            </div>
          </div>
          <div class="col-md-8">
            <div class="exContent text-white">
              <h4 class="pb-4">NEC物流公司 | 倉儲管理 | 2010 年 7 月 - 2011 年 7 月</h4>
              <p><i class="fas fa-tools pr-3"></i> 大樓倉庫進出貨處理</p>
              <p><i class="fas fa-tools pr-3"></i> 倉庫空間規劃</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 這裡是 Contact  -->
    <div id="contact">
      <div class="container">
        <h1 class="myTitle-blue">Contact</h1>
      </div>
    </div>

    <!-- 這裡是 Footer  -->
    <div id="footer">
      <p class="text-white">Copyright © Chowy Resume Website 宏宇簡歷網頁</p>
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
        works_modal: {},
        navLinksH: {},
        works: [{
            title: '猴寶拍拍-購物網',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/monkey.png?alt=media&token=80a4d221-a852-4517-8867-d61e4511403a',
            href: 'https://livepower0815.github.io/my-vue-cli3/dist/',
            content: [
              '使用 Vue cli、webpack 開發擁有購物車及結帳系統的 SPA 網頁',
              '使用 Bootstrap4、SASS 製作 RWD 網頁',
              '使用 axios 串接後端 api 邏輯',
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
          {
            title: 'CSS 貪食蛇',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/snake.png?alt=media&token=7da4da70-1795-42bb-9b27-5274e529bece',
            href: 'https://livepower0815.github.io/test1/snakeGame/',
            content: [
              '單純使用 JavaScript 及 CSS 撰寫，全部邏輯不參考網路自行構想',
              '電腦平板手機皆可使用點擊操作',
            ],
          },
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
      bgImgScroll() {
        const vm = this;
        return 0 + "px " + (vm.viewprotH - 200) / 2 + "px";
      },
      aboutScroll() {
        const vm = this;
        return 0 + "px " + (vm.viewprotH + 700) / 2 + "px";
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

      window.addEventListener("scroll", function () {
        vm.viewprotH = window.pageYOffset;
        vm.navLinksH.about = about.offsetTop;
        vm.navLinksH.skill = skill.offsetTop;
        vm.navLinksH.works = works.offsetTop;
        vm.navLinksH.experience = experience.offsetTop;
        vm.navLinksH.contact = contact.offsetTop;

      });
    }
  };
</script>

<style lang="scss" scoped>
  .text_effect {
    text-shadow: 3px 3px 6px #000000;
  }

  .h300 {
    height: 300vh;
  }

  .h50 {
    height: 50vh;
  }

  .h100 {
    height: 100vh;
  }

  .top-img {
    background-image: url("../assets/top.jpeg");
    background-size: cover;
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
    color: rgb(255, 71, 71);
  }

  .myShadow {
    box-shadow: 10px 12px 18px 0 rgba(0, 0, 0, 0.438),
      -10px 12px 18px 0 rgba(0, 0, 0, 0.411);
  }

  .myTitle-blue {
    text-align: center;
    color: rgb(37, 43, 66);
    border-bottom: 3px solid rgb(0, 57, 150);
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
    border-bottom: 3px solid rgb(71, 141, 189);
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
    background: rgb(37, 43, 66);
  }


  .bgWhite {
    background: rgba(65, 65, 65, 0.568);
    border-radius: 10px;
    color: white;
    text-shadow: 3px 3px 6px #000000;
  }

  .img-profile {
    height: 300px;
    width: 300px;
    background-image: url("../assets/profile.jpg");
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    border: rgb(255, 255, 255) 10px solid;
  }

  .goToWeb {
    border: white 2px solid;
    color: rgb(255, 255, 255);
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
    background-image: linear-gradient(to bottom, rgb(37, 37, 37), rgb(39, 47, 83),rgb(39, 47, 83),rgb(37, 37, 37));

  }

  #works {
    padding-top: 60px;
    background: rgb(238, 238, 238);
    padding-bottom: 130px;
    background-image: linear-gradient(to right, rgb(145, 145, 145), rgb(214, 214, 214),rgb(214, 214, 214),rgb(145, 145, 145));

  }

  #works h3 {
    color: rgb(37, 43, 66);
  }

  #experience {
    padding-top: 60px;
    background: rgb(37, 43, 66);
    padding-bottom: 100px;
  }


  .exContent{
    padding: 20px 0;
  }

  #contact {
    padding-top: 60px;
    background: rgb(238, 238, 238);
    height: 1000px;
  }

  #footer {
    background: rgb(37, 43, 66);
    height: 15vh;
    position: relative;
  }

  #footer p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% ,-50%);
  }
</style>
<template>
  <div>
    <!-- 這裡是 navbar  -->
    <nav class="navbar navbar-expand-lg myNav">
      <button class="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03">
        <span><i class="fas fa-list-ul"></i></span>
      </button>
      <a class="navbar-brand" href="/">宏宇首頁</a>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Skill</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Works</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
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
              <h1 class="text_effect">Hello 我是宏宇 </h1>
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
    <div id="about" :style="{backgroundPosition:aboutScroll}">
      <div class="container">
        <h1 class="myTitle-white">About Myselt</h1>
        <div class="row">
          <div class="col-md-6">
            <img src="../assets/aboutme.jpg" alt="" class="img-fluid myShadow rounded">
          </div>
          <div class="col-md-6 d-flex align-items-center">
            <div class="p-4 my-3 bgWhite">
              <p>Hello 您好，我叫做 陳宏宇</p>
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
        <h1 class="myTitle-white">Skill</h1>
      </div>
    </div>

    <!-- 這裡是 Works  -->
    <div id="works">
      <div class="container">
        <h1 class="myTitle-blue">Works</h1>
        <div class="row">
          <div class="col-sm-4">
            <div class="p-3 transform_3d">
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
            <div class="p-3 transform_3d">
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
            <div class="p-3 transform_3d">
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
            <div class="p-3 transform_3d">
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
            <div class="p-3 transform_3d">
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
            <div class="p-3 transform_3d">
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
      </div>
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
      }
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
      window.addEventListener("scroll", function () {
        vm.viewprotH = window.pageYOffset;
      });
    }
  };
</script>

<style lang="scss" scoped>
  .text_effect{
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

  .transform_3d{
    perspective: 1000px;
  }

  .myCard {
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
    background: rgba(255, 255, 255, 0.87);
    border-radius: 10px;
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


  #about {
    background: rgb(245, 245, 245);
    padding-bottom: 80px;
    background-image: url("../assets/about.jpeg");
    background-size: cover;
    /* background-position: center center; */
  }

  #skill {
    background: rgb(37, 43, 66);
    height: 720px;
  }

  #works {
    background: rgb(212, 212, 212);
    padding-bottom: 50px;
  }

  #works h3 {
    color: rgb(37, 43, 66);
  }

  #experience {
    background: rgb(37, 43, 66);
    height: 720px;
  }
</style>
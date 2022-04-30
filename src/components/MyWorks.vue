<template>
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
                <a href="#" @click.prevent="openModal(works[3])"><img class="img-fluid"
                    src="../assets/works/image-wall.png" alt="img"></a>
              </div>
            </div>
            <h3 class="text-center py-4">Unsplash API 圖片牆</h3>
          </div>
        </div>
        <div class="col-md-4">
          <div class="transform_3d">

            <div class="myCard">
              <div class="myCard_img">
                <a href="#" @click.prevent="openModal(works[4])"><img class="img-fluid" src="../assets/works/video.png"
                    alt="img"></a>
              </div>
            </div>
            <h3 class="text-center py-4">Youtube API 影片搜尋</h3>
          </div>
        </div>
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

    <!-- works Modal顯示詳細資料 -->
    <div class="modal fade" id="worksModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content myCard_content">
          <div class="modal-header border-0">
            <h5 class="modal-title" id="exampleModalLabel">{{ worksModal.title }}</h5>
            <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="worksModal.imgUrl" alt="img" class="img-fluid">
            <ul class="mt-3">
              <li class="py-2" v-for="(content, index) in worksModal.content" :key="index">{{ content }}</li>
            </ul>
          </div>
          <div class="">
            <div v-if="worksModal.href == ''" class=" text-center m-3 pb-4">
              <button class="goToWeb-noDemo rounded-pill">版權問題無法提供 Demo</button>
            </div>
            <div v-else class=" text-center m-3 pb-4">
              <a :href="worksModal.href" target="_blank" class="goToWeb rounded-pill">點擊前往作品網頁</a>
            </div>
          </div>
        </div>
      </div>
    </div>

     <!-- 預先載入圖片 -->
    <div class="d-none">
      <img v-for="(item, index) in works" :key="index" :src="item.imgUrl" alt="">
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'MyWorks',
  data() {
    return {
      worksModal: {},
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
        title: 'Unsplash API 圖片牆',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/image-wall.png?alt=media&token=2d34037e-40f3-457b-bf11-8f1f45674aca',
        href: 'https://livepower0815.github.io/react-image-wall/build/',
        content: [
          '使用 React 框架開發',
          '搭配 Unsplash API 撰寫圖片搜尋應用',
        ],
      },
      {
        title: 'Youtube API 影片搜尋',
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/project-0815.appspot.com/o/video.png?alt=media&token=f54a3550-478e-4f87-b3a0-f12f2d028038',
        href: 'https://livepower0815.github.io/React-youtube-API/build/',
        content: [
          '使用 React 框架開發',
          '搭配 Youtube API 撰寫影片搜尋應用',
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
    }
  },
  methods: {
    openModal(item) {
      this.worksModal = item;
      $('#worksModal').modal('show');
    },
  },
}
</script>

<style lang="scss" scoped>
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
</style>

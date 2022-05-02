<template>
  <div id="works">
    <div class="container">
      <h1 class="myTitle-blue">Projects</h1>
      <div class="row">
        <div v-for="(work, index) in works" :key="index" class="col-md-4">
          <div class="transform_3d">
            <div class="myCard">
              <div class="myCard_img">
                <a href="#" @click.prevent="openModal(work)"><img class="img-fluid" :src="work.imgUrl" alt="img"></a>
              </div>
            </div>
            <h3 class="text-center py-4">{{ work.title }}</h3>
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
      works: [
      {
        title: '返多寶',
        imgUrl: require('@/assets/works/FDB-demo.png'),
        href: 'https://www.fundobit.com/',
        content: [
          'Vue & Element UI & i18n',
          '虛擬貨幣手續優惠整合平台',
          'RWD 設計',
          '多國語系支援',
        ],
      },
      {
        title: '猴寶拍拍-電子商務',
        imgUrl: require('@/assets/works/monkey.png'),
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
        title: '流程 GUI 設定介面',
        imgUrl: require('@/assets/works/flow-demo.png'),
        href: 'https://livepower0815.github.io/flow-setting/dist/',
        content: [
          'Vue & Element UI & jsplumb',
          '基於 Element UI 及 jsplumb 的流程設定介面',
        ],
      },
      {
        title: 'CRM Web App',
        imgUrl: require('@/assets/works/crm.png'),
        href: '',
        content: [
          '前端框架為 Vue.js 前後端分離使用相關 Vue 套件如 Cli3、Router',
          'Vux 管理全域 User & Customer info 資料，使 component 能更靈活的取得父級資訊',
          '使用 primse 包裝 axios 套件串接 後端 Java RESTful API',
          '整合 Google Maps API 提升客戶列表使用者體驗',
        ],
      },
      {
        title: '夢想家 Blog',
        imgUrl: require('@/assets/works/blog.png'),
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
        title: 'Youtube API 影片搜尋',
        imgUrl: require('@/assets/works/video.png'),
        href: 'https://livepower0815.github.io/React-youtube-API/build/',
        content: [
          '使用 React 框架開發',
          '搭配 Youtube API 撰寫影片搜尋應用',
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

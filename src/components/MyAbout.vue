<template>
  <div id="about">
    <div class="container">
      <h1 class="myTitle-white">About Myself</h1>
      <div class="row aboutHide" :class="{ active: aboutShow }">
        <div class="col-md-6">
          <img src="../assets/aboutme.jpg" alt="" class="img-fluid myShadow rounded my-3" />
        </div>
        <div class="col-md-6 d-flex align-items-center">
          <div class="p-4 my-3 bgWhite">
            <p style="line-height: 32px;">
              ＊ 三年+ WEB 前端開發經驗<br>
              ＊ 熟悉提升使用者體驗及效能優化<br>
              ＊ 善於跨團隊溝通合作<br>
              ＊ 熱衷學習並使用新技術<br>
              <br>
              嗨您好，我叫做 陳宏宇 ( Kerry )<br>
              我擁有三年的前端開發經驗（Vue: 3年, React: 2月），目前負責過 客戶關係＆彩票平台＆即時訊息 等大型專案開發。<br>
              近一年已能獨立主導大型應用、規劃前端團隊人力調派，並透過自身的溝通技巧協調跨部門的合作方針。<br>
              此外，我也經常去探索當前主流的框架技術，並針對專案情境，適當的引入部分核心技術提升團隊開發量能。<br>
              我喜歡學習新的事物並研究各種技術來整合使用，偶爾會參加線上講座並定期設定讀書清單或是線上課程學習列表來充實自己。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyAbout',
  props: {
    aboutShow: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.bgWhite {
  background: #222b43cb;
  border-radius: 10px;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}
</style>

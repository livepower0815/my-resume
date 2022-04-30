<template>
  <div id="about">
    <div class="container">
      <h1 class="myTitle-white">About Myself</h1>
      <div class="row aboutHide" :class="{ 'active': aboutShow }">
        <div class="col-md-6">
          <img src="../assets/aboutme.jpg" alt="" class="img-fluid myShadow rounded my-3">
        </div>
        <div class="col-md-6 d-flex align-items-center">
          <div class="p-4 my-3 bgWhite">
            <p>Hello 您好，我叫做 陳宏宇 ( Kerry )</p>

            <p>努力研究各種技術並整合使用，在不斷的追求、不斷的學習、不斷的創作的過程中，
              看到他人對於我的作品展現出笑容，這成就感使我覺得人生無比富有。</p>

            <p>2017年開始為自己定了前端的職涯方向，這段期間由於家庭因素的關係只能利用下班時間去做線上學習。</p>
            <p>2018 年底時已能獨立架設 Vue.js & Node.js 商業的金流網頁。</p>
            <p>2019 正式踏入前端工作，並也開始研究使用 React 框架，目前主要參與過兩個大型專案如下。</p>
            <p>1. Vue 架構的 CRM (客戶關係管理)</p>
            <p>2. React 彩票網架構重構成 Vue 架構</p>

            <p>未來感興趣的研究方向：</p>
            <p>* Linux 作業系統操作介面</p>
            <p>* 雲端服務代理相關</p>
            <p>* docker、kubernetes 自動化部屬</p>
            <p>* CI/CD</p>

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
</style>

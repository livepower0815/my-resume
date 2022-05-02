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
            <p>Hello 您好，我叫做 陳宏宇 ( Kerry )</p>
            <p>我是個善於交流及溝通的人，同時也是有個快樂家庭的小爸爸，這個身份讓我獲得更多的責任感及抗壓能力。</p>
            <p>我擁有三年的前端開發經驗（Vue: 3年, React: 2月）。</p>
            <p>近一年已能獨立主導大型應用、規劃前端團隊人力資源、協調跨部門的合作方針、引入部分核心技術提升團隊開發量能。</p>
            <p>我喜歡學習新的事物並研究各種技術來整合使用，所以會定期設定讀書單或是線上課程學習列表。</p>
            <p>並在不斷的追求、不斷的學習、不斷的創作的過程中，看到他人對於我的作品展現出笑容，這成就感使我覺得人生無比富有。</p>
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

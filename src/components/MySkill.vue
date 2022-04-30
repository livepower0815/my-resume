<template>
  <div id="skill">
    <div class="container">
      <h1 class="myTitle-white">Skills</h1>

      <div class="row d-flex justify-content-center">
        <div class="col-md-8 text-white skillList">
          <h3>前端(Front-end)</h3>
          <ul>
            <li><b>Vue</b> - data 雙向綁定、模板元件化、Router、Vuex</li>
            <li><b>React</b> - Router、Redux(thunk、Saga)、Hooks</li>
            <li><b>JavaScript</b> - 熟悉 DOM 模型、閉包、AJAX、WebSocket、ES6+ 等基本概念</li>
            <li><b>jQuery</b> - 為網頁添加具互動性的效果</li>
            <li><b>HTML/CSS</b> - 能撰寫語意化標籤、排版</li>
          </ul>
          <h3>UI 框架(UI-framework)</h3>
          <ul>
            <li><b>Bootstrap</b></li>
            <li><b>AntD</b></li>
            <li><b>Semantic UI</b></li>
            <li><b>Element-UI</b></li>
          </ul>
          <h3>後端(Back-end)</h3>
          <ul>
            <li><b>Node.js</b> - npm 工具使用、Express.js 架設 Web 應用</li>
            <li><b>Postman</b> - API 測試</li>
            <li><b>Webpack</b> - 轉換 ES6、CSS預處理(less、sass) 檔案打包網站</li>
          </ul>
          <h3>DataBase</h3>
          <ul>
            <li><b>Firebase</b> - 主要使用 admin、database、hosting 模組</li>
            <li><b>Postman</b> - Robo 3T 操作並配合使用 mongoose library</li>
          </ul>
          <h3>其他(Other)</h3>
          <ul>
            <li><b>Git</b> - 進行團隊協作、sourcetree 操作、Github 部署、Heroku 部署</li>
            <li><b>Photoshop</b> - 圖片去背、切版、調色處理</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MySkill',
  props: {

  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
</style>

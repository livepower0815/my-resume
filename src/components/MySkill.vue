<template>
  <div id="skill">
    <div class="container">
      <h1 class="myTitle-white">Skills</h1>

      <div class="row d-flex justify-content-center">
        <div class="col-md-6 text-white skillList">
          <h3>FE-Framework ▾</h3>
          <ul>
            <li><b>Vue</b> - Vue3／Vuex／Pinia／Router</li>
            <li><b>React</b> - Redux(thunk／Saga)／Hooks／Router</li>
            <li><b>other</b> - i18n</li>
          </ul>
          <h3>Builder ▾</h3>
          <ul>
            <li><b>Webpack／Vite</b></li>
          </ul>
          <h3>DevOps ▾</h3>
          <ul>
            <li><b>Rancher／Jenkins／Docker／Nginx／Linux</b></li>
          </ul>
          <h3>Cowork ▾</h3>
          <ul>
            <li><b>Git／Slack／Jira／Trello／Zeplin／Figma</b></li>
          </ul>
          <h3>Testing ▾</h3>
          <ul>
            <li><b>Jest／Puppeteer(E2E)</b></li>
          </ul>
          <h3>Back-End ▾</h3>
          <ul>
            <li><b>Nuxt／Express</b></li>
          </ul>
          <h3>UI-Framework ▾</h3>
          <ul>
            <li><b>Bootstrap／AntD／Element-UI／Vant／Tailwind／Windy</b></li>
          </ul>
          <h3>Database ▾</h3>
          <ul>
            <li><b>Firebase／MongoDB</b></li>
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
.skillList li {
  padding: 5px;
  font-size: 18px;
}

</style>

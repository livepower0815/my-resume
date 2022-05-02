<template>
  <div>
    <div v-if="navActive == 'works' || navActive == 'experience' || navActive == 'contact'" class="bg-img2"></div>
    <div v-else class="bg-img1"></div>
    <!-- 這裡是 navbar  -->
    <Nav :view-port-h="viewprotH" :nav-active="navActive"></Nav>

    <!-- 這裡是 header  -->
    <MyHeader></MyHeader>

    <!-- 這裡是 About  -->
    <MyAbout :about-show="aboutShow"></MyAbout>

    <!-- 這裡是 Skill  -->
    <MySkill></MySkill>

    <!-- 這裡是 Experience  -->
    <MyExperience></MyExperience>

    <!-- 這裡是 Works  -->
    <MyWorks></MyWorks>

    <!-- 這裡是 Contact  -->
    <MyContact :contact-show="contactShow"></MyContact>

    <!-- 這裡是 Footer  -->
    <div id="footer">
      <p class="text-white">Copyright © Kerry Resume Website</p>
    </div>

  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import MyHeader from '@/components/MyHeader.vue'
import MyAbout from '@/components/MyAbout.vue'
import MySkill from '@/components/MySkill.vue'
import MyWorks from '@/components/MyWorks.vue'
import MyExperience from '@/components/MyExperience.vue'
import MyContact from '@/components/MyContact.vue'

export default {
  name: "home",
  components: {
    Nav,
    MyHeader,
    MyAbout,
    MySkill,
    MyWorks,
    MyExperience,
    MyContact
  },
  data() {
    return {
      viewprotH: 0,
      viewprotW: 0,
      windowH: 0,
      navLinksH: {}
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

<style lang="scss">
body {
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
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

.contact_card a {
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

.myCard_content {
  color: white;
  background: rgba(37, 43, 66, 0.835);
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
  padding-bottom: 60px;
  background: rgb(245, 245, 245);
  background-image: url("../assets/about.jpg");
  background-size: cover;
  background-position: center center;
  background-color: rgb(17, 174, 189);
}


#skill {
  padding-top: 60px;
  padding-bottom: 100px;
  background: rgb(37, 43, 66);
  background-image: linear-gradient(to bottom, rgb(37, 37, 37), rgb(39, 47, 83), rgb(39, 47, 83), rgb(37, 37, 37));
}

#works {
  padding-top: 60px;
  background-image: url('../assets/project.jpeg');
  background-position: center center;
  background-size: cover;
  padding-bottom: 100px;
}

#works h3 {
  color: #e8eaf2;
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
  height: 10vh;
  position: relative;
}

#footer p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
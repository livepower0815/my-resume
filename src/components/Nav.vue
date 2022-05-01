<template>
  <nav class="navbar navbar-expand-lg myNav" :class="{ 'scroll-color': viewPortH > 300 }">
    <button class="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03">
      <span><i class="fas fa-list-ul"></i></span>
    </button>
    <a class="navbar-brand" href="#"><i class="fas fa-feather-alt"></i> Kerry Resume</a>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#about" v-scroll-to="'#about'" :class="{ 'active': navActive == 'about' }">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#skill" v-scroll-to="'#skill'"
            :class="{ 'active': navActive == 'skill' }">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#experience" v-scroll-to="'#experience'"
            :class="{ 'active': navActive == 'experience' }">Experience</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#works" v-scroll-to="'#works'"
            :class="{ 'active': navActive == 'works' }">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact" v-scroll-to="'#contact'"
            :class="{ 'active': navActive == 'contact' }">Contact</a>
        </li>
      </ul>

    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    viewPortH: {
      type: [String, Number],
      required: true
    },
    navActive: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.myNav {
  // background: rgb(37, 43, 66);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background-color 0.3s;
}

.myNav.scroll-color {
  background: rgba(30, 35, 56, 0.916);
}

.myNav a {
  color: rgb(253, 253, 253);
  transition: color 0.3s;
}

.myNav a:hover {
  color: rgb(71, 227, 255);
}

.myNav a.active {
  color: rgb(71, 227, 255);
  border-bottom: rgb(71, 227, 255) 3px solid;
}
</style>

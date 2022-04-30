<template>
  <div id="contact">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-6 text-center text-white">
          <div class="contact_card" :class="{ 'active': contactShow }">
            <h1 class="py-4">Contact Me</h1>
            <div class="row d-flex justify-content-center">
              <div class="col-md-6">
                <div class="px-3">
                  <img class="img-fluid img-thumbnail" src="../assets/flower.jpg" alt="">
                </div>
              </div>
            </div>
            <h3 class="py-3">宏宇 ( Kerry )</h3>
            <h5 class="pb-3"><a href="mailto:livepower0815@gmail.com" class="text-white"><i class="fas fa-envelope"></i>
                livepower0815@gmail.com</a></h5>
            <h5 class="pb-3"><i class="fas fa-phone"></i> 0975-320-521</h5>
            <a href="https://www.facebook.com/profile.php?id=100000312843510" target="_blank"><i
                class="fab fa-facebook-square"></i></a>
            <a href="https://github.com/livepower0815/my-resume" class="" target="_blank"><i
                class="fab fa-github"></i></a>
            <a href="https://www.cakeresume.com/livepower0815" target="_blank"><i class="fas fa-copyright"></i></a>
            <a href="https://www.linkedin.com/in/kerry-chen-39558617b/" target="_blank"><i
                class="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyContact',
  props: {
    contactShow: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

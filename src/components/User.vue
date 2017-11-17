<template>
  <div class="page">
    <div class="user">
      <img src="./user.png" alt="">
      <img src="./music.png" alt="" @click='toggleBg'>
      <audio ref='bg' :src='require("@/components/02-背景音乐.mp3")' autoplay></audio>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      toggleBg() {
        this.$refs.bg.paused? this.$refs.bg.play(): this.$refs.bg.pause()
      }
    }
  }
</script>
<style lang="stylus" scoped>
.page
  position relative
</style>


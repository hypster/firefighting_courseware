<template>
  <div class="page">
      <sprite class="sprite" :gif="require('./sprite_copy.gif')" :spriteStatic="require('./sprite_static.png')" :audio="require('@/audio/01-首页面.mp3')"></sprite>
      <router-link tag="div" :to="{name: 'mainMenu'}">
        <v-button class="escape">
          <img src="./escape.png" alt="">
        </v-button>
      </router-link>
      
  </div>
</template>
<script>
import Sprite from '@/components/Sprite'
import VButton from '@/components/Button'
  export default {
    data() {
      return {

      }
    },
    components: {
      Sprite, VButton
    }
  }
</script>
<style lang="stylus" scoped>
.page
  background url('./welcome_bg.png') no-repeat
  background-size cover
  .sprite
    position absolute
    left 50%
    transform translate(-50%)
    top 35%
  .escape 
    position absolute
    top 77%
    left 69%
</style>


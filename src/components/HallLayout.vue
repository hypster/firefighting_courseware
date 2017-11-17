<template>
  <div class="page">
    <div class="title">
      <slot name='title'>
      </slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <sprite class="sprite" :audio='audio'></sprite>
    <router-link :to='{name: "mainMenu"}'>
      <v-button>
        <h3 class="return">返 回</h3>
      </v-button>
    </router-link>
  </div>
</template>
<script>
import Sprite from '@/components/Sprite'
import VButton from '@/components/Button'
import spriteHose from "@/components/sprite_hose.gif"
import spriteHoseStatic from '@/components/sprite_hose_static.png'
  export default {
    data() {
      return {

      }
    },
    props: {
      
      audio: {
        type: String
      }
    },
    components: {
      Sprite, VButton
    }
  }
</script>
<style lang="stylus" scoped>
.page
  background url('./hall_bg.jpg') no-repeat
  .title
    display flex
    justify-content center
    margin-top 15px
  .sprite
    position absolute
    bottom 0
    left 0
    width 60%
    height auto
  .content
    display flex
    justify-content center
    margin-left -60px
  h3.return
    position absolute
    right 42px
    top 72px
    color #3f6077
    font-size 29px
    font-weight 700
    &:hover
      cursor pointer
</style>


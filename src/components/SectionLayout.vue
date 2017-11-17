<template>
  <div class="page" :style="bgStyle">
    <div class="title">
      <slot name='title'>
      </slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <sprite v-if='spriteShow' :audio='audio' class="sprite"></sprite>
    <router-link class="return" :to="to">
      <v-button>
        <img src="./section_return.png" alt="">
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
    props: {
      audio: {
        type: String
      },
      to: {
        type: Object
      },
      spriteShow: {
        type: Boolean, 
        default: true
      },
      bgStyle: {
        type: Object,
        default: function () {
          return {
            backgroundImage: `url(${require('./section_bg.png')})`,
            backgroundRepeat: "no-repeat"
          }
        }
      }
    },
    components: {
      Sprite,
      VButton
    }
  }
</script>
<style lang="stylus" scoped>
.page
  // background url('./section_bg.png') no-repeat
  .title
    margin-left 10px
    margin-top 10px
  .sprite
    position absolute
    bottom 0
    left 0
    width 60%
    height auto
  .content
    display flex
    justify-content center
    margin-top 70px
    margin-left 143px
    width 840px
    height 426px
    overflow auto
    // border 10px solid yellow
  .return
    position absolute
    bottom 20px
    right 20px
</style>


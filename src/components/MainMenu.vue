<template>
  <div class="page">
    <sprite class="sprite" :gif="require('./sprite_hose.gif')" :spriteStatic="require('./sprite_hose_static.png')" :audio='require("@/audio/02-路线图.mp3")'></sprite>
    <div class="menu">
      <router-link tag='div' class="btn" :to="{name: 'knowhow'}">
        <v-button>
            <img src="./menu/01.png" alt="">
        </v-button>
      </router-link>
      <router-link tag='div' class="btn" :to="{name: 'preventive'}">
        <v-button>
          <img src="./menu/02.png" alt="">
        </v-button>
      </router-link>
      <router-link tag='div' class="btn" :to="{name: 'display'}">
        <v-button>
          <img src="./menu/03.png" alt="">
        </v-button>
      </router-link>
      <router-link tag='div' class="btn" :to="{name: 'rescue'}">
        <v-button>
          <img src="./menu/04.png" alt="">
        </v-button>
      </router-link>
    </div>
    <router-link tag='div' class="btn test" :to="{name: 'test'}">
      <v-button>
        <img src="./menu/test.png" alt="">
      </v-button>
    </router-link>
  </div>
</template>
<script>
import Sprite from './Sprite'
import VButton from './Button'
export default {
  name: 'menu',
  data() {
    return {
      
    }
  },
  components: {
    Sprite,
    VButton
  }
}
</script>
<style lang='stylus' scoped>
.page
  background no-repeat url('./mainmenu_bg.png')
  background-size cover
.sprite 
  position absolute
  top 300px
  left 50px
.menu
  height 371px
  margin-top 200px
  display flex
  flex-direction column
  justify-content space-between
  .btn
    display block
    margin 0 auto
    z-index 1
    &:hover
      cursor: pointer
.btn.test
  position absolute
  z-index 1
  right 25px
  bottom 25px
</style>


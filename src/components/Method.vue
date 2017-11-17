<template>
  <section-layout :to="{name: 'preventive'}" :spriteShow='false'>
      <img src='./method/title.png' slot='title'>
      <div slot='content'>
          <img v-show='currentNav=="keranwu"' src="./method/07-01控制可燃物.png" alt="">
          <img v-show='currentNav=="zhuranwu"' src="./method/07-02隔绝助燃物.png" alt="">
          <img v-show='currentNav=="huoyuan"' src="./method/07-03 消除着火源.png" alt="">
          <img v-show='currentNav=="huoshi"' src="./method/07-04 阻止火势蔓延.png" alt="">
          <div class="menu-group">
              <v-button>
                  <img @click='currentNav ="keranwu"' src='./method/btn01.png'>
              </v-button>
              <v-button>
                  <img @click="currentNav='zhuranwu'" src='./method/btn02.png'>
              </v-button>
              <v-button>
                  <img @click="currentNav='huoyuan'" src='./method/btn03.png'>
              </v-button>
              <v-button>
                  <img @click="currentNav='huoshi'" src='./method/btn04.png'>
              </v-button>
          </div>
      </div>
  </section-layout>
</template>
<script>
import SectionLayout from '@/components/SectionLayout'
import VButton from '@/components/Button'
    export default {
        data() {
            return {
                currentNav: 'keranwu'
            }
        },
        components: {
            SectionLayout,
            VButton
        }
    }
</script>
<style lang="stylus" scoped>
.menu-group
  position absolute
  top 240px
  left 10px
  img 
    margin-bottom 10px
</style>


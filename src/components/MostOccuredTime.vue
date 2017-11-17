<template>
  <section-layout :to="{name: 'knowhow'}">
      <img src='./knowhow/type_title.png' slot='title'>
      <div slot='content'>
          <div class="menu">
            <v-button>
              <img @click='onclick(3)' src="./knowhow/menu/btn01.png" alt="">
            </v-button>
            <v-button>
              <img @click='onclick(4)' src="./knowhow/menu/btn02.png" alt="">
            </v-button>
            <v-button>
              <img @click='onclick(5)' src="./knowhow/menu/btn03.png" alt="">
            </v-button>
          </div>
          <div>
          <v-video :key='3' v-if='currentChosen==3' :videoUrl="require('./knowhow/03-火灾季节变化规律.mp4')"></v-video>
          <v-video :key='4' v-if='currentChosen==4' :videoUrl="require('./knowhow/04-火灾的昼夜变化规律.mp4')"></v-video>
          <v-video :key='5' v-if='currentChosen==5' :videoUrl="require('./knowhow/05-火灾的环境变化规律.mp4')"></v-video>
          </div>
      </div>
  </section-layout>
</template>
<script>
import SectionLayout from '@/components/SectionLayout'
import VVideo from '@/components/Video'
import VButton from '@/components/Button'
    export default {
        data() {
            return {
                currentChosen: 3
            }
        },
        components: {
            SectionLayout,
            VVideo,
            VButton
        },
        methods: {
          onclick(i) {
            this.currentChosen = i
          }
        }
    }
</script>
<style lang="stylus" scoped>
.menu
  position absolute
  display flex
  flex-direction column
  left 10px
  top 240px
  z-index 1
  img
    margin-bottom 5px
    &:hover
      cursor pointer
</style>


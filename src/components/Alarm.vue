<template>
  <section-layout :to="{name: 'display'}" :spriteShow="false">
      <img src='./alarm/title.png' slot='title'>
      <div slot='content'>
          <v-video :videoUrl="require('./alarm/09-报警类器材.mp4')"></v-video>
      </div>
  </section-layout>
</template>
<script>
import SectionLayout from '@/components/SectionLayout'
import VVideo from '@/components/Video'
    export default {
        data() {
            return {
                
            }
        },
        components: {
            SectionLayout,
            VVideo
        }
    }
</script>
<style lang="stylus" scoped>

</style>


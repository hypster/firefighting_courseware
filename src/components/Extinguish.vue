<template>
  <section-layout :to="{name: 'display'}" :spriteShow='false'>
      <img src='./extinguish/title.png' slot='title'>
      <div slot='content'>
          <v-video :videoUrl="require('./extinguish/10-灭火类器械.mp4')"></v-video>
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


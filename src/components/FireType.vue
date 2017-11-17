<template>
  <section-layout :to="{name: 'knowhow'}" :spriteShow='false'>
      <img src='./knowhow/type_title.png' slot='title'>
      <div slot='content'>
          <v-video :videoUrl="require('./knowhow/02-火灾的分类.mp4')"></v-video>
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


<template>
  <section-layout :to="{name: 'display'}" :spriteShow='false'>
      <img src='./mark/title.png' slot='title'>
      <div slot='content'>
        <v-video :videoUrl="require('@/components/display/消防标志大全.mp4')"></v-video>
      </div>
  </section-layout>
</template>
<script>
import VVideo from '@/components/Video'
import SectionLayout from '@/components/SectionLayout'
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


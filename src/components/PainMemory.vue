<template>
  <section-layout :spriteShow='false' :to="{name: 'knowhow'}" :audio="require('@/audio/04-惨痛的记忆.mp3')">
      <img src='./knowhow/memory_title.png' slot='title'>
      <div slot='content'>
        <v-video :videoUrl="require('./painMemory/沉痛的记忆：火灾.mp4')"></v-video>
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


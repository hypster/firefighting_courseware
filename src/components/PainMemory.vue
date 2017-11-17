<template>
  <section-layout :to="{name: 'knowhow'}" :audio="require('@/audio/04-惨痛的记忆.mp3')">
      <img src='./knowhow/memory_title.png' slot='title'>
      <div slot='content'></div>
  </section-layout>
</template>
<script>
import SectionLayout from '@/components/SectionLayout'
    export default {
        data() {
            return {
                
            }
        },
        components: {
            SectionLayout
        }
    }
</script>
<style lang="stylus" scoped>

</style>


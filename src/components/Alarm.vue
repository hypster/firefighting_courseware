<template>
  <section-layout :to="{name: 'display'}" :spriteShow="false">
      <img src='./alarm/title.png' slot='title'>
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


<template>
  <section-layout :to="{name: 'preventive'}" :spriteShow='false'>
      <img src='./danger/title.png' slot='title'>
      <div slot='content'>
          <img src="./danger/06-火灾的危害.png" alt="">
      </div>
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


<template>
  <div class="parent" @click='onclick'>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    mounted() {

    },
    methods: {
      onclick() {
        this.$store.commit('toggleBtnSound')
      }
    }
  }
</script>
<style lang='stylus' scoped> 
.parent:hover
  cursor pointer
  
</style>


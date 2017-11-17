<template>
  <div>
    <div ref='sortable' class="sortable">
      <img src="./test/sort/btn01.png" id='2' alt="">
      <img src="./test/sort/btn02.png" id='1' alt="">
      <img src="./test/sort/btn03.png" id='4' alt="">
      <img src="./test/sort/btn04.png" id='3' alt="">
    </div>
    <div title='综合反馈' style="display:none" ref='dialog' id="dialog">
      <p>你一共移动了<span>{{cnt}}次</span></p>
    </div>
  </div>
</template>
<script>
let $ = require('jquery')
require('jquery-ui/ui/widgets/sortable.js')
require('jquery-ui/ui/widgets/dialog.js')
    export default {
      data() {
          return {
            sortTable: [1,2,3,4],
            sorted: false,
            cnt: 0,
          }
      },
      methods: {
      },
      mounted() {
        let vm = this
        $(this.$refs.sortable).sortable({
          stop(){
            vm.cnt++
            vm.$store.commit('toggleBtnSound')
            vm.sorted = $(this).sortable('toArray').every((item, index) => {
              return Number(item) === vm.sortTable[index]
            })
            if (vm.sorted) {
              $(vm.$refs.dialog).dialog({
                modal: true,
                buttons: {
                  "下一关": function() {
                    $(this).dialog('close')
                    vm.$emit('done', {currentView: 'Sort2'})
                  }
                }
              })
            }
          }          
        })
      }
    }
</script>
<style lang="stylus" scoped>
.sortable
  display flex
  justify-content center
  img
    margin-right 20px
    &:last-child
      margin-right 0
</style>

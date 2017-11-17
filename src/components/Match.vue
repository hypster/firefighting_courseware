<template>
  <div>
    <audio :src="require('./test/cancel.mp3')" ref='cancelSound'></audio>
    <div ref='option' class="option">
      <img src="./test/btn01.png" data-id='tongti' alt="">
      <img src="./test/btn02.png" data-id='baoxianshao' alt="">
      <img src="./test/btn03.png" data-id='chanpingshuoming' alt="">
      <img src="./test/btn04.png" data-id='suliaoqianfeng' alt="">
      <img src="./test/btn05.png" data-id='miehuoqiyabing' alt="">
      <img src="./test/btn06.png" data-id='xiaofangbiaoshi' alt="">
      <img src="./test/btn07.png" data-id='yalibiao' alt="">
      <img src="./test/btn08.png" data-id='yingguangquan' alt="">
      <img src="./test/btn09.png" data-id='chanpinghegezheng' alt="">
      <img src="./test/btn10.png" data-id='pengguan' alt="">
    </div>
    <div class="map">
      <img src="./test/map.png" alt="">
      <div title='综合反馈' style="display:none" ref='dialog' id="dialog">
        <p>你一共尝试了<span>{{cnt}}次</span></p>
        <p>正确率<span>{{Math.round(2/cnt * 100, 2)}}%</span></p>
      </div>
      <div class="dropArea" ref='dropArea'>
        <div class="droppable" data-id='suliaoqianfeng'></div>
        <div class="droppable" data-id='yalibiao'></div>
        <div class="droppable" data-id='yingguangquan'></div>
        <div class="droppable" data-id='pengguan'></div>
        <div class="droppable" data-id='tongti'></div>
        <div class="droppable" data-id='miehuoqiyabing'></div>
        <div class="droppable" data-id='baoxianshao'></div>
        <div class="droppable" data-id='chanpinghegezheng'></div>
        <div class="droppable" data-id='xiaofangbiaoshi'></div>
        <div class="droppable" data-id='chanpingshuoming'></div>
      </div>
    </div>
  </div>
</template>
<script>
let $ = require('jquery')
require('jquery-ui/ui/widgets/draggable.js')
require('jquery-ui/ui/widgets/droppable.js')
require('jquery-ui/ui/widgets/dialog.js')
  export default {
    data() {
      return {
          cnt: 0,
          matched: 0,
          cancelSound: false
      }
    },
    mounted() {
      let vm = this
      $('div', this.$refs.dropArea).droppable({
        classes: {
          "ui-droppable-active": "highlight",
          "ui-droppable-hover": "hover"
        },
        drop (event, ui) {
          // console.log($(this).data('id'))
          // console.log(ui.draggable.data('id'))
          vm.cnt++
          if ($(this).data('id') === ui.draggable.data('id')) {
            vm.matched++
            vm.$store.commit('toggleBtnSound')
            $(this).append(ui.draggable)
            ui.draggable.css({zIndex: 1, position: 'absolute', top: 0, left: '50%', width: '42px', height: '16px', transform: 'translateX(-50%)'})
            ui.draggable.draggable('destroy')
            if (vm.matched == 2) {
              $(vm.$refs.dialog).dialog({
                modal: true,
                close: function () {
                  vm.$emit('done', {currentView: 'Sort'})
                },
                buttons: {
                  "下一关": function () {
                    $(this).dialog('close')
                  }
                }
              })
            }
          } else {
            vm.$refs.cancelSound.play()
          }    
        }
      })
      $('img', this.$refs.option).draggable({
        revert: true,
        helper: 'clone',
        opacity: 0.7,
        
        drag (event, ui) {
          
        },
        start (event, ui) {
          $(ui.helper).css({transform: "scale(0.5)", zIndex: 1})
        }
      })
    }
  }
</script>
<style lang="stylus" scoped>
.hover
  background: yellow
.dropArea
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  .droppable
    width 64px
    height 14px
    position absolute
    div
      position relative
    &:nth-child(1)
      top 59px 
      left 48px
    &:nth-child(2)
      top 77px 
      left 31px
    &:nth-child(3)
      top 97px 
      left 27px
    &:nth-child(4)
      top 187px 
      left 22px
    &:nth-child(5)
      top 238px 
      left 56px
    &:nth-child(6)
      top 36px 
      left 343px
    &:nth-child(7)
      top 100px 
      left 353px
    &:nth-child(8)
      top 164px 
      left 362px
    &:nth-child(9)
      top 242px 
      left 347px
      
.option 
  float left
  width 33%
  padding 20px 40px
  display flex
  flex-wrap wrap
  justify-content space-between
  img 
    margin-bottom 20px
.map
  float right 
  width 66%
  position relative

</style>

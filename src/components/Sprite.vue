<template>
    <div>
        <div ref='sprite' :style="styleObj" :class="{speak: showAnim, sprite1: showSprite1, sprite2: !showSprite1}" id="sprite"></div>
        <audio :src='audio' @ended='onend' ref='audio'></audio>
    </div>
</template>
<script>
import $ from 'jquery'
    export default {
        data() {
            return {
                showAnim: true,
                styleObj: {
                  "background-image": `url(${this.spriteUrl})`,
                  display: !!this.audio?'block': 'none'
                },
                sprite1: this.showSprite1
            }
        },
        methods: {
          onend () {
            // $(this.$refs.sprite).on('animationiteration', (e) => {              
              this.showAnim = false
            // })
          }
        },
        props: {
            spriteUrl: {
                default: require('./spriteComp.png'),
                type: String
            },
            audio: {
                type: String
            },
            showSprite1: {
              type: Boolean,
              default: true
            }
        },
        mounted() {

            let vm = this
            vm.$refs.audio.play()
            // vm.$refs.sprite.addEventListener('animationstart', function (e) {
            //   console.log('start')
            // })
            // vm.$refs.sprite.addEventListener('animationend', function (e) {
            //   console.log('end')
            // })
            // vm.$refs.sprite.addEventListener('animationiteration', function (e) {
            //   console.log('iteration')
              
            // })
            
        }
    }
</script>
<style lang="stylus" scoped>
$height = 360px
$height2 = 300px
.sprite2
  width 247px
  height $height2
.sprite1
  width 595px
  height $height
  // background-image url('./spriteComp.png')
  background-repeat no-repeat
  background-position-x 0
  background-position-y 0 
.speak
  animation-duration 2s
  animation-iteration-count infinite
  animation-timing-function step-start
.sprite1.speak
  animation-name speak
.sprite2.speak
  animation-name speak2
@keyframes speak {
  from {
    background-position-y 0
  }
  12.5% {
    background-position-y -($height )
  }
  25% {
    background-position-y 0
  }
  37.5% {
    background-position-y -($height * 2)
  }
  50% {
    background-position-y 0
  }
  62.5% {
    background-position-y -($height * 3)
  }
  75% {
    background-position-y 0

  }
  87.5% {
    background-position-y -($height * 2)
  }
  100% {
    background-position-y 0
  }
}

@keyframes speak2 {
  from {
    background-position-y 0
  }
  12.5% {
    background-position-y -($height2 )
  }
  25% {
    background-position-y 0
  }
  37.5% {
    background-position-y -($height2 * 2)
  }
  50% {
    background-position-y 0
  }
  62.5% {
    background-position-y -($height2 * 3)
  }
  75% {
    background-position-y 0

  }
  87.5% {
    background-position-y -($height2 * 2)
  }
  100% {
    background-position-y 0
  }
}


</style>


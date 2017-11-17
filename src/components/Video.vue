<template>
    <div>
      <!-- 765:406 -->
    <div class="video-wrapper" :class='classObj'>
        <video ref='video' id="my_video_1" class="video-js vjs-default-skin" 
           :poster='posterUrl'
          data-setup='{ "aspectRatio":"1920:1080", "playbackRates": [1, 1.5, 2]}'>
          <source ref='source' :src="videoUrl" type='video/mp4' />
          <source :src='videoUrl' type='video/webm' />
        </video>
      </div>
      <!-- <question
      ></question> -->
      <transition name="fade">
        <div class="question" v-show='showQuestion'>
            <p>{{computedQuestion}}</p>
            <div class="choice">
                <div v-for="(c, i) in choices">
                <label>
                    <input v-if='type=="radio"' :key='i' v-model="choice" type='radio' name='answer' :value='[toAlpha(i)]'>
                    <input v-if='type=="checkbox"'  v-model="choice" type='checkbox' :value='toAlpha(i)'>
                    {{toAlpha(i)}}、{{c}}
                </label>
                </div>
            </div>
            <!-- {{choice}} -->
            <button v-show='!showFeedback' :class="{submit: true}"  @click='onsubmit'>提 交</button>
            <button  class="continue" v-show='showFeedback' @click='oncontinue'>继续观看</button>
            <div v-show='showFeedback' class='feedback'>{{feedback}}</div>
            </div>
      </transition>
    </div>
</template>
<script>
import videojs from 'video.js'
// import lang from '@/assets/videojs/lang/zh-CN.js'
import lang from '@/assets/videojs/lang/zh-CN.json'
videojs.addLanguage('zh-CN', lang)
videojs.options.controls = true
videojs.options.preload = "none"
videojs.options.language = 'zh-CN'

export default {
  name: 'videoQA',
  data () {
    return {
      player: null,
      feedback: '',
      showFeedback: false,
    showQuestion: false,
    choice: [],
    question: '',
    type: '',
    correctChoice: [],
    choices: []
    }
  },
  watch: {
      startPlay () {
          if (this.startPlay == true) {
              this.player.play()
          }
      }
    //   videoUrl () {
        //   this.player.dispose()
        //   this.$refs.source.setAttribute('src', this.videoUrl)
        //   this.$refs.video.load()          
        // this.player.dispose()
        // this.initPlayer()
    //   }
  },
  props: {
        pausetime: {
            type: Array,
            default: function () {
                return []
            }
        },

        questions: {
            type: Array,
            default: function () {
                return []
            }
        },
        videoUrl: {
            type: String,
            default: 'https://vjs.zencdn.net/v/oceans.mp4'
        },
        autoplay: {
            type: Boolean,
            default: true
        },
        startPlay: {
            type: Boolean,
            default: false
        },
        classObj: {
            type: Object, 
            default: function (){
                return {displayArea: true}
            }},
        controls: {
            type: Boolean,
            default: true
        },
        posterUrl: {
            type: String,
            default: ''
        }
    },
  computed: {
    computedQuestion () {
      let qArr = this.question.split('()')
      this.choice.sort()
      qArr.splice(1, 0, '（'+this.choice.join('、')+'）')
      return qArr.join('')
    }
  },
  mounted () {
    // debugger
    this.loadNextQuestion()
    this.initPlayer()
  },
  
  beforeDestroy () {
    if (this.player)
      this.player.dispose()
  },
  methods: {
    initPlayer () {
        this.player = videojs(this.$el.querySelector('#my_video_1'),{
        controls: this.controls,
        autoplay: this.autoplay
        })
        
        let vm = this
        this.player.ready(function () {
            if(vm.startPlay)
                vm.player.play()
        function ontimeupdate () {
        if (Math.round(this.currentTime()) == _p) {
            this.pause()
            vm.showQuestion = true
            // vm.$refs.audio.play()
            if (vm.pausetime.length) 
            _p = vm.pausetime.shift()
            else
            this.off('timeupdate', ontimeupdate)
        } 
        }
        let _p = vm.pausetime.shift()
        if (vm.questions.length)
            this.on('timeupdate', ontimeupdate)  
        })
        this.player.on('ended', () => {
            this.$emit('ended')
        })
    },
    onsubmit () {
    if (this.choice.length) {
        this.showFeedback = true
        this.choice.sort()
        let correct = false
        if (this.correctChoice.length == this.choice.length) {
          correct = this.correctChoice.every((item, i) => item == this.choice[i])
        }
        if (correct) 
          this.feedback = '答对了'
        else 
          this.feedback = `正确答案是${this.correctChoice.join('')}`   
      }
    },
    toAlpha (i) {
      return String.fromCharCode('A'.charCodeAt(0)+i)
    },
    oncontinue () {
      this.showQuestion = false
      this.showFeedback = false
      this.player.play()
      this.loadNextQuestion()
    },
    loadNextQuestion () {
     if(!this.questions.length)
        return
      this.correctChoice = []
      this.choice = []
      let qSet  = this.questions.shift()
      this.question = qSet.q
      this.type = qSet.t
      let _keys = Object.keys(qSet.c)
      this.choices = []
      for (let i = 0; i < _keys.length; i++) {
        let _key = _keys[i]
        this.choices[i] = qSet.c[_key]
      }
      this.correctChoice = qSet.a.split('').map(item => item.toUpperCase())
      this.correctChoice.sort()
    }
  },
}
</script>
<style lang='stylus' scoped>
.video-js
  position relative
.vjs-big-play-button
  position absolute
  z-index 1000
.displayArea
    position absolute
    top 208px
    left 186px
  .video-wrapper
    width 765px
    height 418px-12px
  .video-js 
      position: relative !important;
      width: 100% !important;
      height: auto !important;
  .vjs-poster 
      position: absolute !important;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
  .gallery
    width 777px
    height 418px
 
.question
  // font-family 'microsoft yahei'
  position relative
  color: #4e280a
  padding-top 44px
  padding-left 28px
  padding-right 28px
  position absolute
  top 210px
  left 190px
  width 777px - 8px
  height 418px - 8px
  background-color #fbefdf
  z-index 2
  p
    margin-bottom 36px
    font-size 18px
    border-bottom 1px dotted #4e280a
    padding-bottom 10px
  .choice
    margin-left 30px
    line-height 2
  input
    margin-right 10px
  button.submit, button.continue
    background-color #ad8359
    color #fff
    padding 4px 12px
    position absolute
    top 365px
    left 660px
    &.disabled
      background-color: lighten(#ad8359, 40%)
      &:hover
        cursor not-allowed
</style>

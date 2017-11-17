<template>
  <section-layout :spriteShow='false' :bgStyle="bgStyle" :to="{name: 'mainMenu'}">
      <div slot='content'>
        <div class='contentWrap'>
          <div id="title">
            <h3>模拟演练题</h3>
            <h5>{{titles[process]}}</h5>
          </div>
          <component @done='ondone' :is="currentView"></component>
        </div>
      </div>
  </section-layout>
</template>
<script>

import SectionLayout from '@/components/SectionLayout'
import Match from '@/components/Match'
import Sort from '@/components/Sort'
import Sort2 from '@/components/Sort2'
    export default {
        data() {
            return {
                currentView: 'Match',
                process: 0,
                titles: ["消防安全知识匹配题", "消防安全知识排序题", "消防安全知识排序题"],
                bgStyle: {
                  backgroundImage: `url(${require('./test/bg.png')})`,
                  backgroundRepeat: "no-repeat"
                },
            }
        },
        methods: {
          ondone(payload) {
            this.currentView = payload.currentView
            this.process++
          }
        },
        components: {
            SectionLayout,
            Match,
            Sort,
            Sort2
        },
    }
</script>
<style lang="stylus" scoped>
.contentWrap
  width 893px
  height 532px
  position absolute
  left 74px
  top 134px
  // outline 1px solid black
#title
  margin-top 27px
  text-align center
  height 90px
  h3
    color #fdc710
    font-size 27px
    letter-spacing 3px
  h5
    color #e62327
    font-size 24px
    letter-spacing 2px
</style>


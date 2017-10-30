<template>
  <div id="app">
    <transition name='fade' mode='out-in'>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='stylus'>
/* http//meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video
  margin 0
  padding 0
	border 0
	font-size 100%
	font inherit
	vertical-align baseline
  box-sizing border-box

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section
	display block

body
	line-height 1

ol, ul
	list-style none

blockquote, q
	quotes none

blockquotebefore, blockquoteafter,
qbefore, qafter
	content ''
	content none

table
	border-collapse collapse
	border-spacing 0

/* video.js */
.video-js
    font-size 20px
    color blue
    .vjs-slider
        background-color #a8a8ff
        background-color rgba(168, 168, 255, 0.5)
    .vjs-load-progress
        background white
        background rgba(168, 168, 255, 0.5)
        div
            background white
            background rgba(168, 168, 255, 0.75)

.vjs-default-skin
    .vjs-big-play-button
        font-size 3em
        line-height 1.5em
        height 1.5em
        width 3em
        border 0.06666em solid yellow
        border-radius 0.3em
        left 50%
        top 50%
        margin-left -1.5em
        margin-top -0.75em

.video-js .vjs-control-bar,
.video-js .vjs-big-play-button,
.video-js .vjs-menu-button .vjs-menu-content
    background-color rgba(255, 255, 255, 0.7)

.video-js .vjs-volume-level,
.video-js .vjs-play-progress,
.video-js .vjs-slider-bar
    background yellow

@import url('./assets/videojs/video-js.css');
/* application */

#app 
  width 1024px
  height 768px
  margin 20px auto
.page
  width 1024px
  height 768px
  box-sizing border-box
  position relative
  overflow: hidden


.fade-enter-active, .fade-leave-active 
  transition: opacity, 0.5s

.fade-enter, .fade-leave-to 
  opacity: 0

button
  border none 
  cursor pointer
  &:focus
    outline none 
a, li:focus
  outline none

.description
  padding 10px
  .wrap
    display flex
    .img-wrap
      flex-basis 400px
      flex-shrink 0
      flex-grow 0
      padding-right 10px
    img
      max-width 100%
      height auto
  p
    font-size 18px
    line-height 1.8
    color #663300
  strong
    color #ff9900
    font-size 36px
    font-weight 400

</style>



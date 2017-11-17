<template>
  <div id="app">
    <transition name='fade' mode='out-in'>
      <router-view></router-view>
    </transition>
    <audio ref='btnSound' @ended='onended' :src="require('@/components/btn_sound.mp3')"></audio>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {

    }
  },
  methods: {
    onended() {
      this.$store.commit('toggleBtnSound')
    }
  },
  computed: {
    btnSoundPlay () {
      return this.$store.state.btnSoundPlay
    }
  },
  watch: {
    btnSoundPlay() {
      if (this.btnSoundPlay) {
        this.$refs.btnSound.play()
      }
    }
  }
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

/*
  Player Skin Designer for Video.js
  http://videojs.com

  To customize the player skin edit 
  the CSS below. Click "details" 
  below to add comments or questions.
  This file uses some SCSS. Learn more  
  at http://sass-lang.com/guide)

  This designer can be linked to at:
  https://codepen.io/heff/pen/EarCt/left/?editors=010
*/
.video-js {
  /* The base font size controls the size of everything, not just text.
     All dimensions use em-based sizes so that the scale along with the font size.
     Try increasing it to 15px and see what happens. */
  font-size: 10px;
  /* The main font color changes the ICON COLORS as well as the text */
  color: #fff;
}

/* The "Big Play Button" is the play button that shows before the video plays.
   To center it set the align values to center and middle. The typical location
   of the button is the center, but there is trend towards moving it to a corner
   where it gets out of the way of valuable content in the poster image.*/
.vjs-default-skin .vjs-big-play-button {
  /* The font size is what makes the big play button...big. 
     All width/height values use ems, which are a multiple of the font size.
     If the .video-js font-size is 10px, then 3em equals 30px.*/
  font-size: 3em;
  /* We're using SCSS vars here because the values are used in multiple places.
     Now that font size is set, the following em values will be a multiple of the
     new font size. If the font-size is 3em (30px), then setting any of
     the following values to 3em would equal 30px. 3 * font-size. */
  /* 1.5em = 45px default */
  line-height: 1.5em;
  height: 1.5em;
  width: 3em;
  /* 0.06666em = 2px default */
  border: 0.06666em solid #fff;
  /* 0.3em = 9px default */
  border-radius: 0.3em;
  /* Align top left. 0.5em = 15px default */
  left: 0.5em;
  top: 0.5em;
}

/* The default color of control backgrounds is mostly black but with a little
   bit of blue so it can still be seen on all-black video frames, which are common. */
.video-js .vjs-control-bar,
.video-js .vjs-big-play-button,
.video-js .vjs-menu-button .vjs-menu-content {
  /* IE8 - has no alpha support */
  background-color: #2B333F;
  /* Opacity: 1.0 = 100%, 0.0 = 0% */
  background-color: rgba(43, 51, 63, 0.7);
}

/* Slider - used for Volume bar and Progress bar */
.video-js .vjs-slider {
  background-color: #73859f;
  background-color: rgba(115, 133, 159, 0.5);
}

/* The slider bar color is used for the progress bar and the volume bar
   (the first two can be removed after a fix that's coming) */
.video-js .vjs-volume-level,
.video-js .vjs-play-progress,
.video-js .vjs-slider-bar {
  background: #fff;
}

/* The main progress bar also has a bar that shows how much has been loaded. */
.video-js .vjs-load-progress {
  /* For IE8 we'll lighten the color */
  background: #bfc7d3;
  /* Otherwise we'll rely on stacked opacities */
  background: rgba(115, 133, 159, 0.5);
}

/* The load progress bar also has internal divs that represent
   smaller disconnected loaded time ranges */
.video-js .vjs-load-progress div {
  /* For IE8 we'll lighten the color */
  background: white;
  /* Otherwise we'll rely on stacked opacities */
  background: rgba(115, 133, 159, 0.75);
}


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
.user
  position absolute
  right 0
  top 10px
  z-index 1
  text-align right 
  img:nth-child(1) 
    width 30%
    height auto
  img:nth-child(2) 
    width 7%
    height auto
</style>



<template>
    <div>
        <img ref='img' :src='gif' v-show='showGif' />
        <img ref='static' v-show='!showGif' :src="spriteStatic" alt="">
        <audio :src='audio' ref='audio'></audio>
    </div>
</template>
<script>
import $ from 'jquery'
    export default {
        data() {
            return {
                showGif: true
            }
        },
        props: {
            gif: {
                default: require('@/components/spriteComp.png'),
                // default: require('@/components/sprite_hose.gif'),
                type: String
            },
            audio: {
                type: String
            },
            spriteStatic: {
                default: require('@/components/sprite_hose_static.png'),
                type: String
            }
        },
        mounted() {
            let vm = this
            $(this.$refs.img).on('load', function () {
                vm.$refs.audio.play()
                $(vm.$refs.audio).on('ended', function () {
                    vm.showGif = !vm.showGif
                })
            })
        }
    }
</script>
<style lang="stylus" scoped>

</style>


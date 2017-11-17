<template>
    <hall-layout :audio="require('@/audio/11-器械展示厅.mp3')">
        <img slot='title' src='./display/title.png' />
        <div slot="content">
            <div class="menu">
                <router-link tag='div' class="btn" :to="{name: 'mark'}">
                  <v-button>
                      <img src="./display/btn01.png" alt="">
                  </v-button>
                </router-link>
                <router-link tag='div' class="btn" :to="{name: 'alarm'}">
                  <v-button>
                      <img src="./display/btn02.png" alt="">
                  </v-button>
                </router-link>
                <router-link tag='div' class="btn" :to="{name: 'extinguish'}">
                  <v-button>
                      <img src="./display/btn03.png" alt="">
                  </v-button>
                </router-link>
            </div>
        </div>
    </hall-layout>
</template>
<script>
import HallLayout from '@/components/HallLayout'
import VButton from '@/components/Button'
    export default {
        data() {
            return {

            }
        },
        components: {
            HallLayout,
            VButton
        }
    }
</script>
<style lang="stylus" scoped>
.menu
  display flex
  justify-content space-between
  margin-top 15px
  margin-left 90px
</style>


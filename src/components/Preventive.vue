<template>
    <hall-layout :audio='require("@/audio/08-火灾预防厅.mp3")'>
        <img slot='title' src='./preventive/title.png' />
        <div slot="content">
            <div class="menu">
                <router-link tag='div' class="btn" :to="{name: 'danger'}">
                  <v-button>
                      <img src="./preventive/btn01.png" alt="">
                  </v-button>
                </router-link>
                <router-link tag='div' class="btn" :to="{name: 'method'}">
                  <v-button>
                      <img src="./preventive/btn02.png" alt="">
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
</style>


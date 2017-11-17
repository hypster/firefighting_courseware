<template>
    <hall-layout :audio='require("@/audio/03-知识培训厅.mp3")'>
        <img slot='title' src='./knowhow/title.png' />
        <div slot="content">
            <div class="menu">
                <router-link tag='div' class="btn" :to="{name: 'painmemory'}">
                  <v-button>
                      <img src="./knowhow/01.png" alt="">
                  </v-button>
                </router-link>
                <router-link tag='div' class="btn" :to="{name: 'fireformation'}">
                  <v-button>
                      <img src="./knowhow/02.png" alt="">
                  </v-button>
                </router-link>
                <router-link tag='div' class="btn" :to="{name: 'firetype'}">
                  <v-button>
                      <img src="./knowhow/03.png" alt="">
                  </v-button>
                </router-link>
                <router-link tag='div' class="btn" :to="{name: 'mostoccuredtime'}">
                  <v-button>
                      <img src="./knowhow/04.png" alt="">
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


import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import User from '@/components/User'
import Welcome from '@/components/Welcome'
import MainMenu from '@/components/MainMenu'
import Knowhow from '@/components/Knowhow'
  import PainMemory from '@/components/PainMemory'
  import FireFormation from '@/components/FireFormation'
  import FireType from '@/components/FireType'
  import MostOccuredTime from '@/components/MostOccuredTime'
import Preventive from '@/components/Preventive'
  import Danger from '@/components/Danger'
  import Method from '@/components/Method'
import Display from '@/components/Display'
  import Alarm from '@/components/Alarm'
  import Extinguish from '@/components/Extinguish'
  import Mark from '@/components/Mark'
import Rescue from '@/components/Rescue'
import Test from '@/components/Test'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: User,
      children: 
      [
        {
          path: '/main-menu',
          name: 'mainMenu',
          component: MainMenu
        },
        {
          path: '/',
          name: 'welcome',
          component: Welcome
        },
        {
          path: '/knowhow',
          name: 'knowhow',
          component: Knowhow
        },
          {
            path: '/knowhow/painmemory',
            name: 'painmemory',
            component: PainMemory
          },
          {
            path: '/knowhow/fireformation',
            name: 'fireformation',
            component: FireFormation
          },
          {
            path: '/knowhow/firetype',
            name: 'firetype',
            component: FireType
          },
          {
            path: '/knowhow/mostoccuredtime',
            name: 'mostoccuredtime',
            component: MostOccuredTime
          },
        {
          path: '/preventive',
          name: 'preventive',
          component: Preventive
        },
        {
          path: '/preventive/danger',
          name: 'danger',
          component: Danger
        },
        {
          path: '/preventive/method',
          name: 'method',
          component: Method
        },
        {
          path: '/display',
          name: 'display',
          component: Display
        },
        {
          path: '/display/alarm',
          name: 'alarm',
          component: Alarm
        },
        {
          path: '/display/extinguish',
          name: 'extinguish',
          component: Extinguish
        },
        {
          path: '/display/mark',
          name: 'mark',
          component: Mark
        },
        {
          path: '/rescue',
          name: 'rescue',
          component: Rescue
        },
        {
          path: '/test',
          name: 'test',
          component: Test
        }
      ]
    }
  ]
})

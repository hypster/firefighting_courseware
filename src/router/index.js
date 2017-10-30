import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Welcome from '@/components/Welcome'
import MainMenu from '@/components/MainMenu'
import Pavilion from '@/components/Pavilion'
import Test from '@/components/Test'
/* 知识培训厅 */
import KnowHow from '@/components/pavilion/knowhow/KnowHow'
  import PainMemory from '@/components/pavilion/knowhow/hall/PainMemory'
  import EarthquakeFormation from '@/components/pavilion/knowhow/hall/EarthquakeFormation'
  import EarthquakeType from '@/components/pavilion/knowhow/hall/EarthquakeType'
  import EarthquakeActiveZone from '@/components/pavilion/knowhow/hall/EarthquakeActiveZone'

import Forecast from '@/components/pavilion/forecast/Forecast'
  import ForecastMethod from '@/components/pavilion/forecast/ForecastMethod'
  import ForecastTool from '@/components/pavilion/forecast/ForecastTool'
  import ForecastAction from '@/components/pavilion/forecast/ForecastAction'
  import EarthquakeRumor from '@/components/pavilion/forecast/EarthquakeRumor'

import Protect from '@/components/pavilion/protect/Protect'
  import Indoor from '@/components/pavilion/protect/Indoor'
  import Auto from '@/components/pavilion/protect/Auto'
  import Outdoor from '@/components/pavilion/protect/Outdoor'

import Rescue from '@/components/pavilion/rescue/Rescue'
  import RescueSelf from '@/components/pavilion/rescue/Self'
  import CoRescue from '@/components/pavilion/rescue/Co'
  import PostRescue from '@/components/pavilion/rescue/Post'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/mainmenu',
      name: 'mainMenu',
      component: MainMenu
    },
    {
      path: '/pavilion',
      name: 'pavilion',
      component: Pavilion,
    },
    {
      path: '/pavilion/know-how',
      name: 'know-how',
      component: KnowHow
    },
    {
      path: '/pavilion/know-how/pain-memory',
      name: 'pain-memory',
      component: PainMemory
    },
    {
      path: '/pavilion/know-how/earthquake-formation',
      name: 'earthquake-formation',
      component: EarthquakeFormation
    },
    {
      path: '/pavilion/know-how/earthquake-type',
      name: 'earthquake-type',
      component: EarthquakeType
    },
    {
      path: '/pavilion/know-how/earthquake-active-zone',
      name: 'earthquake-active-zone',
      component: EarthquakeActiveZone
    },

    {
      path: '/pavilion/how-to-forecast',
      name: 'how-to-forecast',
      component: Forecast
    },
    {
      path: '/pavilion/how-to-forecast/forecast-method',
      name: 'forecast-method',
      component: ForecastMethod
    },
    {
      path: '/pavilion/how-to-forecast/forecast-tool',
      name: 'forecast-tool',
      component: ForecastTool
    },
    {
      path: '/pavilion/how-to-forecast/forecast-action',
      name: 'forecast-action',
      component: ForecastAction
    },
    {
      path: '/pavilion/how-to-forecast/earthquake-rumor',
      name: 'earthquake-rumor',
      component: EarthquakeRumor
    },
    {
      path: '/pavilion/how-to-protect',
      name: 'how-to-protect',
      component: Protect
    },
    {
      path: '/pavilion/how-to-protect/indoor',
      name: 'protect-indoor',
      component: Indoor
    },
    {
      path: '/pavilion/how-to-protect/inauto',
      name: 'protect-in-auto',
      component: Auto
    },
    {
      path: '/pavilion/how-to-protect/outdoor',
      name: 'protect-outdoor',
      component: Outdoor
    },
    {
      path: '/pavilion/how-to-rescue/rescue',
      name: 'how-to-rescue',
      component: Rescue
    },
    {
      path: '/pavilion/how-to-rescue/self-rescue',
      name: 'self-rescue',
      component: RescueSelf
    },
    {
      path: '/pavilion/how-to-rescue/co-rescue',
      name: 'co-rescue',
      component: CoRescue
    },
    {
      path: '/pavilion/how-to-rescue/post-rescue',
      name: 'post-rescue',
      component: PostRescue
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
      beforeEnter (to, from, next) {
          next(store.state.canTest)
          store.state.menu.showAlert = true
      }
    },
    {
      path: '*',
      component: MainMenu
    }
    
  ]
})

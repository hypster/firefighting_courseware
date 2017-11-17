import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    canTest: false,
    menu: {
        showAlert: false
    },
    btnSoundPlay: false
}
const mutations = {
    enableTest (state) {
        state.canTest = true
    },
    toggleBtnSound() {
        state.btnSoundPlay = !state.btnSoundPlay
    }    
}
const actions = {
    
}
const store = new Vuex.Store({
    state,
    mutations,
    actions
})
export default store
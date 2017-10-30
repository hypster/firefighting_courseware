import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    canTest: false,
    menu: {
        showAlert: false
    }
}
const mutations = {
    enableTest (state) {
        state.canTest = true
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
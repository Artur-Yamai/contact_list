import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    validate: false,
    logAndPass: {
      login: 'login',
      password: 'password'
    },

    contactList: [
      {
        id: 0,
        name: 'Name',
        phone: '+79999999999',
      }
    ]
  },

  getters: {
    validate: state => state.validate 
  },

  mutations: {

    dataComparison(state, {enteredLogin, enteredPassword}) {
      let data = state.logAndPass;

      if (data.login === enteredLogin && data.password === enteredPassword) {
        state.validate = true;
        console.log(true);
      }

    }

  },

  actions: {

    DATA_COMPRARISON({commit}, payLoad) {
      commit('dataComparison', payLoad)
    }

  },

  modules: {
  }
})

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
        name: 'Artur Yamaletdinov',
        phone: '+79999999999',
      },
      {
        id: 1,
        name: 'Anna Yamaletdinov  ',
        phone: '+79999999999',
      },
      {
        id: 1,
        name: 'Oleg Bagauov',
        phone: '+79999999999',
      },{
        id: 1,
        name: 'Aliya Zainullina',
        phone: '+79999999999',
      }
    ],

    foundOnRequest: []
  },

  getters: {
    validate: state => state.validate,

    searchContact: state => function (name) {
      let list = [];

      for (let contact of state.contactList) {

        let hits = contact.name.indexOf(name)

        if (hits >= 0) {
          list.push(contact.name)
        }
      }

      return list;
    }
  },

  mutations: {

    dataComparison(state, {enteredLogin, enteredPassword}) {
      let data = state.logAndPass;

      if (data.login === enteredLogin && data.password === enteredPassword) {
        state.validate = true;
        console.log(true);
      }
    },

    searchContacts(state, searchName) {

      for (let contact of state.contactList) {

        let hits = contact.name.indexOf(searchName)

        if (hits >= 0) {
          state.foundOnRequest.push(contact.name)
        }
      }
    }

  },

  actions: {

    DATA_COMPRARISON({commit}, payLoad) {
      commit('dataComparison', payLoad)
    },

    SEARCH_CONTACTS({commit}, payLoad) {
      commit('searchContacts', payLoad)
    }

  },

  modules: {
  }
})

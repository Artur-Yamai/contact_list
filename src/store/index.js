import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    validate: false,
    logAndPass: {
      login: 'login',
      password: 'password'
    },

    contactList: []
  },

  getters: {
    validate: state => state.validate,

    allContacts: state => state.contactList,

    searchContact: state => requestName => {
      let list = [];

      for (let contact of state.contactList) {
        let lowerCaseName = contact.name.toLowerCase();

        let hits = lowerCaseName.indexOf(requestName.toLowerCase());

        if (hits >= 0) {
          list.push(contact)
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

    getContacts(state, allContact) {
      state.contactList = allContact;
    },

    deleteContact(state, contactID) {
      let contact = state.contactList.find(contact => contact.id === contactID)
      let index = state.contactList.indexOf(contact);

      state.contactList.splice(index, 1)
    
    }

  },

  actions: {

    GET_CONTACTS({commit}) {
      axios('http://localhost:3000/contacts')
        .then(resp => {
          commit('getContacts', resp.data)
        })
    },

    DATA_COMPRARISON({commit}, payLoad) {
      commit('dataComparison', payLoad)
    },

    ADD_CONTACT({dispatch}, {name, phone}) {
      axios.post('http://localhost:3000/contacts', {
        id: +new Date, // костыль для создания уникального id
        name: name,
        phone: phone
      }).then( () => {
        dispatch('GET_CONTACTS')
      })
    },

    DELETE_CONTACT({commit}, contactID) {
      // удаляет контакт из БД
      axios.delete(`http://localhost:3000/contacts/${contactID}/`)
        //  случае успеха удаляет контакт из списка для отображения
        .then(() => commit('deleteContact', contactID))
        .catch(err => console.error(err));     
    }

  },

  modules: {
  }
})

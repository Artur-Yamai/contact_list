import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    validate: true,
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
      }
    },

    getContacts(state, allContact) {
      state.contactList = allContact;
    },

    deleteContact(state, contactID) {
      let contact = state.contactList.find(contact => contact.id === contactID);
      let index = state.contactList.indexOf(contact);

      state.contactList.splice(index, 1)
    
    },

    changeContact(state, {name, phone, contactID}) {
      let contact = state.contactList.find(contact => contact.id === contactID);
      let index = state.contactList.indexOf(contact);

      state.contactList[index].name = name;
      state.contactList[index].phone = phone;
    },

    searchContact(state, list) {
      state.contactList = list
    }

  },

  actions: {
    // проверяет введенные данные в поле для авторизации
    DATA_COMPRARISON({commit}, payLoad) {
      commit('dataComparison', payLoad)
    },

    // берет все контакты из БД
    GET_CONTACTS({commit}) {
      axios('http://localhost:3000/contacts')
        .then(resp => {
          commit('getContacts', resp.data)
        }).catch(err => console.error(err))
    },

    // отправляет в БД новый контакт
    ADD_CONTACT({dispatch}, {name, phone}) {
      axios.post('http://localhost:3000/contacts', {
        id: +new Date, // костыль для создания уникального id
        name: name,
        phone: phone
      }).then( () => {
        // в случае успеха обнавляет данные в сторе из БД
        dispatch('GET_CONTACTS');
      }).catch(err => console.error(err))
    },

    DELETE_CONTACT({commit}, contactID) {
      // удаляет контакт из БД
      axios.delete(`http://localhost:3000/contacts/${contactID}/`)
        //  случае успеха удаляет контакт из списка для отображения
        .then(() => commit('deleteContact', contactID))
        .catch(err => console.error(err));
    },

    // изменяет данные контакта
    CHANGE_CONTACT({commit}, payLoad) {
      axios.put(`http://localhost:3000/contacts/${payLoad.contactID}`, {
        name: payLoad.name,
        phone: payLoad.phone
      }).then(() => commit('changeContact', payLoad))
        .catch(err => console.error(err));
    },

    // сортирует для стора контакты по именам
    SEARCH_CONTACT({commit}, value) {
      axios.get(`http://localhost:3000/contacts`)
          .then(resp => {
            let list = [];

            for (let contact of resp.data) {
              let lowerCaseName = contact.name.toLowerCase();
      
              let hits = lowerCaseName.indexOf(value.toLowerCase());
      
              if (hits >= 0) {
                list.push(contact)
              }
            }

            commit('searchContact', list)
          })
    }

  },

  modules: {

  }
})

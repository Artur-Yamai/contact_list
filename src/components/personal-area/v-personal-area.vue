<template>
  <div class="personal-area">

    <header class="header">
      <h1 class="header__title">Contact list</h1>
    </header>
    
    <v-search-contacts
      @foundContacts="foundContacts"
    ></v-search-contacts>
    
    <v-contact-list></v-contact-list>

    <v-add-contact-window
      v-if="isShowAddContactForm"
      @contactData="newContactData"
      @closeWondow="isShowAddContactForm = false"
    >Add new contact</v-add-contact-window>


    <span class="show-form"
          v-else
          @click="isShowAddContactForm = true"
    >&plus;</span>
  </div>
</template>

<script>
import vSearchContacts from './v-search-contacts'
import vContactList from './v-contact-list'
import vAddContactWindow from './v-popup'

export default {
  components: {
    vSearchContacts,
    vContactList,
    vAddContactWindow
  },

  data() {
    return {
      isShowAddContactForm: false
    }
  },

  methods: {
    foundContacts(data) {
      console.log(data);
    },

    newContactData(data) {
      this.$store.dispatch('ADD_CONTACT', {
        name: data.name,
        phone: data.phone
      });

      this.isShowAddContactForm = false;
    },
  }
  
}
</script>

<style lang="scss">

.header{
  padding: 24px;
  background-color: rgb(37, 201, 255);

  &__title {
    text-align: center;
    color: white;
  }
}

.show-form {
  position: fixed;
  bottom: 40px;
  right: 40px;
  font-size: 40px;
  width: 45px;
  text-align: center;
  background-color: rgb(0, 255, 0);
  color: white;
  border-radius: 50px;
  cursor: pointer;
  z-index: 1;
}
  
</style>
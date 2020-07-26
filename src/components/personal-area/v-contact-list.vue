<template>
  <div class="contact-list block-without-scroll">
    <v-contact-item
        v-for="contact in allContacts"
        :key="contact.id"
        :contact="contact"
    ></v-contact-item>
  </div>
</template>

<script>
import vContactItem from './v-contact-item'

import {mapGetters} from 'vuex'

export default {
  components: {
    vContactItem
  },

  computed: {
    ...mapGetters(['allContacts'])
  },

  created() {
    this.$store.dispatch('GET_CONTACTS');
  }
  
}
</script>

<style lang="scss">
  
.contact-list {
  width: 100%;
  height: calc(100vh - 85px - 41px);
  background-color: rgb(227, 233, 255);
  overflow: scroll;
}

</style>
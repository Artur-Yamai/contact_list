<template>
  <div class="contact-item">
    <v-change-contact-window v-if="showChangeWindow"
                          :oldName="contact.name"
                          :oldPhone="contact.phone"
                          @closeWondow="showChangeWindow = false"
                          @contactData="changeDataContact"
    >Change contact</v-change-contact-window>

    <div class="contact-item__name">{{ contact.name }}</div>

    <div class="contact-item__phone">{{ contact.phone }}</div>

    <div class="contact-item__control-block">
      <button class="contact-item__delete btn btn__blue"
              @click="showChangeWindow = true"
      >Change</button>
      <button class="contact-item__delete btn btn__red"
              @click="deleteThisContact"
      >Delete</button>
    </div>
    
  </div>
</template>

<script>
import vChangeContactWindow from './v-popup'

export default {
  components: {
    vChangeContactWindow
  },

  props: ['contact'],

  data() {
    return {
      showChangeWindow: false
    }
  },

  methods: {
    deleteThisContact() {
      this.$store.dispatch('DELETE_CONTACT', this.contact.id);
    },

    changeDataContact(data) {
      this.$store.dispatch('CHANGE_CONTACT', {
        name: data.name,
        phone: data.phone,
        contactID: this.contact.id
      });

      this.showChangeWindow = false
    }

  }
  
}
</script>

<style lang="scss">

.contact-item {
  display: flex;
  padding: 8px 24px;
  display: flex;
  border-bottom: 1px solid lightgray;

  &__name,
  &__phone {
    width: calc(100% / 3);
  }

  &__phone {
    padding-left: 56px;
  }

  &__control-block {
    display: flex;
    justify-content: center;
    width: calc(100% / 3);
  }

  &__delete {
    margin-right: 8px;
  }


}
  
</style>
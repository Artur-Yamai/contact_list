<template>
  <div class="contact-item">
    <div class="contact-item__name">{{ contact.name }}</div>

    <div class="contact-item__phone">{{ contact.phone }}</div>

    <div class="contact-item__control-block">
      <button class="contact-item__delete btn btn__blue">Change</button>
      <button class="contact-item__delete btn btn__red"
              @click="deleteThisContact"
      >Delete</button>
    </div>
    
  </div>
</template>

<script>
export default {
  props: ['contact'],

  methods: {

    deleteThisContact() {
      this.$store.dispatch('DELETE_CONTACT', this.contact.id);
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
  &__phone,
  &__control-block {
    width: calc(100% / 3);
  }


}
  
</style>
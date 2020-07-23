<template>
  <div class="search-contacts">
    <input type="text"
           class="search-contacts-input input-radius"
           v-model="fieldValue"
    >
    <button class=" search-contacts-button btn btn__green"
            @click.prevent="searchEnterValue"
    >Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fieldValue: ''
    }
  },

  methods: {
    searchEnterValue() {
      let users = this.$store.getters['searchContact'](this.fieldValue);

      this.$emit('foundContacts', users)
    }
  }
  
}
</script>

<style lang="scss">
  .search-contacts {
    padding: 8px 16px;
    background-color: hsl(195, 80%, 57%);

    &__input {
      width: 40%;
    }

    &__button {

    }
  }
</style>
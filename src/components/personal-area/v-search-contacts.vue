<template>
  <div class="search-contacts">
    <form action="" @submit.prevent="searchEnterValue">
      <input type="text"
             class="search-contacts__input input-radius"
             placeholder="search name"
             v-model="fieldValue"
      >
      <button class=" search-contacts__button btn btn__green"
              @click.prevent="searchEnterValue"
      >Search</button>

      <button class="btn btn__black"
              @click.prevent="showAllContacts"
      >All contacts</button>
    </form>
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
      this.$store.dispatch('SEARCH_CONTACT', this.fieldValue)
      
      this.fieldValue = ''
    },

    showAllContacts() {
      this.$store.dispatch('GET_CONTACTS')
    }
  }
  
}
</script>

<style lang="scss">
  .search-contacts {
    padding: 8px 16px;
    background-color: hsl(195, 80%, 57%);

    &__button {
      margin: 0 16px;
    }
  }
</style>
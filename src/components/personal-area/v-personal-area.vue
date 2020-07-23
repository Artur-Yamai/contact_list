<template>
  <div class="personal-area">

    <header class="header">
      <h1 class="header__title">Contact list</h1>
    </header>
    
    <v-search-contacts></v-search-contacts>
    
    <v-contact-list></v-contact-list>

  </div>
</template>

<script>
import vSearchContacts from './v-search-contacts'
import vContactList from './v-contact-list'

export default {
  components: {
    vSearchContacts,
    vContactList
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
  
</style>
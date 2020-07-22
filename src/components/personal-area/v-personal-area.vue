<template>
  <div class="personal-area">

    <header class="header">
      <h1 class="header__title">Contact list</h1>
    </header>
    
    <v-contact-list></v-contact-list>

  </div>
</template>

<script>
import vContactList from './v-contact-list'

export default {
  components: {
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
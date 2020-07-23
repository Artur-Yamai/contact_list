<template>
  <div class="contact-list">
    <v-contact-item></v-contact-item>
  </div>
</template>

<script>
import vContactItem from './v-contact-item'

export default {
  components: {
    vContactItem
  },

  computed: {
  }
  
}
</script>

<style lang="scss">
  
.contact-list {
  width: 100%;
  height: calc(100vh - 85px);
  background-color: rgb(227, 233, 255);
}

</style>
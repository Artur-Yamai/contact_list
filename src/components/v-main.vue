<template>
  <div>
    <h3 class="not-authorized" 
        v-if="!validate"
    >You are not logged in</h3>

    <v-personal-area v-else></v-personal-area>

  </div>
</template>

<script>
import vPersonalArea from './personal-area/v-personal-area'

import {mapGetters} from 'vuex'

export default {
  components: {
    vPersonalArea
  },

  computed: {
    ...mapGetters(['validate'])
  }
  
}
</script>

<style lang="scss">
.not-authorized {
  margin-top: 100px;
  text-align-last: center;
}
  
</style>
<template>
<div class="fade">

  <form class="add-contact" @submit.prevent="addContact">

    <div class="add-contact__header">
      <p class="add-contact__close"
         @click="closeWondow"
      >&#10006;</p>
      <h3 class="add-contact__title">
        <slot></slot>
      </h3>
    </div>
    

    <p class="add-contact__name-text">Name</p>
    <input class="add-contact__name-input input-radius" 
           type="text" placeholder="Karl" required autofocus
           v-model="name">
    
    <p class="add-contact__phone-text">Phone</p>
    <input class="add-contact__phone-input input-radius" 
           type="phone" placeholder="+79999999999" required
           v-model="phone">
    
    <button class="add-contact__button btn btn__green"
            @click.prevent="contactData"
    >Add</button>
  </form>

</div>
</template>

<script>
export default {
  props: ['oldName', 'oldPhone'],

  data() {
    return {
      name: '' || this.oldName,
      phone: '' || this.oldPhone
    }
  },

  computed: {

  },

  methods: {
    contactData() {
      this.$emit('contactData', {
        name: this.name,
        phone: this.phone
      })
    },

    closeWondow() {
      this.$emit('closeWondow')
    }
  }
  
}
</script>

<style lang="scss">

.fade {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vH;
  background-color: rgba(0, 0, 0, 0.306);
  z-index: 2;
}

.add-contact {
  width: 250px;
  margin: 150px auto 0;
  padding: 16px;
  background-color: rgb(37, 201, 255);
  border-radius: 8px;
  z-index: 5;

  &__close {
    color: white;
    text-align: end;
    cursor: pointer;
  }

  &__title {
    text-align: center;
    color: white;
  }

  &__name-text,
  &__phone-text {
    margin: 8px 0 4px;
    color: white;
  }

  &__name-input,
  &__phone-input {
    width: 100%;
  }

  &__button {
    display: block;
    margin: 16px auto;
  }
}

</style>
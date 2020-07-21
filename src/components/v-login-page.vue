<template>
  <div class="login-page">    
    <form class="login-page__form" @submit.prevent="validationValue">

      <div class="login-page__login">
        <p class="login-page__login-text">Login</p>
        <input type="text" 
               class="login-page__login-input input-radius"
               v-model="loginValue"
        >
      </div>

      <div class="login-page__password">
        <p class="login-page__password-text">Password</p>
        <input type="password" 
               class="login-page__passwird-input input-radius"
               v-model="passwordValue"
        >
      </div>

      <p class="login-page__error"
         v-if="inputError"
      >
        Error in Login or Password
      </p>

      <button type="button" 
              class="login-page__validation btn btn__black"
              @click.prevent="validationValue"      
      >Log In</button>

    </form>    
  </div>
</template>

<script>
export default {

  data() {
    return {
      loginValue: '',
      passwordValue: '',

      inputError: false
    }
  },

  methods: {
    validationValue() {
      this.$store.dispatch('DATA_COMPRARISON', {
        enteredLogin: this.loginValue,
        enteredPassword: this.passwordValue
      })

      this.passwordValue = '';

      if (this.$store.getters['validate']) {
        this.$router.push({name: 'main'})
      } else {
        this.inputError = true;
      }
    }
  }
  
}
</script>

<style lang="scss">

.login-page{
  width:100%;
  height: 100vh;
  padding-top: 100px;
  // background-color: rgba(0, 0, 0, 0.074);

  &__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightblue;
  padding: 16px;
  margin: auto;
  width: 250px;  
  border-radius: 4px;

  box-shadow: 8px 8px 16px 0 darkgray;
  }

  &__login {
    margin: 8px 4px;
    text-align: center;
  }

  &__login-text {
    margin-bottom: 8px;
  }

  &__password {
    margin: 8px 4px;
    text-align: center;
  }

  &__password-text {
    margin-bottom: 8px;
  }

  &__error {
    color: rgb(255, 38, 0);
    text-shadow: 0 0 8px rgb(255, 145, 126);
  }

  &__validation {
    margin: 8px 4px;
  }
}

  
</style>
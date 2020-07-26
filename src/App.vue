<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

button {
  border: none;
  background-color: white;
  outline: none;

  &:active {
    box-shadow: inset 0 0 6px 0 rgb(88, 88, 88);
  }
}

input {
  border: none;
  outline: none;
}

ul {
  margin-left: 0;
  padding-left: 0;
}

li {
  list-style-type: none;
}


// глобальные классы

.block-without-scroll {
  /* прячем боковой скроллбар */
   -ms-overflow-style: none; /* ie 10+ */
   overflow: -moz-scrollbars-none;/* FF */

  /* хром, сафари */
  &::-webkit-scrollbar { width: 0; }
}

.btn {
  padding: 5px 30px;
  border-radius: 4px;
  background-color: lightgray;
  cursor: pointer;

  &:active {
    box-shadow: inset 0 0 4px 2px darkgray;
    border-radius: 4px;
  }
    
  &__red {    
    background-color: rgb(231, 41, 41);
    color: white;
  } 

  &__green {
    background: lightgreen;
    color: white;
  }

  &__blue {
    background-color: rgb(0, 191, 255);
    color: white;
  }

  &__black {
    background-color: rgb(46, 46, 46);
    color: white;
  }
}

.input-radius {
  padding: 5px 16px;
  border-radius: 16px;
}


</style>

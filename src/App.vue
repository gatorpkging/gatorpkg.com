<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
</script>

<template>
  <div id="app">
    <HeaderComponent />
    <router-view></router-view>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  margin-top: 3vh;
  font-family: "Lexend", sans-serif;
}

body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #1e3784;
  overflow-x: hidden;
}

.link {
  color: #7ac3ff;
  text-decoration: underline;
}
</style>

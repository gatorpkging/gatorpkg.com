<script setup>
import ScrollingImageBannerComponent from '@/components/ScrollingImageBannerComponent.vue';

</script>

<template>
  <div id="app">
    <div class="home">
      <h1>Gator Packaging | Home</h1>
      <ScrollingImageBannerComponent />
    </div>
  </div>
</template>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.home h1 {
  font-size: 40px;
  margin-top: 30px;
}
</style>

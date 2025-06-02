<script setup>
import ImageBannerComponent from '@/components/ImageBannerComponent.vue';

</script>

<template>
  <div id="app">
    <div class="home">
      <h1>Gator Packaging | Home</h1>
      <ImageBannerComponent />
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

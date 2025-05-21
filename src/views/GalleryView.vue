<script setup>
import { ref, computed } from 'vue';
import JumbotronComponent from '@/components/JumbotronComponent.vue';

const folderPath = '/images/gallery/';
const totalImages = 113;
const imagesPerPage = 15;

const currentPage = ref(0);

const images = Array.from({ length: totalImages }, (_, i) => `${folderPath}image${i + 1}.webp`);
const paginatedImages = computed(() =>
  images.slice(currentPage.value * imagesPerPage, (currentPage.value + 1) * imagesPerPage)
);

const goToPrevPage = () => {
  if (currentPage.value > 0) currentPage.value--;
};

const goToNextPage = () => {
  if ((currentPage.value + 1) * imagesPerPage < totalImages) currentPage.value++;
};
</script>

<template>
  <div id="app">
    <JumbotronComponent Title="The Gallery"
      Description="Photos of our robot and team throughout the years that we have been competing in FIRST Robotics." />

    <div class="gallery">
      <div class="arrows">
        <button class="prev" @click="goToPrevPage">Prev</button>
        <button class="next" @click="goToNextPage">Next</button>
      </div>
      <div class="gallery-image">
        <div v-for="(image, index) in paginatedImages" :key="index" class="img-box">
          <img :src="image" :alt="'Image ' + (index + 1)" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.gallery-image {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.gallery-image img {
  height: 350px;
  width: auto;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
}

.arrows {
  position: relative;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
}

.prev,
.next {
  background-color: hsl(210, 50%, 50%);
  color: #ffffff;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  cursor: pointer;
  width: 80px;
  height: 40px;
  margin: 10px;
}
</style>

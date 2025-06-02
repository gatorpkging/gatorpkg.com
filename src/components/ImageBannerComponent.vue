<script>
const folderPath = '/images/banner/';
const totalImages = 10;
const images = Array.from({ length: totalImages }, (_, i) => `${folderPath}${i + 1}.webp`);

function preloadImages(imageArray) {
  imageArray.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

export default {
  name: "ImageBannerComponent",
  data() {
    return {
      images: images
    };
  },
  mounted() {
    preloadImages(this.images);
  }
}
</script>

<template>
  <div class="image-banner">
    <div class="scrolling-images">
      <img v-for="(image, index) in images" :key="index" :src="image" alt="Banner Image" loading="lazy" />
      <img v-for="(image, index) in images" :key="'dup-' + index" :src="image" alt="Banner Image" loading="lazy" />
    </div>
  </div>
</template>

<style scoped>
.image-banner {
  width: 100%;
  overflow: hidden;
  margin: 30px;
}

.scrolling-images {
  display: flex;
  width: max-content;
  animation: scroll-left 40s linear infinite;
}

.scrolling-images img {
  width: 300px;
  height: auto;
  margin-right: 10px;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>

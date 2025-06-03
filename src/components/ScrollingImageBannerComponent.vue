<script>
const imagesPath = '/images/banner/';
const images = [
  imagesPath + '1.webp',
  imagesPath + '2.webp',
  imagesPath + '3.webp',
  imagesPath + '4.webp',
  imagesPath + '5.webp',
  imagesPath + '6.webp',
  imagesPath + '7.webp',
  imagesPath + '8.webp',
  imagesPath + '9.webp',
  imagesPath + '10.webp'
];

export default {
  name: "ScrollingImageBannerComponent",
  data() {
    return {
      images: images
    };
  },
  computed: {
    allImages() {
      // Create enough duplicates to ensure smooth infinite scroll
      return [...this.images, ...this.images, ...this.images];
    }
  }
}
</script>

<template>
  <div class="image-banner">
    <div class="scrolling-images">
      <img v-for="(image, index) in allImages" :key="index" :src="image" alt="Banner Image" loading="eager" />
    </div>
  </div>
</template>

<style scoped>
.image-banner {
  width: 100%;
  overflow: hidden;
  margin: 30px 0;
}

.scrolling-images {
  display: flex;
  width: max-content;
  animation: scroll-left 30s linear infinite;
}

.scrolling-images img {
  width: 400px;
  height: auto;
  flex-shrink: 0;
  clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
  margin-right: -40px; /* Overlap to close the gap */
}

@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-4000px); } /* imageWidth * totalImageCount */
}

</style>

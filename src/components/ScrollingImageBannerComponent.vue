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
  props: {
    text1: {
      type: String,
      default: 'High Quality Materials'
    },
    text2: {
      type: String,
      default: 'Custom Designs'
    },
    text3: {
      type: String,
      default: 'Competitive Pricing'
    }
  },
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
    <div class="overlay-text">
      <h2>{{ text1 }}</h2>
      <hr>
      <h2>{{ text2 }}</h2>
      <hr>
      <h2>{{ text3 }}</h2>
    </div>
    <div class="scrolling-images">
      <img v-for="(image, index) in allImages" :key="index" :src="image" alt="Banner Image" loading="eager" />
    </div>
  </div>
</template>

<style scoped>
.image-banner {
  width: 100%;
  overflow: hidden;
}

.scrolling-images {
  display: flex;
  width: max-content;
  animation: scroll-left 60s linear infinite;
}

.scrolling-images img {
  width: 650px;
  height: auto;
  flex-shrink: 0;
  margin-right: 10px;
  border: 3px solid #000000;
}

@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-650px * 12)); }
}

.overlay-text {
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  align-items: center;
  gap: 10%;
  right: 15%;
  width: 450px;
  height: 487.50px;
  transform: skewX(-20deg);
  background-color: #ffffff;
  z-index: 1;
}

.overlay-text h2 {
  position: relative;
  transform: skewX(20deg);
  font-size: 24px;
  font-weight: bold;
  color: rgb(45, 52, 175);
  text-align: center;
  line-height: 1.5;
}

.overlay-text hr {
  position: relative;
  border: none;
  background: #a0a0a0;
  height: 5px;
  width: 80%;
  position: relative;
  transform: skewX(20deg);
}
</style>

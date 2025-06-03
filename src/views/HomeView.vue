<script setup>
import GatorPkgIcon from '@/components/icons/GatorPkgIcon.vue';
import ScrollingImageBannerComponent from '@/components/ScrollingImageBannerComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<template>
  <div id="app">
    <div class="home">
      <div class="about-container">
        <GatorPkgIcon class="gator-pkg-icon"/>
        <h1> Gator Packaging, INC.</h1>
      </div>
      <div class="about">
        <hr>
        <p>
          Gator Packaging is a privately owned industrial packaging company with over 30 years of experience located in Dexter, MI. near Ann Arbor. Gator Packaging currently does business with a diverse group
          of customers such as: Paladin Brands, Sweepster Broom, General Inspection, Roush Performance Products, and Zoller, Inc. We have a team of experts that have many years of experience in
          various areas of industrial packaging. We work together to provide our customers with the most accurate and cost effective solutions to meet their packaging needs. Gator Packaging manufactures custom crates and
          pallets, converts various foam (polystyrene, polyethylene, and polyurethane) to each customer specification, and designs and distributes all forms of corrugated items such as cartons, displays, and pallets.
        </p>
      </div>
      </div>
      <ScrollingImageBannerComponent class="scrolling-image-banner-component"/>
      <div class="footer-home">
        <img src="/images/sawblade.webp" alt="sawblade" loading="eager" />
        <h2>Need a quote or more information?</h2>
        <h3>Contanct: Julie Chapman (Office Manager / Customer Service)</h3>
        <h3>Email: <a href="mailto:info@gatorpkg.com">info@gatorpkg.com</a> </h3>
        <h3>Phone: <a href="tel:734-222-8265">734-222-8265</a></h3>
      </div>
      <FooterComponent />
    </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.gator-pkg-icon {
  width: 500px;
  height: 500px;
}

.about-container {
  display: flex;
  max-width: 70vw;
  text-align: center;
}

.about-container h1 {
  position: relative;
  font-size: 85px;
  margin: 20px 0;
  text-align: center;
  transform: translateY(35%);
  text-transform: uppercase;
  font-weight: bold;
}

.about {
  width: 90%;
  max-width: 90vw;
  margin: -60px 20px 20px 20px;
  text-align: center;
}

.about h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.about hr {
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid #222222;
}

.about p {
  font-size: 24px;
  line-height: 1.6;
}

.scrolling-image-banner-component {
  margin-top: 30px;
}

.footer-home {
  width: 90%;
  max-width: 90vw;
  margin: 20px auto;
  text-align: center;
}

.footer-home img {
  width: 130px;
  height: auto;
  max-width: 500px;
}

.footer-home h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.footer-home h3 {
  font-size: 20px;
  margin: 5px 0;
}

.footer-home a {
  color: #b9dbff;
  text-decoration: underline;
}
</style>

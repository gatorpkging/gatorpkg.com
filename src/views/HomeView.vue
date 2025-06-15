<script setup>
import GatorPkgIcon from '@/components/icons/GatorPkgIcon.vue';
import ScrollingImageBannerComponent from '@/components/ScrollingImageBannerComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<template>
  <div id="app">
    <div class="home">
      <div class="about-header">
        <GatorPkgIcon class="gator-pkg-icon"/>
        <h1> Gator Packaging, INC.</h1>
      </div>
      <div class="about-content">
        <hr>
        <p>
          Gator Packaging is a privately owned industrial packaging company with over 30 years of experience located in Dexter, MI. near Ann Arbor. Gator Packaging currently does business with a diverse group
          of customers such as: Paladin Brands, Sweepster Broom, General Inspection, Roush Performance Products, and Zoller, Inc. We have a team of experts that have many years of experience in
          various areas of industrial packaging. We work together to provide our customers with the most accurate and cost effective solutions to meet their packaging needs.
        </p>
      </div>
      <ScrollingImageBannerComponent class="scrolling-image-banner-component"/>

      <div class="contact-info">
        <hr>
        <img src="/images/sawblade.webp" alt="sawblade" loading="eager" />
        <h2>Need a quote or more information?</h2>
        <h3>Contact: Julie Chapman (Office Manager / Customer Service)</h3>
        <h3>Email: <a href="mailto:info@gatorpkg.com">info@gatorpkg.com</a> </h3>
        <h3>Phone: <a href="tel:734-222-8265">734-222-8265</a></h3>
      </div>
      <FooterComponent />
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.about-header {
  display: table;
  max-width: 70vw;
  text-align: center;
}

.about-header .gator-pkg-icon {
  display: table-cell;
  width: 35rem;
  height: auto;
}

.about-header h1 {
  display: table-cell;
  position: relative;
  font-size: 4rem;
  margin: 1rem;
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;
  font-weight: bold;
}

.about-content {
  width: 90vw;
  max-width: 90vw;
  margin: -2.25rem 1rem 1rem 1rem;
  text-align: center;
}

.about-content hr {
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid #222222;
}

.about-content p {
  font-size: 1.5rem;
  line-height: 1.6;
}

.scrolling-image-banner-component {
  margin-top: 30px;
}

.contact-info {
  width: 90vw;
  max-width: 90vw;
  margin: 1rem;
  text-align: center;
}

.contact-info img {
  width: 130px;
  height: auto;
  max-width: 500px;
  margin-top: 1rem;
}

.contact-info h2 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}

.contact-info h3 {
  font-size: 1.25rem;
  margin: 0.3rem;
}

.contact-info a {
  color: #b9dbff;
  text-decoration: underline;
}

.contact-info hr {
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid #222222;
}
</style>

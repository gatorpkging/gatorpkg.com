<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<template>
  <div id="app">
    <div class="services">
      <div class="services-header">
        <h1>Services</h1>
        <p>When Just Doing A Good Job Isn't Enough...</p>
        <p>Let Gator Packaging Take Care of Your Fulfillment Needs.</p>
      </div>
      <div class="services-content">
        <hr>
        <h3>
          Gator Packaging manufactures custom crates and pallets, converts various foam (polystyrene, polyethylene, and polyurethane) to each customer specification, and designs and distributes all forms
          of corrugated items such as cartons, displays, and pallets. We also offer order processing and fullfilment, sorting, secondary work, repacking, shrink wrapping, and banding. Need to ship overseas?
          We are ISPM-15 certified to produce and prepare pallets and crates that are compliant for export shipments.
        </h3>
        <h2>Specialty Crates & Pallets </h2>
        <div class="img-group">
          <img src="/images/banner/1.webp" alt="services1" loading="eager" />
          <img src="/images/banner/2.webp" alt="services2" loading="eager" />
          <img src="/images/banner/7.webp" alt="services3" loading="eager" />
        </div>
        <h2>Pallet Box Assembly</h2>
        <div class="img-group">
          <img src="/images/banner/8.webp" alt="services4" loading="eager" />
          <img src="/images/banner/9.webp" alt="services5" loading="eager" />
        </div>
        <h2>Product Assembly & Industrial Gluing</h2>
        <div class="img-group">
          <img src="/images/banner/11.webp" alt="services6" loading="eager" />
        </div>
      </div>
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
.services {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.services-header {
  display: flex;
  flex-direction: column;
  max-width: 70vw;
  text-align: center;
}

.services-header h1 {
  position: relative;
  font-size: 4rem;
  margin: 20px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
}

.services-header p {
  font-size: 1.5rem;
}

.services-content {
  width: 90%;
  max-width: 90vw;
  margin: 1rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
}

.services-content hr {
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  border: 2px solid #222222;
  width: 90vw;
}

.services-content h3 {
  font-size: 1.5rem !important;
  line-height: 1.6 !important;
  margin-bottom: 20px !important;
  font-weight: normal !important;
  text-decoration: none !important;
  margin: 0 !important;
}

.services-content h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
  text-decoration: underline;
}

.img-group {
  display: flex;
  gap: 10px;
}

.img-group img {
  width: 100%;
  height: auto;
  max-width: 20vw;
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
  border: 2px solid #222222;
}

</style>

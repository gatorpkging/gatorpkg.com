<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<template>
  <div id="app">
    <div class="contact">
      <div class="contact-info">
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
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.contact-info {
  width: 90%;
  max-width: 90vw;
  margin: 20px auto;
  text-align: center;
}

.contact-info img {
  width: 130px;
  height: auto;
  max-width: 500px;
}

.contact-info h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.contact-info h3 {
  font-size: 20px;
  margin: 5px 0;
}

.contact-info a {
  color: #b9dbff;
  text-decoration: underline;
}
</style>

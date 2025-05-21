<script setup>
import JumbotronComponent from '@/components/JumbotronComponent.vue';
import SponsorComponent from '@/components/SponsorComponent.vue';
</script>

<template>
  <div id="app">
    <JumbotronComponent Title="Team 8297 the WIHI Robowolves"
      Description="We're the Washtenaw International High School club which designs, builds, and programs a robot to compete in the FIRST Robotics Competition."
      HasImage Image="/images/teampicture.jpg" HasButton Button="Our Mission" Link="/mission" />

    <div class="home">
      <h1>FRC 2024 - 2025 Competition</h1>
      <img src="/src/assets/images/reefscape-logo.png" alt="">

      <h1>Featured Sponsors</h1>
      <p>Want your business name, logo & link here?</p>
      <router-link class="sponsor-us" to="/sponsors"> Sponsor Us!</router-link>

      <div class="sponsors">
        <SponsorComponent Image="/images/sponsors/dtm.png" SponsorName="DTM Remodeling LLC" OwnerName="Ron Towler"
          HasOwnerName="true" HasPhoneNumber="true" PhoneNumber="(734)-323-9460" />
        <SponsorComponent Image="/images/sponsors/gator-pkg.png" SponsorName="Gator Packaging Inc." HasAddress
          HasPhoneNumber HasEmail HasWebsite Address="2800 Zeeb Rd, Dexter, MI" PhoneNumber="(734)-222-8265"
          Email="gatorpkg@att.net" Website="https://gatorpkg.wixsite.com/gatorpackaging" class="scale-70" />
      </div>
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

.home img {
  width: 65%;
  height: 65%;
  margin-top: 30px;
}

.home .sponsor-us {
  margin-top: 20px;
  padding: 5px 10px;
  font-size: 18px;
  background-color: #4180BF;
  color: #F0FDF6;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
}

.home .sponsor-us:hover {
  background-color: #5E93C8;
}

.sponsors {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
}
</style>

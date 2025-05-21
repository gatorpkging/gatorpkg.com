<script>

export default {
  name: "SponsorComponent",
  props: {
    Image: String,
    SponsorName: String,
    HasOwnerName: Boolean,
    HasAddress: Boolean,
    HasPhoneNumber: Boolean,
    HasEmail: Boolean,
    HasWebsite: Boolean,
    OwnerName: String,
    Address: String,
    PhoneNumber: String,
    Email: String,
    Website: String
  }
};

</script>

<template>
  <div class="sponsor">
    <a :href="Website"><img :src="Image" alt="Sponsor Logo" /></a>
    <h2>{{ SponsorName }}</h2>
    <hr>
    <p v-if="HasOwnerName">{{ OwnerName }}</p>
    <p v-if="HasAddress">{{ Address }}</p>
    <a v-if="HasPhoneNumber" :href="'tel:' + PhoneNumber">{{ PhoneNumber }}</a>
    <a v-if="HasEmail" :href="'mailto:' + Email">{{ Email }}</a>

  </div>
</template>

<style scoped>
.sponsor {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
  color: white;
  border: 2px solid #384046;
  border-radius: 10px;
  padding: 20px;
  background-color: #212528;
  height: 400px;
  width: 350px;
}

.sponsor h2 {
  font-size: 24px;
  font-weight: 400;
  text-align: center;
}

.sponsor img {
  width: 300px;
  height: 300px;
  margin-top: 20px;
  margin: -30px;
}

.sponsor hr,
br {
  border: #34363B 1px solid;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}

.sponsor p {
  margin-top: -5px;
  font-size: 18px;
  font-weight: 300;
  color: #ADB5BD;
}

.sponsor a {
  margin-top: -5px;
  font-size: 18px;
  font-weight: 300;
  padding-left: 15px;
  color: #418bd4;
  text-decoration: none;
}

.sponsor a:hover {
  text-decoration: underline;
}
</style>

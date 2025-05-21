<script setup>
import JumbotronComponent from '@/components/JumbotronComponent.vue';
import SponsorComponent from '@/components/SponsorComponent.vue';
</script>

<template>
  <div id="app">
    <JumbotronComponent Title="Sponsors"
      Description="The wonderful businesses & contributors that make it possible for us to do what we do." />

    <div class="tiers">
      <br>
      <h2>Diamond Tier ($10000+)</h2>
      <hr>
      <p>Empty</p>
      <br>
      <h2>Platinum Tier ($5000 - $9,999)</h2>
      <hr>
      <p>Empty</p>
      <br>
      <h2>Gold Tier ($1,000 - $3,999)</h2>
      <hr>
      <p>Empty</p>
      <br>
      <h2>Silver Tier ($500 - $999)</h2>
      <hr>
      <div class="tier">
        <SponsorComponent Image="/images/sponsors/dtm.png" SponsorName="DTM Remodeling LLC" OwnerName="Ron Towler"
          HasOwnerName="true" HasPhoneNumber="true" PhoneNumber="(734) 323-9460" />
        <SponsorComponent Image="/images/sponsors/gator-pkg.png" SponsorName="Gator Packaging Inc." HasAddress
          HasPhoneNumber HasEmail HasWebsite Address="2800 Zeeb Rd, Dexter, MI" PhoneNumber="(734)-222-8265"
          Email="gatorpkg@att.net" Website="https://gatorpkg.wixsite.com/gatorpackaging" class="scale-70" />
      </div>
      <br>
      <h2>Bronze Tier ($100 - $499)</h2>
      <hr>
      <p>Empty</p>
      <br>
      <h2>Individual Donors</h2>
      <hr>
      <p class="individual-donors">
        The Chapmans, The Dadeys, The Szarazs
      </p>
    </div>
  </div>
</template>

<style>
.tiers {
  width: 95%;
}

.tier {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.tiers h2 {
  font-size: 28px;
  font-weight: 400;
  padding-left: 15px;
}

.tiers hr,
br {
  border: #34363B 1px solid;
  width: 100%;
}

.tiers p {
  margin-top: 10px;
  font-size: 18px;
  font-weight: 300;
  padding-left: 15px;
}

.scale-100 img {
  scale: 1;
  object-fit: contain;
}

.scale-90 img {
  scale: 0.9;
  object-fit: contain;
}

.scale-80 img {
  scale: 0.8;
  object-fit: contain;
}

.scale-70 img {
  scale: 0.7;
  object-fit: contain;
}

.scale-60 img {
  scale: 0.6;
  object-fit: contain;
}

.scale-50 img {
  scale: 0.5;
  object-fit: contain;
}

.scale-40 img {
  scale: 0.4;
  object-fit: contain;
}

.scale-30 img {
  scale: 0.3;
  object-fit: contain;
}

.scale-20 img {
  scale: 0.2;
  object-fit: contain;
}

.scale-10 img {
  scale: 0.1;
  object-fit: contain;
}
</style>
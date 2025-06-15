<script>

const map = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJedTguHazPIgRXmetUgTxOPw&key=${import.meta.env.VITE_GMAPS_API_KEY}`;
export default {
  name: "MapComponent",
  data() {
    return {
      map: map
    };
  }
};
</script>

<template>
<div class="map">
  <iframe width="100%" height="100%" loading="eagar" :src="map" />
</div>
</template>

<style>
</style>

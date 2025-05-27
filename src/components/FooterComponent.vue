<script>
import GatorPkgIcon from '@/components/icons/GatorPkgIcon.vue'

export default {
  name: "FooterComponent",
  components: {
    RoboIcon: GatorPkgIcon
  }
}
</script>

<template>
  <div class="footer">
    <p>© 2025 Gator Packaging</p>

    <div class="logo">
      <RoboIcon />
    </div>
  </div>
</template>

<style scoped>
.footer {
  position: fixed;
  top: calc(100vh - 76px);
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 2rem;
  background-color: #212528;
  color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  border-top: #384046 2px solid;
}

.logo {
  display: flex;
  align-items: center;
  position: relative;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  ;
}

.logo svg {
  width: 75px;
  height: 75px;
}
</style>

<script>
import GatorPkgIcon from '@/components/icons/GatorPkgIcon.vue'

export default {
  name: "HeaderComponent",
  components: {
    GatorPkgIcon
  }
}
</script>

<template>
  <div class="header">
    <div class="logo">
      <GatorPkgIcon />
    </div>
    <nav class="nav-links">
      <router-link active-class="active" to="/">Home</router-link>
      <router-link active-class="active" to="/services">Services</router-link>
      <router-link active-class="active" to="/contact">Contact</router-link>
    </nav>
  </div>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  height: 6vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 2rem;
  background-color: #222222;
  color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
  z-index: 1000;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
}

.logo svg {
  width: 75px;
  height: 75px;
}

.nav-links {
  display: flex;
  align-items: center;
  margin-right: 40px;
}

.nav-links a {
  margin: 0 1rem;
  color: #D6E1EF;
  text-decoration: none;
  font-size: 1.25rem;
  background: transparent;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #ffffff;
  text-decoration: underline;
}

.nav-links a.active {
  color: #ffffff;
  text-decoration: underline;
}
</style>

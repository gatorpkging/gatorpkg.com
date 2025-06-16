<script>
import GatorPkgIcon from '@/components/icons/GatorPkgIcon.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)

export default {
  name: "HeaderComponent",
  components: {
    GatorPkgIcon,
    FontAwesomeIcon
  },
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
}
</script>

<template>
  <div class="header">
    <div class="logo">
      <GatorPkgIcon />
    </div>

    <!-- Mobile menu button -->
    <button class="menu-button" @click="toggleMenu" aria-label="Toggle menu">
      <font-awesome-icon icon="fa-solid fa-bars" class="bars"/>
    </button>

    <!-- Navigation links -->
    <nav class="nav-links" :class="{ 'active': isMenuOpen }">
      <router-link active-class="active" to="/" @click="closeMenu">Home</router-link>
      <router-link active-class="active" to="/services" @click="closeMenu">Services</router-link>
      <router-link active-class="active" to="/contact" @click="closeMenu">Contact</router-link>
    </nav>
  </div>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  height: 75px;
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
  color: #ffffff;
}

.logo svg {
  width: 75px;
  height: 75px;
}

.nav-links {
  display: flex;
  align-items: center;
  margin-right: 2rem;
}

.nav-links a {
  margin: 0 1rem;
  color: #ffffff;
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

.menu-button {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1001;
}

.menu-button .bars {
  font-size: 2rem;
  color: #ffffff;
  transition: transform 0.3s, opacity 0.3s;
}

@media (max-width: 768px) {
  .menu-button {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 75px;
    left: 0;
    width: 100%;
    background-color: #222222;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    margin-right: 0;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
    transform: translateY(-100%);
    opacity: 0;
    transition: all 0.3s ease;
    pointer-events: none;
  }

  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  .nav-links a {
    margin: 0.5rem 0;
    padding: 0.5rem 0;
    width: 100%;
    text-align: center;
  }
}
</style>

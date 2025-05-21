<script>
import RoboIcon from '@/components/icons/RoboIcon.vue';

export default {
  name: "HeaderComponent",
  components: {
    RoboIcon,
  },
  props: {
    activePage: {
      type: String,
      default: 'home',
    },
  },
  data() {
    return {
      isAboutOpen: false,
      isSponsorshipOpen: false,
    };
  },
  methods: {
    toggleAbout() {
      this.isAboutOpen = !this.isAboutOpen;
      if (this.isAboutOpen) {
        this.isSponsorshipOpen = false;
      }
    },
    toggleSponsorship() {
      this.isSponsorshipOpen = !this.isSponsorshipOpen;
      if (this.isSponsorshipOpen) {
        this.isAboutOpen = false;
      }
    },
    closeDropdowns(event) {
      if (!event.target.closest('.dropdown')) {
        this.isAboutOpen = false;
        this.isSponsorshipOpen = false;
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.closeDropdowns);
  },
  before() {
    document.removeEventListener('click', this.closeDropdowns);
  },
};
</script>

<template>
  <div class="header">
    <div class="logo">
      <RoboIcon />
    </div>
    <nav class="nav-links">
      <router-link to="/">Home</router-link>
      <div class="dropdown" @click="toggleAbout">
        <router-link to="">About</router-link>
        <div v-show="isAboutOpen" class="dropdown-content" @mouseleave="isAboutOpen = false">
          <router-link to="/team">Team</router-link>
          <router-link to="/robot">Robot</router-link>
          <router-link to="/gallery">Gallery</router-link>
          <router-link to="/values">Values</router-link>
          <router-link to="/competition">Competition</router-link>
          <router-link to="/mission">Mission</router-link>
        </div>
      </div>
      <div class="dropdown" @click="toggleSponsorship">
        <router-link to="">Sponsorship</router-link>
        <div v-show="isSponsorshipOpen" class="dropdown-content" @mouseleave="isSponsorshipOpen = false">
          <router-link to="/sponsors">Sponsors</router-link>
          <router-link to="/sponsorship">Sponsor Us</router-link>
        </div>
      </div>
    </nav>

  </div>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 2rem;
  background-color: #4180BF;
  color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
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
  text-decoration: underline;
  color: #fff;
}

.nav-links a.active {
  color: #fff;
  font-weight: bold;
  text-decoration: underline;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: block;
  position: absolute;
  background-color: #212528;
  min-width: 200px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin-top: 15px;
  border: 1px #4D5358 solid;
  border-radius: 15px;
}

.dropdown-content a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  background-color: #212528;
}

.dropdown-content a:hover {
  background-color: transparent;
}
</style>

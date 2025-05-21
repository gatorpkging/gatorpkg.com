import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';
import TeamView from '../views/TeamView.vue';
import RobotView from '../views/RobotView.vue';
import GalleryView from '../views/GalleryView.vue';
import ValuesView from '../views/ValuesView.vue';
import CompetitionView from '../views/CompetitionView.vue';
import MissionView from '../views/MissionView.vue';
import SponsorsView from '../views/SponsorsView.vue';
import SponsorshipView from '../views/SponsorshipView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/team', component: TeamView },
  { path: '/robot', component: RobotView },
  { path: '/gallery', component: GalleryView },
  { path: '/values', component: ValuesView },
  { path: '/competition', component: CompetitionView },
  { path: '/mission', component: MissionView },
  { path: '/sponsors', component: SponsorsView },
  { path: '/sponsorship', component: SponsorshipView }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;  
import Vue from 'vue';
import VueRouter from 'vue-router';
import Profile from './pages/ProfilePokemon.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/ProfilePokemon',
    component: Profile,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;



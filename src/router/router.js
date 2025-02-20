import { createRouter, createWebHashHistory } from 'vue-router';
import HomeScreen from '@/ui/HomeScreen/HomeScreen.vue';
import LessonScreen from '@/ui/LessonScreen/LessonScreen.vue';

const routes = [
  { path: '/', name: 'home', component: HomeScreen },
  { path: '/lesson/:id', name: 'lesson', component: LessonScreen },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

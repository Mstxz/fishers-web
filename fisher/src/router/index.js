import { createRouter, createWebHistory } from 'vue-router';

import game from '@/page/game.vue';

const routes = [
    {
        path: '/',
        component: game,
        meta: { title: 'Home' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
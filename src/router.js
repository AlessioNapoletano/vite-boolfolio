import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ProjectsList from './pages/ProjectsList.vue';
import AboutMe from './pages/AboutMe.vue';
import SingleProject from './pages/SingleProject.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsList
        },
        {
            path: '/about-me',
            name: 'about-me',
            component: AboutMe
        },
        {
            path: '/projects/:slug',
            name: 'project',
            component: SingleProject
        },
    ]
});

export { router };
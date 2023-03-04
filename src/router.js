import { createRouter, createWebHistory } from 'vue-router';

//Pages da importare
import HomePage from './pages/HomePage.vue';
import AboutMe from './pages/AboutMe.vue';
import ProjectsList from './pages/ProjectsList.vue';
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
            path: '/about-me',
            name: 'about-me',
            component: AboutMe
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsList
        },
        {
            path: '/project/:slug',
            name: 'project',
            component: SingleProject
        },
    ]
});

export { router };
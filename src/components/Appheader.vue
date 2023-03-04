
<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            pages: [
                { id: 1, title: 'Home', path: '/' },
                { id: 2, title: 'About Me', path: '/about-me' },
                { id: 3, title: 'Projects', path: '/projects' }
            ]
        }
    },
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <router-link class="navbar-brand" :to="{ name: 'home' }">BoolFolio</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li v-for="page in pages" :key="page.id" class="nav-item me-2" aria-current="page">
                        <router-link :to="page.path" :class="(this.$route.name === page.path) ? 'active' : '' ">{{ page.title }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<style scoped lang="scss">
    li a{
        text-decoration: none;
        color: white;

        &:hover{
            color: red;
        }
        &:active {
            color: red;
        }
    }

    .router-link-active {
        color: red;
        font-weight: bold;
    }
</style>
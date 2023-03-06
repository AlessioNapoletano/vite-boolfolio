<script>
import AppProject from '../components/AppProject.vue';
import axios from 'axios';

export default {
    name: 'SingleProject',
    components: {
        AppProject

    },

    data() {
        return {
            project: null,
            loading: false,
            urlAddress: 'http://127.0.0.1:8000',
        }
    },

    methods: {
        getProject() {
            axios.get(this.urlAddress + `/api/projects/${this.$route.params.slug}`, {
                params: {}
            })
                .then((response) => {
                    console.log('Qui siamo nel single page')
                    this.project = response.data.results;
                    console.warn(response);
                })
                .catch(function (error) {
                    console.warn(error);
                });
        }
    },

    created() {
    this.getProject();
    },
};

</script>

<template>
    <div class="row">
        <AppProject :project="project" :isShow="true" :imagePath="urlAddress" />
    </div>
</template>


<style scoped lang="scss">
    
</style>
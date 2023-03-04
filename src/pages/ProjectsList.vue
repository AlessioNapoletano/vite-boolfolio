<script>
import axios from 'axios';
import AppProject from '../components/AppProject.vue';

export default {
    name: 'ProjectsList',

    components: {
        AppProject,
    },

    data() {
        return {
            projects: [],
            loading: false,
            urlAddress: 'http://127.0.0.1:8000/'
        }
    },

    methods: {
        getProjects() {
            axios.get(this.urlAddress + 'api/projects', {
                params: {
                }
            })
                .then( (response) => {
                    console.log(response.data.results);
                    this.projects = response.data.results;
                    console.log(this.projects);
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        }

    },

    created() {
        this.getProjects();
    },
}
</script>

<template>
    <div class="container my-4">
        <div class="row justify-content-around">
            <AppProject v-for="project in projects" :project="project" :imagePath="urlAddress" class="col-4 mb-3"/>
        </div>
    </div>
    

</template>


<style scoped lang="scss">
    
</style>
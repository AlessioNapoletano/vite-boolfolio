<script>
import axios from 'axios';

export default {
    name: 'AppMain',
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
    <section class="projects">
        <div class="container">
            <div class="row">

                <article class="col-4" v-for="project in projects">
                    <div class="card">
                        <img :src="project.cover_image" class="card-img-top" :alt="project.title">
                        <div class="card-body">
                            <h5 class="card-title">{{ project.title }}</h5>
                            <p class="card-text">{{ project.content }}</p>
                            <a href="#" class="btn btn-primary text-center">Show</a>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss"></style>
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
    <section class="projects">
        <div class="container">
            <div class="row">

                <article class="col-4" v-for="project in projects">
                    <div class="card mb-4">
                        <img :src="project.cover_image" class="card-img-top" :alt="project.title">
                        <div class="card-body">
                            <h5 class="card-title fw-bold text-center">{{ project.title }}</h5>
                            <span class="card-text p-1 bg-success rounded-2 text-light mb-2">{{ project.type.type }}</span>
                            <div class="technologies my-2">
                                <span class="fw-bold">
                                    Tecnologie utilizzate:
                                </span>
                                
                                <p>
                                    <ul>
                                        <li v-for="technology in project.technologies">
                                            {{ technology.name }}
                                        </li>
                                    </ul>
                                </p>

                            </div>
                            
                            <p class="card-text">{{ project.content.substr(0,200) }}...</p> 
                            <div class="button text-center">
                                <a href="#" class="btn btn-primary">Show more</a>
                            </div>
                            
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss"></style>
<script>
export default {
    name: 'AppProject',
    data() {
        return {
        }
    },
    props:
    {
        'project': {
            type: Object,
            required: true,
        },
        'isShow': {
            type: Boolean,
            required: false,
            default: false,
        },
        'imagePath': {
            type: String,
            required: true
        }
    },
}
</script>

<template>
    <article class="card single-post p-3">
        <img v-if="!project.cover_image.startsWith('imgs//')" :src="project.cover_image" class="card-img-top"
            :alt="project.title">

        <img v-else :src="imagePath + '/storage/' + project.cover_image" alt="">

        <div class="card-body">
            <h5 class="card-title">
                {{ project.title }}
            </h5>
            <p>
                <ul>
                    <li v-for="technology in project.technologies">
                        {{ technology.name }}
                    </li>
                </ul>
            </p>

            <p class="card-text">
                {{ (isShow) ? project.content : project.content.substr(0, 140) }}...
            </p>

            <router-link v-if="!isShow" :to="{ name: 'project', params: { slug: project.slug } }" class="btn btn-primary">
                Read more...
            </router-link>
        </div>

    </article>
</template>

<style scoped lang="scss"></style>
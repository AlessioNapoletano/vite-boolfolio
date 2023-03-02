<script>
import AppMain from './components/AppMain.vue';

export default {
  name: 'App',

  components: {
    AppMain,
  },

  data() {
    return {
      
    }
  },

}

</script>

<template>
  <header>
    <h1 class="text-center">
      Projects API
    </h1>
  </header>
  <main>
    <AppMain />
  </main>
  
</template>

<style lang="scss">
  @use './styles/general.scss' as *;
  @use 'bootstrap/scss/bootstrap' as *;
</style>

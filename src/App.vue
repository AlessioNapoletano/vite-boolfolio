<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',

  components: {
    AppHeader,
  },

  data() {
    return {
      
    }
  },

}

</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main>
    
  </main>
  
</template>

<style lang="scss">
  @use './styles/general.scss' as *;
  @use 'bootstrap/scss/bootstrap' as *;
</style>

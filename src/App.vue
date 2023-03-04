<script>
import AppHeader from './components/AppHeader.vue';
import AppMainVue from './components/AppMain.vue';

export default {
  name: 'App',

  components: {
    AppHeader,
    AppMainVue
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
  <router-view></router-view>
  
</template>

<style lang="scss">
  @use './styles/general.scss' as *;
  @use 'bootstrap/scss/bootstrap' as *;
</style>

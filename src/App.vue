<template>
  <HeaderComponent></HeaderComponent>
  <!-- <home-component></home-component> -->

  <router-view></router-view>
</template>

<script>

import HeaderComponent from './components/sections/HeaderComponent.vue';
// import HomeComponent from './pages/HomeComponent.vue';

export default {
  name: 'App',
  components:{
    HeaderComponent,
    // HomeComponent
  }
 
}
</script>

<style>

</style>
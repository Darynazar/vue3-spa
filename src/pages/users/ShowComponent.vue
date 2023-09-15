<template>
    <div class="container mt-5">
      <div class="row g-3">
        <div v-if="loading" class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div v-else class="col-md-4">
          <CardViewComponent :user="user"></CardViewComponent>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { ref } from "vue";
  import CardViewComponent from "../../components/users/CardViewComponent.vue";
  import { useRoute } from "vue-router";

  export default {
    components: {
      CardViewComponent,
    },
  
    setup() {
      const user = ref({});
      const loading = ref(true);
      const route = useRoute();
      function getUser() {
        axios
          .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
          .then(function (response) {
            // handle success
            user.value = response.data;
            loading.value = false;
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
      }
  
      getUser();
  
      return { user, loading };
    },
  };
  </script>
  
  <style>
  </style>
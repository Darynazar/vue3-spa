<template>
  <CardViewComponent></CardViewComponent>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import CardViewComponent from '../../components/users/CardViewComponent.vue';
export default {
    components:{
        CardViewComponent
    },
   
  setup() {
    const users = ref([]);
    function getUsers()
    {
        axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        // handle success
        users.value = response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }

    getUsers()

    return {users}
  },
};
</script>

<style>
</style>
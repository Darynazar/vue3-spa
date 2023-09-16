<template>
    <div class="container mt-5">
    <router-link class="btn btn-dark col-sm-2 mb-2" :to="{ name: 'createBoard' }">Create Board</router-link>

      <div class="row g-3">

        <div v-if="loading" class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        
        <div v-else class="col-md-4" v-for="board in boards" :key="board.id">
          <div class="card">
            <div class="card-header">
              <router-link :to="{ name: 'boardId', params: { id: board.id } }">{{
                board.name
              }}</router-link>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">userId : {{ board.user_id }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </template>
  
  <script>
  import axios from "axios";
  import { ref } from "vue";
  
  export default {
    setup() {
      const boards = ref([]);
      const loading = ref(true);
  
      function getBoards() {
        axios
          .get("http://127.0.0.1:8000/api/dashboard")
          .then(function (response) {
            // handle success
            boards.value = response.data;
            loading.value = false;
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
      }
  
      getBoards();
  
      return { boards, loading };
    },
  };
  </script>
  
  <style>
  </style>
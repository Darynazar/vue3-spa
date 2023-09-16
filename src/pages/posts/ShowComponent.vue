<template>
  <div class="container mt-5">
    <div class="row g-3">
      <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="col-md-6">
        <div class="card">
          <div class="card-header">
            <!-- <router-link :to="{name:'userId', params:{id:user.id}}">{{ user.name }}</router-link> -->
            {{ post.title }}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">username : {{ post.body }}</li>
          </ul>
          <div class="card-footer">
            <div @click="deletePost" class="btn btn-sm me-4 btn-danger">Delete</div>
            <router-link class="btn btn-sm me-4 btn-dark" :to="{name:'editPost', params:{id:post.id}}">Edit</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
import Swal from "sweetalert2";
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const post = ref({});
    const loading = ref(true);
    const route = useRoute();
    function getUser() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          // handle success
          post.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

    getUser();

    function deletePost(){
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function () {
          // handle success
          Swal.fire({
            title:"Thanks",
            text:"post deleted",
            icon:"warning",
            confirmButtonText:"ok"
          })
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

    return { post, loading, deletePost };
  },

  
};
</script>
  
  <style>
</style>
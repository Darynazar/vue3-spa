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
            {{ board.title }}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">username : {{ board.list }}</li>
          </ul>
          <div class="card-footer">
            <div @click="deleteBoard" class="btn btn-sm me-4 btn-danger">Delete</div>
            <!-- <router-link class="btn btn-sm me-4 btn-dark" :to="{ name: 'editBoard', params: { id: board.id } }">Edit</router-link> -->
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row g-3">
        <div v-if="loading" class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div v-else class="col-md-4" v-for="list in board.lists" :key="list.id">
          <div class="card">
            <div class="card-header">
              <!-- <router-link :to="{ name: 'boardId', params: { id: board.id } }"> -->
                {{list.name}}
                <!-- </router-link> -->
              <div @click="deleteBoard" class="btn btn-sm me-4 btn-danger">Delete</div>

            </div>
            <ul class="list-group list-group-flush">
              <template v-for="card in list.cards" :key="card.id">
                 <li class="list-group-item">
                <ShowCardComponent :card="card"></ShowCardComponent>
              </li>
              </template>
              <!-- <li class="list-group-item">boardId : {{ board.id }}</li> -->
             
            </ul>
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
import ShowCardComponent from './ShowCardComponent.vue';

export default {
  components:{
    ShowCardComponent
  },
  setup() {
    const board = ref({});
    const loading = ref(true);
    const route = useRoute();
    function getBoards() {
      axios
        .get(`http://127.0.0.1:8000/api/boards/${route.params.id}`)
        .then(function (response) {
          // handle success
          board.value = response.data;
          console.log(board.value.lists);
          loading.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

    getBoards();
    // console.log(board);
    // const name = board.value.lists;


    function deleteBoard() {
      axios
        .delete(`http://127.0.0.1:8000/api/boards/${route.params.id}`)
        .then(function () {
          // handle success
          Swal.fire({
            title: "Thanks",
            text: "board deleted",
            icon: "warning",
            confirmButtonText: "ok"
          })
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

    return { board, loading, deleteBoard };
  },


};
</script>
    
<style></style>
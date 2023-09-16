<template>
  <div class="" m-3>
    <div class="container mt-5">
      <div class="row g-3">
        <h2>Create Board</h2>
        <div class="col-md-4">
          <form @submit.prevent="validate">
            <div class="mb-3">
              <label class="form-label">user_id</label>
              <input
                type="text"
                class="form-control"
                v-model.lazy.trim="form.user_id"
              />
              <div class="form-text text-danger">
                {{ form.user_idErrorText }}
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">name</label>
              <textarea
                class="form-control"
                v-model.lazy.trim="form.name"
              ></textarea>
              <div class="form-text text-danger">
                {{ form.nameErrorText }}
              </div>
            </div>
            <button type="submit" class="btn btn-dark" :disabled="loading">
              <div
                v-if="loading"
                class="spinner-border spinner-border-sm"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
import { reactive, ref } from "vue";
import Swal from "sweetalert2";

export default {
  setup() {
    const loading = ref(false);
    const form = reactive({
      user_id: "",
      user_idErrorText: "",
      name: "",
      nameErrorText: "",
    });

    console.log(form.user_id, form.name);
    const headers = {
      "Content-type":"application/json",
    };

    function validate() {
      if (form.user_id === "") {
        form.user_idErrorText = "user_id is required";
      } else {
        form.user_idErrorText = "";
      }
      if (form.name === "") {
        form.nameErrorText = "name is required";
      } else {
        form.nameErrorText = "";
      }

      if (form.user_id !== "" && form.name !== "") {
        loading.value = true;
        createPost();
      }
    }

    function createPost() {
      axios
        .post("http://127.0.0.1:8000/api/board", {
          user_id: form.user_id,
          name: form.name,

        }, {headers})

        .then(function () {
          loading.value = false;
          // handle success
          Swal.fire({
            title: "Thanks",
            text: "post created",
            icon: "success",
            confirmButtonText: "ok",
          });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

    return { form, validate, loading };
  },
};
</script>
  
  <style>
</style>
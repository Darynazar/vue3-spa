<template>
  <div class="" m-3>
    <div class="container mt-5">
      <div class="row g-3">
        <h2>Edit Post</h2>
        <div class="col-md-4">
          <form @submit.prevent="validate">
            <div class="mb-3">
              <label class="form-label">Title</label>
              <input
                type="text"
                class="form-control"
                v-model.lazy.trim="form.title"
              />
              <div class="form-text text-danger">
                {{ form.titleErrorText }}
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Body</label>
              <textarea
                class="form-control"
                rows="6"
                v-model.lazy.trim="form.body"
              ></textarea>
              <div class="form-text text-danger">
                {{ form.bodyErrorText }}
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
              Edit
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
import { useRoute } from "vue-router";

export default {
  setup() {
    const form = reactive({
      title: "",
      titleErrorText: "",
      body: "",
      bodyErrorText: "",
    });

    const loading = ref(false);

    const route = useRoute();

    function getUser() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          // handle success
          form.title = response.data.title;
          form.body = response.data.body;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

    getUser();

    function validate() {
      if (form.title === "") {
        form.titleErrorText = "Title is required";
      } else {
        form.titleErrorText = "";
      }
      if (form.body === "") {
        form.bodyErrorText = "body is required";
      } else {
        form.bodyErrorText = "";
      }

      if (form.title !== "" && form.body !== "") {
        loading.value = true;
        updatePost();
      }
    }

    function updatePost() {
      axios
        .put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
          id: route.params.id,
          title: form.title,
          body: form.body,
          userId: 1,
        })
        .then(function () {
          loading.value = false;
          // handle success
          Swal.fire({
            title: "Thanks",
            text: "post update",
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
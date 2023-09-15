<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quis
          ipsa recusandae. Dolore hic sint voluptate amet eos repudiandae sed
          repellat placeat, cupiditate quae quam ex, natus minima debitis quos.
        </p>

        <router-link class="btn btn-dark" :to="{name:'users'}">Users</router-link>
        <router-link class="btn btn-light ms-2" :to="{name:'posts'}">Posts</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

.router-link-active{
    color:rgba(0, 0, 0, 0.9) !important;
    border-bottom: 2px solid rgba(0, 0, 0, 0.9) !important;
}
</style>
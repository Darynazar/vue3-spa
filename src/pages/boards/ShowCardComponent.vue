<template>
  <p>{{card.title}}</p>
</template>

<script>
export default {
    props:['card'],
    setup(props){
        console.log(props);
        return{}
    }

}
</script>

<style>

</style>
<script setup>

const props=defineProps({
    id:String,
    img:String,
    name:String,
})
</script>

<template>
    <div class="card">
        <img :src="props.img"/>
        <h2>{{ props.name }}</h2>
        <RouterLink :to="`/detail/${props.id}`">Rcepte</RouterLink>
    </div>
</template>

<style scoped>
 .card{
    display: flex;
    flex-direction: column;
    margin: 10px;
    border: solid 1px;
    border-color: black;
    width: 300px;
    height: 300px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
 }

img{
    width: 200px;
    border-radius: 10px;

}
</style>
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
        <RouterLink :to="`/detail/${props.id}`" class="enlaces">Recepte</RouterLink>
    </div>
</template>

<style scoped>
 .card{
    display: flex;
    flex-direction: column;
    margin: 10px;
    border: solid 1px;
    border-color: white;
    width: 300px;
    padding: 10px;
    height: 300px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background-color: #BBCB64;
 }

img{
    width: 200px;
    border-radius: 10px;

}

.enlaces{
    text-decoration: none;
    border: solid 1px;
    border-color: #FFE52A;
    background-color: #FFE52A;
    padding: 5px;
    border-radius: 10px;
    color: black;
}

.enlaces:hover{
    box-shadow: 0px 5px 16px  white;
}
</style>
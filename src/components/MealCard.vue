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
    height: auto;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background-color: #006D77;
 }

img{
    margin-top: 10px;
    width: 200px;
    border-radius: 10px;
    border:solid 3px;
    border-color:#83C5BE;
     box-shadow: 0px 5px 16px  #83C5BE;

}

.enlaces{
    text-decoration: none;
    border: solid 1px;
    border-color: #FFDDD2;
    background-color: #FFDDD2;
    padding: 5px;
    border-radius: 10px;
    color: black;
    font-size: large;
}

.enlaces:hover{
    box-shadow: 0px 5px 16px  #FFDDD2;
}

.card>h2{
     background-color: #006D77;
     color: white;
}
</style>
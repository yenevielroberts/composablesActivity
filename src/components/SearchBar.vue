<script setup>
import { ref } from 'vue';
const categoria=ref('');

const emit=defineEmits(['buscarXCategoria'])

const buscarXCategoria=()=>{
    emit('buscarXCategoria',categoria)
}
</script>

<template>

<div id="search-bar">
   <input type="text" v-model="categoria"/>
    <button @click="buscarXCategoria">Buscar</button> 
</div>


</template>

<style scoped>
    input{
        border-radius: 5px;
        padding: 5px;
        width: 300px;
        border: solid 2px;
    }

    input:focus{
        outline-color: blue;
    }

    button{
        background-color: #FFE52A;
        border-radius: 10px;
        padding: 5px;
        width: 100px;
        font-weight: bold;
        border: 0px;
        margin: 10px;
        

    }

    button:hover{
         box-shadow: 0px 5px 16px  #FFE52A;
    }

    #search-bar{
        margin: 10px;
    }
</style>
<script setup>
import { ref } from 'vue';
const categoria=ref('');

const emit=defineEmits(['buscarXCategoria'])

const buscarXCategoria=()=>{
    emit('buscarXCategoria',categoria)
}
</script>

<template>

<input type="text" v-model="categoria"/>
<button @click="buscarXCategoria">Buscar</button>

</template>

<style scoped></style>
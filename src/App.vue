<script setup>
import { ref } from 'vue';
import { useFetch } from './composables/useFetch';

const cerca=ref('chicken')
const url=ref(`https://www.themealdb.com/api/json/v1/1/search.php?s=${cerca.value}`)

const {data, error,loading, fetchData}=useFetch(url);

console.log(data.value)
</script>

<template>
  <div v-if="loading">
      <p>loading</p>
  </div>

  <div v-else-if="error">
    <p>Error: {{ error }}</p>
  </div>

  <div v-else>
    <p>Cargado</p>
    <div  v-if="data && data.meals">
      <div v-for="meal in data.meals">
        <p>{{ meal.strMeal }}</p>
      </div>
    </div>
 

  </div>
</template>

<style scoped></style>

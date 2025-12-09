<script setup>
import { ref } from 'vue';
import { useFetch } from '../composables/useFetch';
import MealCard from '@/components/MealCard.vue';

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
    <!--Aquí ya se cargó los datos de la api-->
    <div  v-if="data && data.meals" class="containerMeals">
      <div v-for="meal in data.meals" >
        <MealCard :id="meal.idMeal" :img="meal.strMealThumb" :name="meal.strMeal"/>
      
      </div>
    </div>
 

  </div>
</template>

<style scoped>
    .containerMeals {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>
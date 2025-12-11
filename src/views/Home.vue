<script setup>
import { ref, watch } from 'vue';
import { useFetch } from '../composables/useFetch';
import MealCard from '@/components/MealCard.vue';
import SearchBar from '@/components/SearchBar.vue';

const cerca=ref('chicken')

const cargarDatos=(categoria)=>{

  const url=ref(`https://www.themealdb.com/api/json/v1/1/search.php?s=${categoria.value}`)
  return url
}

const {data, error,loading, fetchData}=useFetch(cargarDatos(cerca));

const mealXCategoria=(categoria)=>{

  cerca.value=categoria
}

watch(
    ()=>cerca,
    (cerca)=>{
        useFetch(cargarDatos(cerca))
    }
)


</script>

<template>
  <div v-if="loading">
      <p>loading</p>
  </div>

  <div v-else-if="error">
    <p>Error: {{ error }}</p>
  </div>

  <div v-else>
    <SearchBar @buscarXCategoria="mealXCategoria"/>
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
<script setup>

import { useFetch } from '@/composables/useFetch';
import { watch,ref } from 'vue';
import { useRoute } from 'vue-router';

const route=useRoute()
const mealid=route.params.id

const cargarMeal=(paramid)=>{

    const url=ref(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${paramid}`)
    return url
}

const {data, error,loading, fetchData}=useFetch(cargarMeal(mealid));

watch(
    ()=>route.params.id,
    (newId)=>{
        cargarMeal(newId)
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
     
    <!--Aquí ya se cargó los datos de la api-->
    <div  v-if="data && data.meals" class="containerMeals">
      
      <div v-for="meal in data.meals" >
        <h1>{{meal.strMeal }}</h1>
        <img :src="meal.strMealThumb"/> 
        <p><strong>Instrucciones: </strong></p>
        <p>{{ meal.strInstructions }}</p>
      </div>
    </div>
 

  </div>
</template>

<style scoped></style>
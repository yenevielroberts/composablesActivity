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
        <p><strong>Ingredientes:</strong></p>
        <ul>
          <li></li>
        </ul>
        <p><strong>Instrucciones: </strong></p>
        <p>{{ meal.strInstructions }}</p>
      </div>
    </div>
 

  </div>
</template>

<style scoped>
  /* Estado de carga y error */
p {
  font-family: Arial, Helvetica, sans-serif;
}

div[v-if="loading"],
div[v-else-if="error"] {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  font-size: 1.3rem;
  color: #666;
}

/* Contenedor principal de la página */
.containerMeals {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

/* Detalle de la comida */
.containerMeals > div {
  display: flex;
  flex-direction: column;
  gap:20px;
}

.containerMeals h1 {
  font-size: 30px;
  text-align: center;
  color: #222;
}

.containerMeals img {
  width: 100%;
  max-height: 420px;
  object-fit: cover;
  border-radius: 14px;
}

/* Sección de instrucciones */
.containerMeals p {
  font-size: 15px;
  line-height: 1.7;
  color: #444;
}

/* Texto Instrucciones */
.containerMeals p strong {
  display: block;
  font-size: 20px;
  margin-bottom: 10px;
  color: #000;
}


  .containerMeals h1 {
    font-size: 1.6rem;
  }


</style>
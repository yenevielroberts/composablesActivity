<script setup>
import { useFetch } from './composables/useFetch';

const cerca=ref('chicken')
const url=ref(`https://www.themealdb.com/api/json/v1/1/search.php?s=${cerca}`)

</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style scoped></style>

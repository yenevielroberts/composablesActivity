<script setup>

</script>
<template>

    <header>
        <h1>Receptari Vue + The MealDB</h1>
        <nav>
            <RouterLink to="/"> Home</RouterLink>
        </nav>
    </header>
</template>

<style scoped>

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #006D77;
  border-bottom: 1px solid #e5e5e5;
  font-family: Arial, Helvetica, sans-serif;
}

/* Título */
header h1 {
  font-size: 1.4rem;
  font-weight: 600;
  color: white;
  margin: 0;
  background-color: #006D77;
}

/* Navegación */
nav {
  display: flex;
  gap: 1rem;
   background-color: #006D77;
}

/* Enlaces */
nav a {
  text-decoration: none;
    color: #000;
  font-weight: 600;
  background-color: #eaeaea;
  padding: 10px;
  border-radius: 10px;
  transition: background-color 0.2s ease, color 0.2s ease;
}

/* Hover */
nav a:hover {
  box-shadow: 0px 5px 16px  #e5e5e5;
  color: #000;
}


</style>
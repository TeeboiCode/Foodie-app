<template>
  <div
    class="pt-4 d-flex gap-3 container-fluid justify-content-center align-items-center bg-light border-1 border-bottom"
  >
    <router-link class="btn btn-warning" to="/" role="button">Home</router-link>

    <router-link class="btn btn-primary" to="/soburat" role="button"
      >Soburat Task</router-link
    >
    <router-link class="btn btn-secondary" to="/precious" role="button"
      >Precious Task</router-link
    >
    <router-link class="btn btn-danger" to="/oyinkansola" role="button"
      >Oyinkansola Tasks</router-link
    >
    <router-link class="btn btn-dark" to="/ayomikun" role="button"
      >Ayomikun Task</router-link
    >
  </div>
</template>

<script setup></script>

<style scoped>
.links {
  border: 1px solid black;
}
</style>

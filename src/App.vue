<template>
  <div>
    <headerVue></headerVue>
    <router-view></router-view>
    <FooterVue></FooterVue>
    <TasksLinksVue></TasksLinksVue>
  </div>
</template>

<script setup>
import headerVue from "./components/header/header.vue";
import FooterVue from "./components/footer/Footer.vue";
import TasksLinksVue from "./components/TasksLinks.vue";
</script>

<style scoped></style>

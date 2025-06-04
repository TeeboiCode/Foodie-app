<template>
  <div>
    <headerVue></headerVue>
    <router-view></router-view>
    <FooterVue></FooterVue>
  </div>
</template>

<script setup>
import headerVue from "./components/header/header.vue";
import FooterVue from "./components/footer/Footer.vue";
</script>

<style scoped></style>

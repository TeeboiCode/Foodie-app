<template>
  <div class="home container-fluid p-0">
    <headerVue></headerVue>

    <main>
      <HeroSectionVue></HeroSectionVue>
      <PromoVue></PromoVue>
    </main>
  </div>
</template>

<script setup>
import headerVue from "../components/header/header.vue";
import HeroSectionVue from "../components/hero/HeroSection.vue";
import PromoVue from "../components/Promo/Promo.vue";
</script>

<style scoped></style>

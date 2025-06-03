<template>
  <div class="home container-fluid p-0">
    <headerVue></headerVue>

    <main>
      <HeroSectionVue></HeroSectionVue>
      <PromoVue></PromoVue>
      <AboutSectionVue></AboutSectionVue>
      <FoodMenuSectionVue></FoodMenuSectionVue>
    </main>
  </div>
</template>

<script setup>
import AboutSectionVue from "../components/about/AboutSection.vue";
import FoodMenuSectionVue from "../components/food-menu/FoodMenuSection.vue";
import headerVue from "../components/header/header.vue";
import HeroSectionVue from "../components/hero/HeroSection.vue";
import PromoVue from "../components/Promo/Promo.vue";
</script>

<style scoped></style>

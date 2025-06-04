<template>
  <main>
    <HeroSectionOthersVue :title="'About Us'" />
    <!-- use here -->
    <Delivery></Delivery>
    <Testimonial></Testimonial>
  </main>
</template>

<script setup>
import headerVue from "../components/header/header.vue";
import HeroSectionOthersVue from "../components/hero/HeroSectionOthers.vue";
//
import Delivery from "../components/delivery/Delivery.vue";
import Testimonial from "../components/testimonial/Testimonial.vue";
</script>

<style lang="scss" scoped></style>

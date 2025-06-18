<template>
  <main>
    <HeroSectionOthersVue :title="'About Us'" />
    <WhoWeAreVue></WhoWeAreVue>
    <OurchefVue></OurchefVue>
    <!-- use here -->
    <Delivery></Delivery>
    <Testimonial></Testimonial>
  </main>
</template>

<script setup>
import headerVue from "../components/header/header.vue";
import HeroSectionOthersVue from "../components/hero/HeroSectionOthers.vue";
import WhoWeAreVue from "../components/whoWeAre/WhoWeAre.vue";
import OurchefVue from "../components/ourchef/Ourchef.vue";

//
import Delivery from "../components/delivery/Delivery.vue";
import Testimonial from "../components/testimonial/Testimonial.vue";
</script>

<style lang="scss" scoped></style>

<template>
  <div class="home container-fluid p-0">
    <main>
      <HeroSectionVue></HeroSectionVue>
      <PromoVue></PromoVue>
      <AboutSectionVue></AboutSectionVue>
      <FoodMenuSectionVue></FoodMenuSectionVue>
      <CtaVue></CtaVue>
      <Delivery></Delivery>
      <Testimonial></Testimonial>
      <Banner></Banner>
      <Blog></Blog>
    </main>
  </div>
</template>

<script setup>
import AboutSectionVue from "../components/about/AboutSection.vue";
import FoodMenuSectionVue from "../components/food-menu/FoodMenuSection.vue";
import HeroSectionVue from "../components/hero/HeroSectionHome.vue";
import PromoVue from "../components/Promo/Promo.vue";
import CtaVue from "../components/cta/Cta.vue";
import Delivery from "../components/delivery/Delivery.vue";
import Testimonial from "../components/testimonial/Testimonial.vue";
import Banner from "../components/banner/Banner.vue";
import Blog from "../components/blog/Blog.vue";
</script>

<style scoped></style>

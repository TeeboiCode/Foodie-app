<template>
  <section class="section section-divider white cta">
    <div class="container">
      <div class="cta-content">
        <h2 class="h2 section-title">
          The Foodie Have Excellent Of
          <span class="span">Quality Burgers!</span>
        </h2>

        <p class="section-text">
          The restaurants in Hangzhou also catered to many northern Chinese who
          had fled south from Kaifeng during the Jurchen invasion of the 1120s,
          while it is also known that many restaurants were run by families.
        </p>

        <button class="btn btn-hover">Order Now</button>
      </div>

      <figure class="cta-banner">
        <img
          :src="ctaImg1"
          width="700"
          height="637"
          loading="lazy"
          alt="Burger"
          class="w-100 cta-img"
        />

        <img
          :src="ctaImg2"
          width="216"
          height="226"
          loading="lazy"
          alt="get up to 50% off now"
          class="abs-img scale-up-anim"
        />
      </figure>
    </div>
  </section>
</template>

<script setup>
import ctaImg1 from "@/assets/images/cta-banner.png";
import ctaImg2 from "@/assets/images/sale-shape.png";
</script>

<style lang="scss" scoped>
.cta {
  background-image: url("@/assets/images/hero-bg.jpg");
}
.section-title {
  color: var(--champagne-pink) !important;
  max-width: 18ch !important;
}
.section-text {
  font-size: 16px;
  color: #fff !important;
  font-family: var(--ff-rubik) !important;
  font-weight: var(--fw-500) !important;
  font-size: 16px !important;
}
</style>

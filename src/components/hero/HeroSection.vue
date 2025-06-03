<template>
  <section class="hero" id="home">
    <div class="container">
      <div class="hero-content">
        <p class="hero-subtitle">Eat Sleep And</p>

        <h2 class="h1 hero-title">Supper delicious Burger in town!</h2>

        <p class="hero-text">
          Food is any substance consumed to provide nutritional support for an
          organism.
        </p>

        <button class="btn">Book A Table</button>
      </div>

      <figure class="hero-banner">
        <img
          :src="heroBg"
          width="820"
          height="716"
          alt=""
          aria-hidden="true"
          class="w-100 hero-img-bg"
        />

        <img
          :src="heroBgImg"
          width="700"
          height="637"
          loading="lazy"
          alt="Burger"
          class="w-100 hero-img"
        />
      </figure>
    </div>
  </section>
</template>

<script setup>
import heroBg from "@/assets/images/hero-banner-bg.png";
import heroBgImg from "@/assets/images/hero-banner.png";
</script>

<style lang="scss" scoped>
.hero {
  background-image: url("@/assets/images/hero-bg.jpg");
}

.hero-title {
  color: var(--champagne-pink) !important;
  max-width: 12ch !important;
  //   margin-inline: auto;
}
</style>

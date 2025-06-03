<template>
  <section class="section section-divider gray about" id="about">
    <div class="container">
      <div class="about-banner">
        <img
          :src="aboutImg1"
          width="509"
          height="459"
          loading="lazy"
          alt="Burger with Drinks"
          class="w-100 about-img"
        />

        <img
          :src="aboutImg2"
          width="216"
          height="226"
          alt="get up to 50% off now"
          class="abs-img scale-up-anim"
        />
      </div>

      <div class="about-content">
        <h2 class="h2 section-title">
          Caferio, Burgers, and Best Pizzas
          <span class="span">in Town!</span>
        </h2>

        <p class="section-text">
          The restaurants in Hangzhou also catered to many northern Chinese who
          had fled south from Kaifeng during the Jurchen invasion of the 1120s,
          while it is also known that many restaurants were run by families.
        </p>

        <ul class="about-list">
          <li class="about-item">
            <ion-icon name="checkmark-outline"></ion-icon>

            <span class="span">Delicious & Healthy Foods</span>
          </li>

          <li class="about-item">
            <ion-icon name="checkmark-outline"></ion-icon>

            <span class="span">Spacific Family And Kids Zone</span>
          </li>

          <li class="about-item">
            <ion-icon name="checkmark-outline"></ion-icon>

            <span class="span">Music & Other Facilities</span>
          </li>

          <li class="about-item">
            <ion-icon name="checkmark-outline"></ion-icon>

            <span class="span">Fastest Food Home Delivery</span>
          </li>
        </ul>

        <button class="btn btn-hover">Order Now</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import aboutImg1 from "@/assets/images/about-banner.png";
import aboutImg2 from "@/assets/images/sale-shape-red.png";
</script>

<style lang="scss" scoped>
.section-text {
  font-size: 16px !important;
  color: var(--sonic-silver);
  font-weight: 500;
}

.about-item .span {
  color: var(--rich-black-fogra-29) !important;
  font-family: var(--ff-rubik) !important;
  font-weight: var(--fw-500) !important;
  font-size: 16px !important;
}
</style>

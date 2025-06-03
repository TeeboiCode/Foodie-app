<template>
      <section class="section section-divider gray delivery">
          <div class="container">
            <div class="delivery-content">
              <h2 class="h2 section-title">
                A Moments Of Delivered On <span class="span">Right Time</span> &
                Place
              </h2>

              <p class="section-text">
                The restaurants in Hangzhou also catered to many northern
                Chinese who had fled south from Kaifeng during the Jurchen
                invasion of the 1120s, while it is also known that many
                restaurants were run by families.
              </p>

              <button class="btn btn-hover">Order Now</button>
            </div>

            <figure class="delivery-banner">
              <img
                :src="deliveryImg1"
                width="700"
                height="602"
                loading="lazy"
                alt="clouds"
                class="w-100"
              />

              <img
                :src="deliveryImg2"
                width="1000"
                height="880"
                loading="lazy"
                alt="delivery boy"
                class="w-100 delivery-img"
                data-delivery-boy
              />
            </figure>
          </div>
        </section>

</template>

<script setup>
    import deliveryImg1 from "@/assets/images/delivery-banner-bg.png"
    import deliveryImg2 from "@/assets/images/delivery-boy.svg"
</script>

<style lang="scss" scoped>

    .section-text{
        font-size: 16px;
    }
</style>
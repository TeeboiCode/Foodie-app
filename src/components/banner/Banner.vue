<template>
     
        <section class="section section-divider gray banner">
          <div class="container">
            <ul class="banner-list">
              <li class="banner-item banner-lg">
                <div class="banner-card">
                  <img
                    :src="bannImg1"
                    width="550"
                    height="450"
                    loading="lazy"
                    alt="Discount For Delicious Tasty Burgers!"
                    class="banner-img"
                  />

                  <div class="banner-item-content">
                    <p class="banner-subtitle">50% Off Now!</p>

                    <h3 class="banner-title">
                      Discount For Delicious Tasty Burgers!
                    </h3>

                    <p class="banner-text">Sale off 50% only this week</p>

                    <button class="btn">Order Now</button>
                  </div>
                </div>
              </li>

              <li class="banner-item banner-sm">
                <div class="banner-card">
                  <img
                    :src="bannImg2"
                    width="550"
                    height="465"
                    loading="lazy"
                    alt="Delicious Pizza"
                    class="banner-img"
                  />

                  <div class="banner-item-content">
                    <h3 class="banner-title">Delicious Pizza</h3>

                    <p class="banner-text">50% off Now</p>

                    <button class="btn">Order Now</button>
                  </div>
                </div>
              </li>

              <li class="banner-item banner-sm">
                <div class="banner-card">
                  <img
                    :src="bannImg3"
                    width="550"
                    height="465"
                    loading="lazy"
                    alt="American Burgers"
                    class="banner-img"
                  />

                  <div class="banner-item-content">
                    <h3 class="banner-title">American Burgers</h3>

                    <p class="banner-text">50% off Now</p>

                    <button class="btn">Order Now</button>
                  </div>
                </div>
              </li>

              <li class="banner-item banner-md">
                <div class="banner-card">
                  <img
                    :src="bannImg4"
                    width="550"
                    height="220"
                    loading="lazy"
                    alt="Tasty Buzzed Pizza"
                    class="banner-img"
                  />

                  <div class="banner-item-content">
                    <h3 class="banner-title">Tasty Buzzed Pizza</h3>

                    <p class="banner-text">Sale off 50% only this week</p>

                    <button class="btn">Order Now</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

</template>

<script setup>
    import bannImg1 from "@/assets/images/banner-1.jpg"
    import bannImg2 from "@/assets/images/banner-2.jpg"
    import bannImg3 from "@/assets/images/banner-3.jpg"
    import bannImg4 from "@/assets/images/banner-4.jpg"
</script>

<style lang="scss" scoped>

</style>

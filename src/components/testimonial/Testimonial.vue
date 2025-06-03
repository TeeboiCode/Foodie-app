<template>
     <section class="section section-divider white testi">
          <div class="container">
            <p class="section-subtitle">Testimonials</p>

            <h2 class="h2 section-title">
              Our Customers <span class="span">Reviews</span>
            </h2>

            <p class="section-text">
              Food is any substance consumed to provide nutritional support for
              an organism.
            </p>

            <ul class="testi-list has-scrollbar">
              <li class="testi-item">
                <div class="testi-card">
                  <div class="profile-wrapper">
                    <figure class="avatar">
                      <img
                        :src="tesImg1"
                        width="80"
                        height="80"
                        loading="lazy"
                        alt="Robert William"
                      />
                    </figure>

                    <div>
                      <h3 class="h4 testi-name">Robert William</h3>

                      <p class="testi-title">CEO Kingfisher</p>
                    </div>
                  </div>

                  <blockquote class="testi-text">
                    "I would be lost without restaurant. I would like to
                    personally thank you for your outstanding product."
                  </blockquote>

                  <div class="rating-wrapper">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
              </li>

              <li class="testi-item">
                <div class="testi-card">
                  <div class="profile-wrapper">
                    <figure class="avatar">
                      <img
                        :src="tesImg2"
                        width="80"
                        height="80"
                        loading="lazy"
                        alt="Thomas Josef"
                      />
                    </figure>

                    <div>
                      <h3 class="h4 testi-name">Thomas Josef</h3>

                      <p class="testi-title">CEO Getforce</p>
                    </div>
                  </div>

                  <blockquote class="testi-text">
                    "I would be lost without restaurant. I would like to
                    personally thank you for your outstanding product."
                  </blockquote>

                  <div class="rating-wrapper">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
              </li>

              <li class="testi-item">
                <div class="testi-card">
                  <div class="profile-wrapper">
                    <figure class="avatar">
                      <img
                        :src="tesImg3"
                        width="80"
                        height="80"
                        loading="lazy"
                        alt="Charles Richard"
                      />
                    </figure>

                    <div>
                      <h3 class="h4 testi-name">Charles Richard</h3>

                      <p class="testi-title">CEO Angela</p>
                    </div>
                  </div>

                  <blockquote class="testi-text">
                    "I would be lost without restaurant. I would like to
                    personally thank you for your outstanding product."
                  </blockquote>

                  <div class="rating-wrapper">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
</template>

<script setup>
  import tesImg1 from "@/assets/images/avatar-1.jpg"
  import tesImg2 from "@/assets/images/avatar-2.jpg"
  import tesImg3 from "@/assets/images/avatar-3.jpg"
</script>

<style lang="scss" scoped>
  .section-subtitle{
    font-size: 16px;
  }
</style>


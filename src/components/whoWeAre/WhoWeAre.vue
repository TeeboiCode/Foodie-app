<template>
  <section class="section section-divider">
    <div class="container">
      <div class="row g-4">
        <div class="col-12 col-md-3">
          <div class="card h-100 rounded rounded-4 border-0">
            <img
              src="@/assets/images/WWAImg1.jpg"
              class="card-img-top img-fluid "
              alt="Img1"
            />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="card card2 h-100 container shadow border-0" >
            <div class="card-body">
              <h5 class="card-sub-title">who are we</h5>
              <h1 class="h2 section-title">
                Best burger ideas & traditions from the whole world
              </h1>
              <p class="card-text">
                Back in 1993, three Kiwi guys including world-renowned chef
                Peter Moor set up the first Gloreya Burger Kitchen in Battersea,
                South London Burger Kitchen in
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-3">
          <div class="card h-100 rounded rounded-4 border-0">
            <img
              src="@/assets/images/WWAImg3.jpg"
              class="card-img-top img-fluid rounded"
              alt="img3"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.card {
  text-align: center;
}
.card-title {
  font-size: 50px;
  font-weight: 800;
}
.card-sub-title {
  font-size: 30px;
    font-style: italic;
  font-family: var(--ff-shadows-into-light) !important;
  color: var(--cinnabar) !important;
}
.card-text {
  max-width: 300ch !important;
  font-size: 18px;
}
.card2 {
  background-image: url("@/assets/images/WWAImg2.png");
  padding: var(--fs-1);
}
</style>

<template>
  <section class="section section-divider white">
    <div class="container">
      <p class="section-subtitle">TEAM</p>

      <h2 class="h2 section-title text-center">
        Masters of the <span class="span">Flame</span>
      </h2>

      <p class="section-text">
        A passionate team of chefs turning fire and flavor into unforgettable
        culinary experiences.
      </p>

      <ul class="chef-list">
        <li v-for="item in chefList" :key="item.id">
          <div class="chef-list-card">
            <div class="card-banner">
              <img
                :src="item.img"
                width="300"
                height="300"
                loading="lazy"
                :alt="item.img"
                class="w-100"
              />
              <h2 class="h2 chef-name">{{ item.name }}</h2>
              <p class="h4 chef-title">{{ item.title }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.section {
  text-align: center;
}
.section-subtitle {
  font-size: 16px;
}
</style>

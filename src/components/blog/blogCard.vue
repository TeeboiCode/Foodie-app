<template>
  <div class="blog-card">
    <div class="card-banner">
      <img
        :src="item.image"
        width="600"
        height="390"
        loading="lazy"
        :alt="item.alt"
        class="w-100"
      />

      <div class="badge">
        {{ item.category }}
      </div>
    </div>

    <div class="card-content">
      <div class="card-meta-wrapper">
        <a href="#" class="card-meta-link">
          <ion-icon name="calendar-outline"></ion-icon>

          <time class="meta-info" datetime="2022-01-01">
            {{ item.date }}
          </time>
        </a>

        <a href="#" class="card-meta-link">
          <ion-icon name="person-outline"></ion-icon>

          <p class="meta-info m-0">
            {{ item.author }}
          </p>
        </a>
      </div>

      <h3 class="h3">
        <a href="#" class="card-title">
          {{ item.title }}
        </a>
      </h3>

      <p class="card-text">
        {{ item.text }}
      </p>

      <a href="#" class="btn-link">
        <span>Read More</span>

        <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
      </a>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>

<template>
  <div class="promo-card">
    <div class="card-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        fill="none"
        xmlns:v="https://vecta.io/nano"
      >
        <g clip-path="url(#A)" fill="#ff9d2d" v-html="item.ghtml"></g>
        <defs>
          <clipPath id="A">
            <path fill="#fff" d="M0 0h60v60H0z" />
          </clipPath>
        </defs>
      </svg>
    </div>

    <h3 class="h3 card-title">{{ item.title }}</h3>

    <p class="card-text">
      {{ item.text }}
    </p>

    <img
      :src="item.img"
      width="300"
      height="300"
      loading="lazy"
      alt="Maxican Pizza"
      class="w-100 card-banner"
    />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>

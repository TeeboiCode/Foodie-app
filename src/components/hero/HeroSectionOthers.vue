<template>
  <section class="section-hero section-divider white" id="home">
    <div
      class="container h-100 d-flex align-items-center justify-content-center"
    >
      <div class="section-hero-content">
        <h2 class="section-hero-title">
          {{ title }}
        </h2>
      </div>
    </div>
  </section>
  >
</template>

<script setup>
const { title } = defineProps(["title"]);
</script>

<style lang="scss" scoped>
.section-hero {
  background-image: url("@/assets/images/hero-bg.jpg");
}
</style>

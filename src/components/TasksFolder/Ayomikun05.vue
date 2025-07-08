<template>
  <section class="map">
    <iframe
      src="https://www.google.com/maps?q=woodstock+GA&output=embed"
      allowfullscreen
      loading="lazy"
    >
    </iframe>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.map iframe {
  width: 400px;
  height: 400px;
  border: 0;
  display: block;
  margin-top: 30px;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
}
</style>

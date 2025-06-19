<!-- @format -->

<template>
  <div class="gallery-container">
    <!-- Main Image -->
    <img :src="selectedImage" alt="Main Burger" class="main-image" />

    <!-- Thumbnails -->
    <div class="thumbnails">
      <div
        v-for="(img, index) in thumbnails"
        :key="index"
        class="thumbnail-wrapper"
        @click="selectedImage = img">
        <img :src="img" class="thumbnail" />
        <div v-if="selectedImage !== img" class="overlay"></div>
      </div>
    </div>
  </div>
</template>g

<script>
export default {
  data() {
    return {
      thumbnails: [
        "src/assets/images/foodie 1.jpg",
        "src/assets/images/foodie 2.jpg",
        "src/assets/images/foodie 1.jpg",
        "src/assets/images/foodie 2.jpg",
      ],
      selectedImage: "src/assets/images/foodie 1.jpg",
    };
  },
};
</script>

<style scoped>
.gallery-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-left: -20cm;
}

.main-image {
  width: 500px;
  height: 500px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.thumbnails {
  display: flex;
  gap: 16px;
}

.thumbnail-wrapper {
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
}

.thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 8px;
  transition: opacity 0.3s ease;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  opacity: 0.5;
  border-radius: 8px;
}
</style>

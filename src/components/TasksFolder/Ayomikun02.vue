<template>
  <div>
    <section>
      <div class="card">
        <div class="card-header">
          <i class="fa-solid fa-diamond-turn-right"></i>
          <h2>Get Direction</h2>
        </div>

        <div class="card-word">
          85 Bay Meadows Drive Woodstock, <br />
          GA 30188, United States
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.card {
  align-items: center;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
}
.card h2 {
  text-align: center;
}
section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
}

i {
  color: #e7272d;
  text-align: center;
  font-size: 50px;
  margin-bottom: 30px;
}
.card-header {
  text-align: center;
}
.card-word {
  text-align: center;
  margin-top: 20px;
  color: #7a7a7a;
}
</style>

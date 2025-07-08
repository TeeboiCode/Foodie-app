<template>
  <div>
    <section>
      <div class="card">
        <h1>Contacts Us</h1>
        <div class="card-text">
          <i class="fa-solid fa-phone"> +1 123 - 456 - 789</i>
        </div>

        <div class="card-num">
          <p>Tel:+91 11 4050 0000</p>
          <p>Email: info@example.com</p>
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
.card h1 {
  margin-bottom: 10px;
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
  font-size: 20px;
}
.card-text p {
  text-align: center;
}
.card-num {
  text-align: center;
  margin-top: 20px;
  color: #7a7a7a;
}
</style>

<template>
  <section>
    <div class="hours-card">
      <h2>Opening Hours</h2>
      <div class="hour-row">
        <span>Monday - Friday</span>
        <span>9.00 - 20.00</span>
      </div>
      <hr />
      <div class="hour-row">
        <span>Saturday - Sunday</span>
        <span>8.00 - 22.00</span>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.hours-card {
  text-align: center;
  background: #fff;
  padding: 30px;
  width: 300px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
  font-family: "Segoe UI", sans-serif;
  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
}

.hours-card h2 {
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 25px;
  color: #222;
}

.hour-row {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  margin: 10px 0;
  color: #333;
}

hr {
  border: none;
  border-top: 1px dotted #ccc;
  margin: 10px 0;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
}

</style>

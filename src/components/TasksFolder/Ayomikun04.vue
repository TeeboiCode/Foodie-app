<template>
  <div>
    <section>
      <div class="form-container">
        <h2>Ask a question</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.form-container {
  max-width: 500px;
  margin: 40px auto;
  font-family: Arial, sans-serif;
}

.form-container h2 {
  font-size: 20px;
  margin-bottom: 20px;
  color: #111;
}

form {
  display: flex;
  flex-direction: column;
}

section{
  margin-top: 80x;
}

form input,
form textarea {
  padding: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 15px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s;
}

form button {
  background-color: #d72323;
  color: white;
  padding: 14px;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s ease;
  width: fit-content;
}

form button:hover {
  background-color: #a31616;
}
</style>

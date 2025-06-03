<template>
  <div>
    <header class="header" data-header>
      <div class="container">
        <h1>
          <a href="#" class="logo">Foodie<span class="span">.</span></a>
        </h1>

        <!-- navbar -->
        <NavbarVue></NavbarVue>

        <div class="header-btn-group">
          <button class="search-btn" aria-label="Search" data-search-btn>
            <ion-icon name="search-outline"></ion-icon>
          </button>

          <button class="btn btnS btn-hover">Reservation</button>

          <button
            class="nav-toggle-btn"
            aria-label="Toggle Menu"
            data-menu-toggle-btn
          >
            <span class="line top"></span>
            <span class="line middle"></span>
            <span class="line bottom"></span>
          </button>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import NavbarVue from "./Navbar.vue";
</script>

<style lang="scss" scoped>
.btn.btnS {
  border-radius: none !important;
  border: none !important;
}
</style>

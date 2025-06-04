<template>
  <nav class="navbar" data-navbar>
    <ul class="navbar-list">
      <li class="nav-item">
        <router-link to="/" class="navbar-link" data-nav-link>Home</router-link>
      </li>

      <li class="nav-item">
        <router-link to="/about" class="navbar-link" data-nav-link
          >About Us</router-link
        >
      </li>

      <li class="nav-item">
        <a href="#food-menu" class="navbar-link" data-nav-link>Shop</a>
      </li>

      <li class="nav-item">
        <a href="#blog" class="navbar-link" data-nav-link>Blog</a>
      </li>

      <li class="nav-item">
        <a href="#" class="navbar-link" data-nav-link>Contact Us</a>
      </li>
    </ul>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped></style>

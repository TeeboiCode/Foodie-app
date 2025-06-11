<template>
  <nav class="navbar" data-navbar>
    <ul class="navbar-list">
      <li class="nav-item">
        <router-link to="/" class="navbar-link" data-nav-link>Home</router-link>
      </li>

      <li class="nav-item dropdown">
        <a
          class="navbar-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Pages
        </a>
        <ul class="dropdown-menu border-0 rounded-0">
          <li>
            <router-link
              to="/about"
              class="dropdown-item border-bottom"
              data-nav-link
              >About Us</router-link
            >
          </li>

          <li>
            <a class="dropdown-item border-bottom" href="#">Another action</a>
          </li>

          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
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

<style lang="scss" scoped>
// .nav-item.dropdown:hover .dropdown-menu {
//   display: block;
//   margin-top: 0; // Optional: removes the slight gap
// }
</style>

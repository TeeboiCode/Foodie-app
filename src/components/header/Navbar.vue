<template>
  <nav class="navbar" data-navbar>
    <ul class="navbar-list">
      <li class="nav-item">
        <router-link to="/" class="navbar-link" data-nav-link>Home</router-link>
      </li>

      <!-- Pages -->
      <li class="nav-item dropdown">
        <a class="navbar-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Pages
        </a>
        <ul class="dropdown-menu border-0 rounded-0">
          <!-- About Us -->
          <li>
            <router-link to="/about" class="dropdown-item border-bottom" data-nav-link>About Us</router-link>
          </li>

          <!-- Team -->
          <li>
            <router-link to="/team" class="dropdown-item border-bottom" data-nav-link>Team</router-link>
          </li>

          <!-- Blog -->
          <li>
            <router-link to="/blog" class="dropdown-item border-bottom" data-nav-link>Blog</router-link>
          </li>

          <!-- Testimonial -->
          <li>
            <router-link to="/testimonial" class="dropdown-item border-bottom" data-nav-link>Testimonial</router-link>
          </li>

          <!-- Gallery -->
          <li>
            <router-link to="/gallery" class="dropdown-item border-bottom" data-nav-link>Gallery</router-link>
          </li>

          <!-- FAQ -->
          <li>
            <router-link to="/faq" class="dropdown-item border-bottom" data-nav-link>FAQ</router-link>
          </li>

          <!-- 404 -->
          <li>
            <router-link to="/404" class="dropdown-item border-bottom" data-nav-link>404</router-link>
          </li>


        </ul>
      </li>

      <!-- menu dropdown -->
      <li class="nav-item">
        <a href="/menu" class="navbar-link" data-nav-link>Menu</a>
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
// }</style>

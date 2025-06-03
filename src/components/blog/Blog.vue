<template>
  <section class="section section-divider white blog" id="blog">
    <div class="container">
      <p class="section-subtitle">Latest Blog Posts</p>

      <h2 class="h2 section-title">
        This Is All About <span class="span">Foods</span>
      </h2>

      <p class="section-text">
        Food is any substance consumed to provide nutritional support for an
        organism.
      </p>

      <ul class="blog-list">
        <li v-for="item in blogList" :key="item.id">
          <div class="blog-card">
            <div class="card-banner">
              <img
                :src="item.image"
                width="600"
                height="390"
                loading="lazy"
                :alt="item.alt"
                class="w-100"
              />

              <div class="badge">
                {{ item.category }}
              </div>
            </div>

            <div class="card-content">
              <div class="card-meta-wrapper">
                <a href="#" class="card-meta-link">
                  <ion-icon name="calendar-outline"></ion-icon>

                  <time class="meta-info" datetime="2022-01-01">
                    {{ item.date }}
                  </time>
                </a>

                <a href="#" class="card-meta-link">
                  <ion-icon name="person-outline"></ion-icon>

                  <p class="meta-info m-0">
                    {{ item.author }}
                  </p>
                </a>
              </div>

              <h3 class="h3">
                <a href="#" class="card-title">
                  {{ item.title }}
                </a>
              </h3>

              <p class="card-text">
                {{ item.text }}
              </p>

              <a href="#" class="btn-link">
                <span>Read More</span>

                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import blogImg1 from "@/assets/images/blog-1.jpg";
import blogImg2 from "@/assets/images/blog-2.jpg";
import blogImg3 from "@/assets/images/blog-3.jpg";

const blogList = [
  {
    id: 1,
    image: blogImg1,
    alt: "What Do You Think About Cheese Pizza Recipes?",
    category: "Pizza",
    date: "2022-01-01",
    formattedDate: "Jan 01 2022",
    author: "Jonathan Smith",
    title: "What Do You Think About Cheese Pizza Recipes?",
    text: "Financial experts support or help you to to find out which way you can raise your funds more...",
    link: "#",
  },
  {
    id: 2,
    image: blogImg2,
    alt: "Making Chicken Strips With New Delicious Ingridents.",
    category: "Burger",
    date: "2022-01-01",
    formattedDate: "Jan 01 2022",
    author: "Jonathan Smith",
    title: "Making Chicken Strips With New Delicious Ingridents.",
    text: "Financial experts support or help you to to find out which way you can raise your funds more...",
    link: "#",
  },
  {
    id: 3,
    image: blogImg3,
    alt: "Innovative Hot Chessyraw Pasta Make Creator Fact.",
    category: "Chicken",
    date: "2022-01-01",
    formattedDate: "Jan 01 2022",
    author: "Jonathan Smith",
    title: "Innovative Hot Chessyraw Pasta Make Creator Fact.",
    text: "Financial experts support or help you to to find out which way you can raise your funds more...",
    link: "#",
  },
];
</script>

<style lang="scss" scoped></style>

<template>
  <section class="section food-menu" id="food-menu">
    <div class="container">
      <p class="section-subtitle">Popular Dishes</p>

      <h2 class="h2 section-title">
        Our Delicious <span class="span">Foods</span>
      </h2>

      <p class="section-text">
        Food is any substance consumed to provide nutritional support for an
        organism.
      </p>

      <ul class="fiter-list">
        <li>
          <button class="filter-btn active">All</button>
        </li>

        <li>
          <button class="filter-btn">Pizza</button>
        </li>

        <li>
          <button class="filter-btn">Burger</button>
        </li>

        <li>
          <button class="filter-btn">Drinks</button>
        </li>

        <li>
          <button class="filter-btn">Sandwich</button>
        </li>
      </ul>

      <ul class="food-menu-list">
        <li v-for="item in foodMenu" :key="item.id">
          <div class="food-menu-card">
            <div class="card-banner">
              <img
                :src="item.img"
                width="300"
                height="300"
                loading="lazy"
                :alt="item.alt"
                class="w-100"
              />

              <div class="badge">{{ item.discount }}</div>

              <button class="btn food-menu-btn">Order Now</button>
            </div>

            <div class="wrapper">
              <p class="category">{{ item.category }}</p>

              <div class="rating-wrapper">
                <ion-icon name="star" v-for="i in 5" :key="i"></ion-icon>
              </div>
            </div>

            <h3 class="h3 card-title">{{ item.title }}</h3>

            <div class="price-wrapper">
              <p class="price-text">Price:</p>

              <data class="price" :value="item.price">
                {{ item.price }}
              </data>

              <del class="del" :value="item.oldPrice">
                {{ item.oldPrice }}
              </del>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import foodMenuImg1 from "@/assets/images/food-menu-1.png";
import foodMenuImg2 from "@/assets/images/food-menu-2.png";
import foodMenuImg3 from "@/assets/images/food-menu-3.png";
import foodMenuImg4 from "@/assets/images/food-menu-4.png";
import foodMenuImg5 from "@/assets/images/food-menu-5.png";
import foodMenuImg6 from "@/assets/images/food-menu-6.png";

const foodMenu = [
  {
    id: 1,
    img: foodMenuImg1,
    discount: "-15%",
    category: "Chicken",
    title: "Fried Chicken Unlimited",
    alt: "Fried Chicken Unlimited",
    price: "$59.00",
    oldPrice: "$69.00",
  },
  {
    id: 2,
    img: foodMenuImg2,
    discount: "-10%",
    category: "Noddles",
    title: "Burger King Whopper",
    alt: "Burger King Whopper",
    price: "$29.00",
    oldPrice: "$39.00",
  },
  {
    id: 3,
    img: foodMenuImg3,
    discount: "-25%",
    category: "Pizzas",
    title: "White Castle Pizzas",
    alt: "White Castle Pizzas",
    price: "$49.00",
    oldPrice: "$69.00",
  },
  {
    id: 4,
    img: foodMenuImg4,
    discount: "-20%",
    category: "Burrito",
    title: "Bell Burrito Supreme",
    alt: "Bell Burrito Supreme",
    price: "$59.00",
    oldPrice: "$69.00",
  },
  {
    id: 5,
    img: foodMenuImg5,
    discount: "-5%",
    category: "Nuggets",
    title: "Kung Pao Chicken BBQ",
    alt: "Kung Pao Chicken BBQ",
    price: "$49.00",
    oldPrice: "$69.00",
  },

  {
    id: 6,
    img: foodMenuImg6,
    discount: "-15%",
    category: "Chicken",
    title: "Wendy's Chicken",
    alt: "Wendy's Chicken",
    price: "$49.00",
    oldPrice: "$69.00",
  },
];
</script>

<style lang="scss" scoped>
.section-subtitle {
  font-size: 16px !important;
}

.section-text {
  color: var(--sonic-silver) !important;
  font-family: var(--ff-rubik) !important;
  font-weight: var(--fw-500) !important;
  font-size: 16px !important;
}

.price-wrapper {
  font-size: 16px !important;
}

.category {
  font-size: 16px !important;
  color: var(--sonic-silver) !important;
  font-weight: var(--fw-500) !important;
  font-family: var(--ff-rubik) !important;
  margin-block-end: 10px !important;
}
</style>

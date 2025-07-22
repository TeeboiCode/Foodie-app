<template>
    <!-- menu -->
    <div class="menu container-fluid p-0">

        <!-- title -->
        <HeroSectionOthersVue title="Menu" />
        <!-- section -->
        <section class="section section-divider promo">

            <!-- container -->
            <div class="container">

                <!-- promo-list -->
                <ul class="promo-list has-scrollbar">
                    <!--  -->
                    <!-- <li class="promo-item" v-for="item in promoList" :key="item.id">
                         <div class="promo-card">
                             <div class="card-icon">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none"
                                     xmlns:v="https://vecta.io/nano">
                                     <g clip-path="url(#A)" fill="#ff9d2d" v-html="item.ghtml"></g>
                                     <defs>
                                         <clipPath id="A">
                                             <path fill="#fff" d="M0 0h60v60H0z" />
                                         </clipPath>
                                     </defs>
                                 </svg>
                             </div>
 
                             <h3 class="h3 card-title">{{ item.title }}</h3>
 
                             <p class="card-text">
                                 {{ item.text }}
                             </p>
 
                             <img :src="item.img" width="300" height="300" loading="lazy" alt="Maxican Pizza"
                                 class="w-100 card-banner" />
                         </div>
                     </li> -->
                </ul>
            </div>
        </section>
    </div>
    <!-- <h1>Menu Page</h1> -->
    <!-- <ul>
    <li>Herosections</li>
    <li>Burger</li>
    <li>Banner</li>
    <li>Beverages</li>
    <li>Banner</li>
    <li>Pizzas</li>
    <li>Banners</li>
  </ul> -->
</template>

<script>
import HeroSectionOthersVue from '../components/hero/HeroSectionOthers.vue'
export default {
    name: 'Menu Page',
    components: {
        HeroSectionOthersVue,
    }
}
</script>

<style></style>
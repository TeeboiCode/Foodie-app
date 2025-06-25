<template>

  <div class="section">
    <!-- categories -->
    <h1>Product categories</h1>
    <!-- border line -->
    <div class="bod_line"></div>

<!-- product_list -->
    <div class="product_list">
      <p><a href="#">Barger</a></p>
      <li style="margin-left:10px ">--------------------------------</li>
      <p><a href="#">Food</a></p>
       <li style="margin-left:10px">--------------------------------</li>
      <p><a href="#">Pizza</a></p>
     <li style="margin-left:10px">--------------------------------</li>
      <p><a href="#">Recipe</a></p>
     <li style="margin-left:10px">--------------------------------</li>
      <p><a href="#">Uncategorized</a></p>
       </div>

       <!-- products -->
        <div class="product-h1">
         <h1 class="prod"> Products</h1>
           <div class="bod_line"></div>
        </div>

        <div class="product">
             <div>
           <div class="product">
            <!-- product image -->
            <div><img :src="gallery_image" alt="gallery" class="img1" /></div>
            <!--  product text-->
            <div class="product1">
              <p>Creamy Melt</p>
              <!-- Five star icons using Unicode -->
              <span style="color: gold; font-size: 23px;">
                ★★★★★
              </span>
              <p>£40.00</p>

            </div>
            </div>
        </div>
        </div>
         <li style="margin-left:10px;">----------------------------------------------</li>

         <!-- 2 -->
        <div class="product">
         <div>
         <div class="product">
            <!-- product image -->
            <div><img :src="gallery_img" alt="gallery" class="img1" /></div>
            <!--  product text-->
            <div class="product1">
              <p>Super Beekon</p>
              <!-- Five star icons using Unicode -->
              <span style="color: gold; font-size: 23px;">
                ★★★★★
              </span>
              <p>£40.00</p>
            </div>
            </div>
        </div>
        </div>
    <li style="margin-left:10px;">--------------------------------------------</li>
  <!-- </div> -->


        <!-- 3 -->
            <div class="product">
         <div>
         <div class="product">
            <!-- product image -->
            <div><img :src="gallery_img3" alt="gallery" class="img1" /></div>
            <!--  product text-->
            <div class="product1">
              <p>Beer Brewery</p>
              <!-- Five star icons using Unicode -->
              <span style="color: gold; font-size: 23px;">
                ★★★★★
              </span>
              <p>£40.00</p>
            </div>
            </div>
        </div>
        </div>
      <li style="margin-left:10px;">--------------------------------------------</li>

  </div>
  
     
       
    
</template>

<script setup>
import gallery_image from '../../assets/image/gallery_img.jpg';
import gallery_img from '../../assets/image/gallery_img2.jpg';
import gallery_img3 from '../../assets/image/gallery_image5.jpg';
</script>

<style lang="scss" scoped>
.section {
  height: 130vh !important;
  border: 2px solid black;
}
.bod_line{
  border: 1px solid red;
  width: 5%;
  margin-left: 10px;
}
.product_list p{
  font-family: sans-serif;
  font-size: 20px;
  margin: 3px 7px;


}
.product_list{
  color: gainsboro;
}
.product_list  p a{
  color:rgba(0, 0, 0, 0.615);
}
.product_list a{
  color: black;
}
.product-h1{
  font-family: sans-serif;
  font-size: 20px;
  margin:10px 7px;
  margin-top: 20px;

}
.img1{
border-radius: 10px;
margin-top: 10px;
margin-left: 10px;
  height: 17vh;
} 
.product1{
    margin-left: 10px;
    
}
  .product1 p{
      font-size:17px;
      margin-bottom: 1px;
      margin-top: 4px;
      color: #000;
  }
  .product{
    display: flex; 
    gap: 10px;
    align-items: center;
 
  }

</style>

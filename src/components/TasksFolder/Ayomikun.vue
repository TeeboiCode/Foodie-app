<template>
  <!-- first -->
   <section>

    <div class="card">

        <div class="first-img">
            <img src="/src/assets/images/bugger.jpg" alt="burger">
            <div class="text">
                <h1>Creamy Melt</h1>  
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <p>£40.00</p>
            </div>

        </div>
      </div>

    </section>
    <!-- first End -->

    <!-- second  Start-->
      <section>
      <div class="task">
        <div class="card-2">
          <img src="/src/assets/images/bugger with fries.jpg" alt="" />
        </div>

        <div class="sand-wish">
          <div class="para">
            <p>RECOMMENDED</p>
          </div>
          <div class="sandwish-text">
            <h2>Smoked Brisket Sandwish <sup>....... $39</sup></h2>
            <p>
              Pulled Pork, Beer Braised Brisket, & Quarter Rack of <br />
              Ribs served with your choice of side
            </p>
          </div>
        </div>
      </div>
    </section>



</template>

<script setup></script>

<style lang="scss" scoped>

  // first Css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.card{
    
    align-items: center;
    height: 400px;
    display: flex;
    justify-content: center;
    padding: 20px;
    height: 100vh;
}
  .first-img img {
    width: 300px;
    text-align: center;
    justify-self: center;
    border-radius: 10px;
      
  }
  .first-img {
    background-color:white;
    max-width: 400px;
    width: 100%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .text {
    text-align: center;
  }

  .text h1 {
   margin-top: 10px;
  }
    .text p {
    margin-top: 10px;
    font-size: 20px;
    
    }

  i {
    color: gold;
    margin-top: 10px;
  }
  // first Css End




  // second Css Start
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


.card-2 img {
   width: 100px; 
   border-radius: 10px;
}

section{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: white;
}

.task {
   
    display: flex;
    justify-content: center;
    padding: 20px;
    gap: 30px;
    


}
.sandwish-text {
    margin-top: 40px;
}

span {
    color: #CD201F;
    
}
.para {
    width: 150px;
    text-align: center;
    background-color: #CD201F;
    color: white;
    border-radius: 10px;


}


</style>

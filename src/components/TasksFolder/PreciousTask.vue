<template>
  <div class="cont">
    <div class="section">
      <!-- <h1>precious task</h1> -->
      <div class="content">
        <div class="you">
          <img src="/src/assets/images/0fa313a7b42b3603b50a4c5a4c8e9a64db5de004c971ffd1b60dbaece40a0920.png" alt="" />
          <div class="admin">
            <div class="icons">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div class="text">
              <h5>Admin <span>– October 22, 2019</span></h5>
              <p>
                Rack of Ribs served with your choice of side Pulled Pork, Beer Braised
                Brisket.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

    <form action="">
      <h1>Add a review</h1>
      <p>Your email address will not be published. Required fields are marked *</p>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control p-4" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput2" class="form-label">Name</label>
        <input type="text" class="form-control p-4" id="exampleFormControlInput2" placeholder="name">
      </div>
      <div>
        <p>Your rating *</p>
        <div class="iconss">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
      </div>
      <div class="form-check d-flex">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
        <label class="form-check-label" for="defaultCheck1">
          Save my name, email, and website in this browser for the next time I comment.
        </label>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Your reviews</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
      </div>
      <button class="btn btn-danger">submit</button>
    </form>
  </div>
  <div>
    <div class="text2">
      <h3>Description</h3>
      <h3>Additional information</h3>
      <h3>Reviews (1)</h3>
    </div>

    <div class="text3">
      <h2>Description</h2>
      <p>Pulled Pork, Beer Braised Brisket, & Quarter Rack of Ribs served with your choice of side Pulled Pork,
        Beer
        Braised Brisket, & Quarter Rack of Ribs served with your choice of side Pulled Pork, Beer Braised Brisket,
        &
        Quarter Rack of Ribs served with your choice of side</p>

    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.text2 {
  display: flex;
  gap: 50px;
  padding-top: 20px;
  border-bottom: 1px solid #ddd;
  padding: 20px;
  /* text-decoration: underline; */
}

.text3 h2 {
  padding: 20px;
}

.text3 p {
  font-size: 15px;
  justify-content: center;
  padding: 20px;
  padding-bottom: 50px;
}

form {
  background-color: #F0F0F0;
  max-width: 1100px;
  border-radius: 10px;
  padding: 30px;
  font-size: 18px;
  align-items: center;
  margin: auto;
}

.iconss {
  color: red;
  width: 250px;
}

.iconss :hover {
  color: red;
}



.you {
  display: flex;
  gap: 1cm;

}


.content {
  margin: auto;
  border-radius: 10px;
  background-color: #F0F0F0;
  width: 90%;
  padding: 30px;
  align-items: center;

  margin-bottom: 70px;

}

.section {

  /* border: 2px solid black; */
  display: flex;
  padding: 30px;
}

.cont {}

.admin {
  /* margin-left: 40px; */
  /* padding-top: 200px; */

}

img {
  width: 70px;
  height: 70px;
  align-items: center;
}

.icons {
  color: yellow;
  padding: 10px;
  font-size: 12px;
}

.text h5 {
  display: flex;
  padding: 10px;
}

.text p {
  font-size: 17px;
}
</style>

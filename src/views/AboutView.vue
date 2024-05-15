<script setup>


</script>

<template>
  <div class="Hero row d-flex flex-column justify-content-center ">
    <h1 class="col-12 d-flex glassmorph text-white text-center flex-column justify-content-end flex-grow-1 mb-0 pb-5">
      About Us
    </h1>
  </div>

  <div class="row">
    <div class="col-12 px-0 text-center">
      <h2>Meet the owners</h2>
    </div>
  </div>

  <article class="row g-2 ">

    <div class="col-12 my-0">
      <h4 class="text-center">Rebecca Peppersack</h4>
      <p class="text-center">Owner/You dog's bff while you vacay</p>
    </div>

    <i class="col-12 d-flex justify-content-center">
      <i class="separationMargin border-bottom border-2 border-primary w-100 align-items-center"> </i>
    </i>

    <div class="col-12 d-flex col-lg-6 ">
      <div class="profile-image border border-primary border-4 rounded flex-grow-1 align-content-end">
        <h4 class="bg-primary text-white py-4 text-center mb-0">Professional Dog Lady</h4>

      </div>
    </div>

    <div class="col-12 d-flex col-lg-6 px-0 px-lg-4">
      <div class="flex-grow-1 bg-white border border-primary border-4 rounded">
        <h5 class="bg-primary text-white py-2 px-3">20+ years experience in the veterinary industry.</h5>
        <p class="px-3 py-3 ">
          Rebecca's passion for animals runs deep. As a lifelong dog lover and owner, she understands the importance of
          providing a safe, comfortable, and nurturing environment for our canine companions. With a background in the
          veterinary industry (managing a veterinary hospital in Boise) and a commitment to excellence, Rebecca ensures
          that
          every dog who walks through our doors receives the same level of love and attention they would at home.
        </p>
      </div>
    </div>

    <div class="col-12 d-flex justify-content-center">
      <ContactUs />
    </div>

  </article>


</template>

<style scoped lang="scss">
article {
  margin: 2rem 0rem;

  >div {
    margin: 2rem 0rem;
  }
}

.Hero {
  background-image: url("../assets/img/CoupleDog.jpg");
  background-color: var(--bs-primary);
  background-position: 50% 38%;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 20rem;
}

.profile-image {
  background-image: url("../assets/img/RebeccaDog.JPG");
  background-position: 35% center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--bs-secondary);
  min-height: 512px;
}

.separationMargin {
  margin: 1.5rem 0 1.5rem 0;
}
</style>

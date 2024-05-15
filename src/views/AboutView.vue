<script setup>


</script>

<template>
  <div class="Hero row d-flex flex-column justify-content-center ">
    <h1 class="col-12 d-flex glassmorph text-white text-center flex-column justify-content-center flex-grow-1 mb-0">
      About Us
    </h1>
  </div>

  <div class="row">
    <div class="col-12 px-0 text-center">
      <h2>Meet the owner</h2>
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

.profile-image {
  background-image: url(https://images.unsplash.com/photo-1557495235-340eb888a9fb?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-position: 35% center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--bs-secondary);
  min-height: 512px;
}

.separationMargin {
  margin: 1.5rem 0 1.5rem 0;
}

.Hero {
  background-image: url(https://images.unsplash.com/photo-1642513730712-2ccba1dbef1e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-position: 0% 20%;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 10rem;
}
</style>

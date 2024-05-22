<script setup>
import PhotoCarousel from "@/components/PhotoCarousel.vue";
import ContactUs from "@/components/ContactUs.vue";

</script>

<template>
  <div class="Hero row d-flex flex-column justify-content-center shadow">
    <div class="col-12 d-flex text-white text-center flex-column justify-content-center flex-grow-1">
    </div>
  </div>

  <div class="row">
    <div class="col-12 px-0">
      <h2 class="text-center shadow">
        Love and play with every stay
      </h2>
    </div>
  </div>

  <article class="row position-relative">

    <div class="col-12">
      <h3 class="text-center">Top-quality dog boarding in Nampa!</h3>
      <p class="fs-5 text-center">Beyond exceptional care, we also strive to create a welcoming and
        super cool
        environment
        for both dogs and
        their
        humans. <br> We believe in building relationships with our clients based on trust, transparency, and genuine
        compassion
        for animals. </p>
    </div>

    <div class="col-12 d-flex justify-content-center">

      <RouterLink to="/Boarding" class="btn btn-standard fw-bold px-3 py-1 rounded-4 selectable text-uppercase">
        Learn about Boarding
      </RouterLink>
      <!-- <div class="row mb-3">
        <div class="col-6 px-1 d-flex justify-content-end align-items-center">
        </div>
        <div class="col-6 px-1">
        </div>
      </div> -->

      <!-- <Notification /> -->

    </div>

    <div class="col-12">
      <PhotoCarousel />
    </div>

    <div class="col-12 ">
      <div class="row">

        <div class="col-6 d-flex justify-content-end">
          <ContactUs />

        </div>

        <div class="col-6">
          <RouterLink to="/About" class="btn btn-standard me-2 fw-bold px-3 py-1 rounded-4 selectable text-uppercase">
            About Us
          </RouterLink>

        </div>
      </div>
    </div>

    <!-- Need to stress test these, will likely break uniformity -->
    <!-- <div class="row px-0 my-0 g-3 highlight-row">

      <div class="col-6 col-md-4 highlight">
        <div>
          <h3 class=" ">Eat</h3>
          <h4>Scheduled feeding times</h4>
          <p>Individual feeding respecting dietary needs</p>
        </div>
      </div>

      <div class="col-6 col-md-4  highlight">
        <div>
          <h3 class="">Play</h3>
          <h4>Group play & Solo play</h4>
          <p>Personalized attention, and plenty of playtime in our secure,
            supervised indoor and outdoor areas. </p>
        </div>
      </div>

      <div class="col-6 col-md-4 mx-auto highlight">
        <div>
          <h3 class=" ">Sleep</h3>
          <h4>Individual Suites</h4>
          <p>Our luxury suites offer a cozy retreat for your beloved companion, complete with heated floors in the
            chilly
            months and air conditioning in the summer.
          </p>
        </div>
      </div>

    </div> -->

  </article>
</template>





<style lang="scss" scoped>
article {
  margin: 2rem 0rem;

  >div {
    margin: 2rem 0rem;
  }
}

.Hero {
  background-image: url("../assets/img/Logo.PNG");
  background-color: var(--bs-primary);
  background-color: white;
  background-position: 50% 60%;
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 20rem;
}

.highlight-row {
  margin: 1rem 0rem;
}

.highlight {
  margin: 0;

  >div {
    min-height: 256px;
    border-radius: 6px 6px 6px 6px;
    display: flex;
    flex-direction: column;
    // box-shadow: 2px 2px 6px rgb(120, 129, 142);


    >h3 {
      background-color: var(--bs-secondary);
      color: var(--bs-light);
      font-size: large;
      font-weight: bold;
      text-align: center;
      margin-bottom: 0;
      padding: 1rem 0rem .25rem 0rem;
      border-radius: 6px 6px 0 0;

    }

    >h4 {
      background-color: var(--bs-secondary);
      color: var(--bs-light);
      font-size: x-small;
      text-align: center;
      margin: 0;
      padding: 0rem 0rem 1rem 0rem;

    }

    >p {
      flex-grow: 1;
      color: var(--bs-secondary);
      margin: 0;
      padding: .5rem 1rem 1rem 1rem;
      font-size: smaller;

      background-color: white;
    }
  }


}

.dismiss:hover {
  cursor: pointer;
  color: var(--bs-secondary);
}
</style>
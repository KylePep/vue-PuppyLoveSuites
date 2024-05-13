<template>
  <div class="Hero row d-flex flex-column justify-content-center">
    <div class="col-12 d-flex glassmorph text-white text-center flex-column justify-content-center flex-grow-1">
      <h1 class="">Puppy Love Suites</h1>

      <p class="">Love and Play with Every Stay</p>
    </div>
  </div>

  <div class="row">
    <div class="col-12 px-0">
      <h2 class="text-center">
        Top-quality dog boarding in Nampa!
      </h2>
    </div>
  </div>

  <article class="row position-relative">

    <div class="col-12">
      <p class="fs-5 text-center">Beyond exceptional care, we also strive to create a welcoming and
        super cool
        environment
        for both dogs and
        their
        humans. <br> We believe in building relationships with our clients based on trust, transparency, and genuine
        compassion
        for animals. </p>
    </div>

    <div class="col-12">
      <div class="row mb-3">
        <div class="col-6 px-0 d-flex justify-content-end align-items-center">
          <RouterLink to="/About"
            class="btn text-white fw-bold bg-primary px-3 py-1 rounded-4 selectable text-uppercase">
            About Us
          </RouterLink>
        </div>
        <div class="col-6 px-0">
          <RouterLink to="/Boarding" class="btn text-primary selectable text-start text-uppercase">
            Learn about Boarding
          </RouterLink>
        </div>
      </div>

      <!-- <Notification /> -->

    </div>

    <div class="col-12">
      <!-- <PhotoCarousel /> -->
    </div>


    <div class="col-12 d-flex justify-content-center">
      <!-- <ContactUs /> -->
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


<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped></style>
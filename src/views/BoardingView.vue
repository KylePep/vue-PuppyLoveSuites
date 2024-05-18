<script setup>
import BoardingCarousel from "../components/BoardingCarousel.vue";
import BoardingItem from "../components/BoardingItem.vue";
import BoardingModal from "../components/BoardingModal.vue"
import ContactUs from "@/components/ContactUs.vue";

</script>

<template>
  <div class="Hero row d-flex flex-column justify-content-center shadow">
    <h1 class="col-12 d-flex glassmorph text-white text-center flex-column justify-content-end flex-grow-1 mb-0 pb-5">
      Boarding
    </h1>
  </div>
  <div class="row">
    <div class="col-12 px-0 text-center">
      <h2 class="shadow">Sweet Suites!</h2>
    </div>
  </div>

  <article class="row my-3 g-3">

    <div class="col-12">
      <ul> TODO list
        <li>Suites Section is poop, Needs to be celebrated</li>
      </ul>
    </div>

    <div class="col-12">
      <h3 class="text-center bg-secondary text-light px-2 py-4 rounded">
        In order to book your dogs boarding please call <br>
        (208) 353-5939
      </h3>
    </div>

    <div class="col-12">
      <h3 class="fw-bold">Dog Boarding</h3>

      Treat your furry friend to a luxurious getaway at Puppy Love Suites. Our spacious and comfortable suites provide
      the perfect home away from home for dogs of all shapes and sizes. // Heated and cooled suites.
    </div>

    <i class="col-12 d-flex justify-content-center">
      <i class="separationMargin border-bottom border-2 border-primary w-100 align-items-center"> </i>
    </i>

    <div class="col-12">
      <div class="row g-2">
        <h3 class="col-12 col-sm-6 fw-bold">BOARDING RATES</h3>
        <div class="d-none d-sm-flex col-12 col-sm-6 d-flex justify-content-start justify-content-sm-end">
          <ContactUs />
        </div>


        <div class="col-12 order-2 order-lg-1 col-lg-6 d-flex flex-column">
          <div class="row flex-grow-1">
            <div class="col-12 pb-2">
              <BoardingItem size="lg" id="0">
                <template #icon>
                  <i class="mdi mdi-paw"></i>
                </template>
                <template #heading>Single Dog</template>

                $40 per night
              </BoardingItem>
            </div>
            <div class="col-12 ">
              <BoardingItem size="lg" id="1">
                <template #icon>
                  <i class="mdi mdi-paw"></i>
                  <i class="mdi mdi-plus-thick"></i>
                </template>
                <template #heading>Additional Dog <br> * Same Suite</template>

                $33 per dog, per night
              </BoardingItem>
            </div>

          </div>

        </div>

        <div class="col-12 d-flex order-1 order-lg-2 col-lg-6 ">
          <div class="boarding-image border border-primary border-4 rounded flex-grow-1">
            <h4 class="bg-primary text-white py-4 text-center">Your Dogs Vacation Starts Here!</h4>

          </div>
        </div>

      </div>

      <div class="row">
        <div class="col-12">
          <h4 class="fw-bold py-1 px-2 bg-white text-secondary my-1 rounded border border-4 border-primary">
            ADDONS
            &
            FEES
          </h4>
        </div>
      </div>
      <div class="row g-2">

        <div class="col-6 col-sm-4">
          <BoardingItem size="sm" id="2">
            <template #icon>
              <i class="mdi mdi-calendar-week-begin"></i>
            </template>
            <template #heading>Outside of Hours Pickup</template>

            $50
          </BoardingItem>
        </div>

        <div class="col-6 col-sm-4">
          <BoardingItem size="sm" id="3">
            <template #icon>
              <i class="mdi mdi-medication"></i>
            </template>
            <template #heading>Medication administration</template>

            $3 per day
          </BoardingItem>
        </div>

        <div class="col-12 col-sm-4">
          <BoardingItem size="sm" id="4">
            <template #icon>
              <i class="mdi mdi-bone"></i>
            </template>
            <template #heading>Puppy Love Food</template>

            $5 per day
          </BoardingItem>
        </div>
      </div>

    </div>

    <div class="d-flex d-sm-none col-12 col-sm-6 d-flex justify-content-center justify-content-sm-end">
      <ContactUs />
    </div>



    <i class="col-12 d-flex justify-content-center">
      <i class="separationMargin border-bottom border-2 border-primary w-100 align-items-center"> </i>
    </i>

    <div class="col-12">
      <div class="row">
        <h3 class="col-12 fw-bold">
          SUITES
        </h3>
      </div>
      <div class="col-12">
        <BoardingCarousel />
      </div>

      <div class="col-12 mt-3">
        <p>Heated</p>
        <p>Cooled</p>
        <p>Private</p>
        <p>Bed provided</p>
      </div>

    </div>

    <i class="col-12 d-flex justify-content-center">
      <i class="separationMargin border-bottom border-2 border-primary w-100 align-items-center"> </i>
    </i>

    <div class="col-12">
      <h4>FAQ</h4>
      <div class="row">

        <div class="col-12">
          <h5>What about the poop?</h5>
          <p>It gets cleaned up.</p>
        </div>

        <div class="col-12">
          <h5>What about cats?</h5>
          <p>What about cats.</p>
        </div>

        <div class="col-12">
          <h5>Do you have a good banana bread recipe?</h5>
          <p>I do but I won't tell you.</p>
        </div>

      </div>
    </div>

  </article>

  <BoardingModal />

</template>





<style lang="scss" scoped>
article {
  margin: 2rem 0rem;

  >div {
    margin: 2rem 0rem;
  }
}

.Hero {
  background-image: url(https://images.unsplash.com/photo-1518640165980-d3e0e2aa6c1e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-color: var(--bs-primary);
  background-position: 0% 80%;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 20rem;
}

.boarding-image {
  background-image: url(https://images.unsplash.com/photo-1565674244283-993fb27a215f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--bs-secondary);
  min-height: 512px;
}

.separationMargin {
  margin: 1.5rem 0 1.5rem 0;
}
</style>
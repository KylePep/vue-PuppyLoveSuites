<script setup>
import PhotoCarousel from "@/components/PhotoCarousel.vue";
import BoardingItem from "../components/BoardingItem.vue";
import BoardingModal from "../components/BoardingModal.vue"
import { useHead } from '@vueuse/head'


useHead({
  title: "Boarding - Puppy Love Suites",
  meta: [
    {
      name: 'Boarding Information, Puppy Love Suites'
    }
  ]
})
</script>

<template>

  <ContactModal />

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


    <div class="col-12 text-center">
      <h3 class="">Dog Boarding</h3>
      <p class="mb-0 fs-5">
        Welcome to the Boarding Information page of Puppy Love Suites, where we provide top-tier dog boarding services
        in climate-controlled facilities year-round. Our commitment to your pet's comfort and safety ensures a
        worry-free experience while you're away.
      </p>
    </div>

    <div class="col-12">
      <h3 class="text-center bg-secondary text-light px-2 py-4 rounded">
        Book your dog's boarding! <br> Call:
        (208) 353-5939
      </h3>
    </div>

    <i class="col-12 d-flex justify-content-center">
      <i class="separationMargin border-bottom border-2 border-primary w-100 align-items-center"> </i>
    </i>

    <div class="col-12">
      <div class="row g-2">
        <h3 class="col-12 col-sm-6 fw-bold">BOARDING RATES</h3>
        <div
          class="d-none d-sm-flex col-12 col-sm-6 d-flex justify-content-start justify-content-sm-end align-items-baseline">
          <button type="button" class="btn btn-standard rounded-4 fw-bold selectable" data-bs-toggle="modal"
            data-bs-target="#contactModal">
            CONTACT INFO
          </button>
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
          <h4 class="fw-bold py-1 px-2 bg-primary text-white my-1 rounded border border-4 border-primary">
            ADDONS
            &
            FEES
          </h4>
        </div>
      </div>
      <div class="row g-2">

        <div class="col-6 col-md-4">
          <BoardingItem size="sm" id="2">
            <template #icon>
              <i class="mdi mdi-calendar-week-begin"></i>
            </template>
            <template #heading>Outside of Hours Pickup</template>

            $50
          </BoardingItem>
        </div>

        <div class="col-6 col-md-4">
          <BoardingItem size="sm" id="3">
            <template #icon>
              <i class="mdi mdi-medication"></i>
            </template>
            <template #heading>Medication administration</template>

            $3 per day
          </BoardingItem>
        </div>

        <div class="col-12 col-md-4">
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
      <button type="button" class="btn btn-standard rounded-4 fw-bold selectable" data-bs-toggle="modal"
        data-bs-target="#contactModal">
        CONTACT INFO
      </button>
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
        <PhotoCarousel />
      </div>

      <div class="col-12 mt-3">
        <h4>
          Each Suite includes:
        </h4>
        <ul class="fs-5">
          <li>climate controlled year-round</li>
          <li>patio door with enclosed blinds</li>
          <li>anti-microbial flooring</li>
          <li>stainless steel food and water bowls</li>
          <li>bedding</li>
        </ul>
      </div>

    </div>

    <i class="col-12 d-flex justify-content-center">
      <i class="separationMargin border-bottom border-2 border-primary w-100 align-items-center"> </i>
    </i>

    <div class="col-12">
      <h3>FAQ</h3>
      <div class="row">
        <!-- 
        <div class="col-12">
          <h4>What about the poop?</h4>
          <p>It gets cleaned up.</p>
        </div>

        <div class="col-12">
          <h4>What about cats?</h4>
          <p>What about cats.</p>
        </div> -->

        <div class="col-12">
          <h4>Do you have an FAQ section?</h4>
          <p>I do but it's being worked on still.</p>
        </div>

        <div class="col-12">
          <h4>Do you have a good banana bread recipe?</h4>
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
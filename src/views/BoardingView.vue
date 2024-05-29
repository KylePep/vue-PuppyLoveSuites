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
        Boarding services in climate-controlled (including heated floors in the winter months) facilities year-round.
      </p>
    </div>

    <div class="col-12">
      <a href="tel:2083535939">
        <h3 class="text-center bg-secondary text-light px-2 py-4 rounded">
          Book your dog's boarding! <br> Call:
          (208) 353-5939
        </h3>
      </a>
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
            ADD-ONS
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

        <div class="col-12 mt-3">
          <h4>
            What is required:
          </h4>
          <h5>The required vaccinations are</h5>
          <ul class="fs-5">
            <li>Rabies vaccine</li>
            <li>Distemper/Parvo combination vaccine</li>
            <li>Bordetella (kennel cough) vaccine</li>
          </ul>
          <h5>Other recommendations (not required)</h5>
          <ul class="fs-5">
            <li>Influenza vaccine(s)</li>
            <li>Lepto vaccine</li>
            <li>Flea and tick prevention </li>
          </ul>
        </div>

        <div class="col-12 mt-3">
          <h4>
            What to bring:
          </h4>
          <ul class="fs-5">
            <li>Food</li>
            <li>Bedding (as long as your dog will not ingest it during their stay) </li>
            <li>Toys</li>
            <li>Their favorite treats</li>
          </ul>
        </div>

        <div class="col-12 mt-3">
          <p class="">
            We love to spoil your dog while they are here so be sure to let us know what their favorite toy or game is
            and
            we'll make sure they have a great time while you are away.
          </p>
        </div>

        <div class="col-12">
          <PhotoCarousel />
        </div>
      </div>




    </div>

    <i class="col-12 d-flex justify-content-center">
      <i class="separationMargin border-bottom border-2 border-primary w-100 align-items-center"> </i>
    </i>

    <div class="col-12">
      <h3 class="bg-primary py-1 px-2 rounded text-white">FAQ</h3>
      <div class="row">

        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h4 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne">
                How often does my dog get let out?
              </button>
            </h4>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
              <div class="accordion-body">
                3-5 times daily your dog will get let out into the large grass yard. Breakfast and dinner with a midday
                let
                out
                along with a couple more times or for longer stints while we play with them or let them hang out while
                we do
                chores around the suites
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h4 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo">
                How many of my dogs can stay together?
              </button>
            </h4>
            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
              <div class="accordion-body">
                The regular suites hold 3 medium-large (not giant) breeds comfortably. Our newest and larger suites can
                hold
                multiple giant breed dogs and up to 5 large dogs. Remember- they need to get along well. If they fight
                at
                home,
                they need separate suites here.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h4 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree">
                When would my dog not get a chance to exercise in the large yard?
              </button>
            </h4>
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
              <div class="accordion-body">
                If your dog is very aggressive to people or doesn't come when called or offered a treat, then they will
                likely
                need to stay in their suite for their stay. This doesn't happen often because almost every dog loves me
                and
                my
                husband but when it has happened, we keep their suite very clean and they have more room in their suite
                than
                in
                most boarding facilities as well.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h4 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFour">
                Do I need to bring my own dog bowls?
              </button>
            </h4>
            <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
              <div class="accordion-body">
                Nope! We have stainless steel food and water bowls that can be easily cleaned and sanitized and stacked
                in
                a
                way so we can get everyone's breakfast out at once in the morning. The only exception would be if your
                dog
                needs
                a slow feeder bowl or an elevated dish.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h4 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFive">
                Do you know the perfect way to get hard boiled eggs to peel?
              </button>
            </h4>
            <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse">
              <div class="accordion-body">
                Yes, and if you have made it this far into the website/FAQs ask me about it and I'll tell you.
              </div>
            </div>
          </div>
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
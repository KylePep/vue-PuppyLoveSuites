<script setup>
import ContactUs from "@/components/ContactUs.vue";
// metaInfo(){
//   return {
//     title: `About`,
//     meta: [
//       {
//         name: 'description',
//         content: 'About the owners of Puppy Love Suites.'
//       }
//     ]
//   }
// }


</script>

<template>
  <div class="Hero row d-flex flex-column justify-content-center shadow">
    <h1 class="col-12 d-flex glassmorph text-white text-center flex-column justify-content-end flex-grow-1 mb-0 pb-5">
      About Us
    </h1>
  </div>

  <div class="row">
    <div class="col-12 px-0 text-center">
      <h2 class="shadow">Meet the owners</h2>
    </div>
  </div>

  <article class="row g-2 ">

    <div class="col-12 my-0">
      <h3 class="text-center">Rebecca Peppersack</h3>
      <p class="text-center fs-5">Owner/Your dog's bff while you vacay</p>
    </div>

    <i class="col-12 d-flex justify-content-center">
      <i class="separationMargin border-bottom border-2 border-primary w-100 align-items-center"> </i>
    </i>

    <div class="col-12 d-flex col-lg-6 ">
      <div class="profile-image-rebecca border border-primary border-4 rounded flex-grow-1 align-content-end"
        title="Owner Profile Picture - Rebecca">
        <h4 class="bg-primary text-white py-4 text-center mb-0">Your dog's bff!</h4>

      </div>
    </div>

    <div class="col-12 d-flex col-lg-6 px-0 px-lg-4">
      <div class="flex-grow-1 bg-white border border-primary border-4 rounded">
        <h5 class="bg-primary text-white py-2 px-3">20+ years experience in the veterinary industry.</h5>
        <p class="px-3 py-3 fs-5">
          Rebecca's passion for animals runs deep. As a lifelong dog lover and owner, she understands the importance of
          providing a safe, comfortable, and nurturing environment for our canine companions. With a background in the
          veterinary industry (managing a veterinary hospital in Boise) and a commitment to excellence, Rebecca ensures
          that
          every dog who walks through our doors receives the same level of love and attention they would at home.
        </p>
      </div>
    </div>

    <div class="col-12 mb-0 mt-5">
      <h3 class="text-center">Ryan Peppersack</h3>
      <p class="text-center fs-5">{{ '(co?)-' }} Owner/Vice dog bff</p>
    </div>

    <i class="col-12 d-flex justify-content-center">
      <i class="separationMargin border-bottom border-2 border-primary w-100 align-items-center"> </i>
    </i>

    <div class="col-12 d-flex col-lg-6 order-0 order-lg-1">
      <div class="profile-image-ryan border border-primary border-4 rounded flex-grow-1 align-content-end"
        title="Owner Profile Picture - Ryan">
        <h4 class="bg-primary text-white py-4 text-center mb-0">Ryan {{ "(Is not actually a hat.)" }}</h4>

      </div>
    </div>

    <div class="col-12 d-flex col-lg-6 px-0 px-lg-4 order-1 order-lg-0">
      <div class="flex-grow-1 bg-white border border-primary border-4 rounded">
        <h5 class="bg-primary text-white py-2 px-3">Avid outdoorsmen and life long dog owner.</h5>
        <p class="px-3 py-3 fs-5">
          Short about Ryan, Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad possimus quasi vero?
          Modi atque ea beatae, libero, illo voluptas deserunt impedit voluptatibus odit, tempora repudiandae cum
          consectetur architecto ipsa.
        </p>
      </div>
    </div>

    <div class="col-12 d-flex justify-content-center order-2">
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

.profile-image-rebecca {
  background-image: url("../assets/img/RebeccaDog.JPG");
  background-position: 35% center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--bs-secondary);
  min-height: 512px;
}

.profile-image-ryan {
  background-image: url("https://images.unsplash.com/photo-1511500118080-275313ec90a1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
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

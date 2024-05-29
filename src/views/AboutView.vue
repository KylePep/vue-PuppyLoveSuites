<script setup>
import ContactUs from "@/components/ContactUs.vue";
import { useHead } from '@vueuse/head'


useHead({
  title: "About - Puppy Love Suites",
  meta: [
    {
      name: 'About the owners, Puppy Love Suites'
    }
  ]
})
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
      <h3 class="text-center">Rebecca & Ryan Peppersack</h3>
      <p class="text-center fs-5">Owners and operators of Puppy Love Suites</p>
    </div>

    <i class="col-12 d-flex justify-content-center">
      <i class="separationMargin border-bottom border-2 border-primary w-100 align-items-center"> </i>
    </i>

    <div class="order-1 order-lg-0 col-12 d-flex col-lg-6 ps-lg-4">
      <div class="profile-image-rebecca border border-primary border-4 rounded flex-grow-1 align-content-end"
        title="Owners Rebecca and Ryan Peppersack">
        <h4 class="bg-primary text-white py-4 text-center mb-0">Rebecca, Ryan, Ava and Crixus</h4>

      </div>
    </div>

    <div class="order-0 order-lg-1 col-12 d-flex col-lg-6 px-1 px-lg-4">
      <div class="flex-grow-1 bg-white border border-primary border-4 rounded">
        <h5 class="bg-primary text-white py-2 px-3">Our Commitment</h5>
        <div class="px-3 py-3 fs-6">
          <!-- <p class="fw-semibold">
            Our Story
          </p>
          <p>
            Since our marriage in [Year], we have shared a profound love for animals, with a special affinity for
            dogs. In 2024, we became the new owners of Puppy Love Suites, driven by our passion for providing
            exceptional care and our aspiration to work from home. Our dedication to the well-being of dogs is the
            cornerstone of our business.
          </p> -->
          <!-- <p class="fw-semibold">
            Our Mission
          </p>
          <p>
            At Puppy Love Suites, we are dedicated to continuously enhancing our standards and improving our facilities.
            Our unwavering commitment to excellence ensures that every dog in our care receives the highest quality of
            attention and service. We strive to create a safe, nurturing, and enjoyable environment for all our furry
            guests
          </p> -->
          <p class="fw-semibold">
            Our dedication to the well-being of dogs is the
            cornerstone of our business.
          </p>
          <div>
            <p>
              At Puppy Love Suites, we are committed to delivering unparalleled care and exceptional service for every
              dog
              entrusted to us.
              We are dedicated to maintaining the highest standards in animal care, ensuring a safe,
              clean, and comfortable environment.
            </p>
            <!-- <p>
            </p> -->
            <p>
              We continuously seek to improve our practices and facilities, driven by
              our passion for excellence and our love for dogs.
              Our goal is to provide a home away from home where every
              pet feels loved, secure, and happy.
            </p>
            <!-- <p>
            </p> -->
          </div>
        </div>
      </div>
    </div>

    <div class="order-2 col-12 d-flex col-lg-12 px-1 px-lg-4">
      <div class="flex-grow-1 bg-white border border-primary border-4 rounded">
        <h5 class="bg-primary text-white py-2 px-3">Rebecca Peppersack, Your dogs bff!</h5>
        <div class="px-3 py-3 fs-6">
          <p class="fw-semibold">20+ years experience in the veterinary industry.</p>
          <p>
            Rebecca's passion for animals runs deep. As a lifelong dog lover and owner, she understands the importance
            of
            providing a safe, comfortable, and nurturing environment for our canine companions. With a background in the
            veterinary industry (managing a veterinary hospital in Boise) and a commitment to excellence, Rebecca
            ensures
            that
            every dog who walks through our doors receives the same level of love and attention they would at home.
          </p>
        </div>
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
  background-image: url("https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-color: var(--bs-primary);
  background-position: 50% 60%;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 20rem;
}

.profile-image-rebecca {
  background-image: url("../assets/img/CoupleDog.jpg");
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

<script setup>
import HoursTable from "../components/HoursTable.vue";


</script>

<template>

  <div class="row Hero shadow">
    <div class=" d-flex flex-column justify-content-end text-light text-center pb-5">
      <h1 class="mb-0">Contact Us!</h1>
    </div>
  </div>


  <div class="row">
    <div class="col-12 px-0 text-center">
      <h2 class="shadow">We want to hear from you!</h2>
    </div>
  </div>

  <article class="row text-center g-3 my-3">

    <div class="col-12">
      <h3>Puppy Love Suites Contact Information</h3>
      <p class="mb-0 fs-5">
        Whether you have questions about our services, want to schedule a tour of our
        facilities, or just want to say hello, we're here to help. Get in touch with us using the contact information
        below:
      </p>
    </div>


    <!-- <div class="col-12">
      <h3 class="text-center bg-secondary text-light px-2 py-4 rounded">
        In order to book your dogs boarding please call: <br>
        (208) 353-5939
      </h3>
    </div> -->

    <div class="col-12 d-flex justify-content-center">
      <i class="separationMargin border-bottom border-2 border-primary w-100 align-items-center"> </i>
    </div>

    <div class="col-12">
      <div class="row">
        <h3 class="col-12 mdi mdi-phone fw-semibold text-secondary"> Phone:
        </h3>
        <a href="tel:2083535939" class="col-12 col-md-6 mx-auto btn btn-standard fs-5 fw-semibold px-2 py-1 selectable">
          (208) 353-5939</a>
      </div>
    </div>

    <div class="col-12 d-flex justify-content-center">
      <i class="separationMargin border-bottom border-2 border-primary w-100 align-items-center"> </i>
    </div>


    <div class="col-12">
      <div class="row">
        <h3 class="col-12 mdi mdi-email fw-semibold text-secondary"> Email:
        </h3>
        <a href="mailto:puppylovesuites@gmail.com"
          class="col-12 col-md-6 mx-auto fs-5 btn btn-standard fw-semibold px-3 py-1 selectable">
          puppylovesuites@gmail.com</a>
      </div>
    </div>

    <div class="col-12 d-flex justify-content-center">
      <i class="separationMargin border-bottom border-2 border-primary w-100 align-items-center"> </i>
    </div>

    <h3 class="col-12 mdi mdi-web fw-bold text-secondary"> Connect with us:</h3>

    <div class="row mx-0 g-2">

      <a href="https://www.instagram.com/puppy_love_suites?igsh=MTByb2h0czZ3a3YyYQ=="
        class="col-12 col-md-5 mx-auto fs-5 btn btn-standard fw-semibold px-1 py-1 selectable">
        <i class="mdi mdi-instagram "></i> puppy_love_suites
      </a>

      <a href="https://www.facebook.com/profile.php?id=61557001554395"
        class="col-12 col-md-5 mx-auto fs-5 btn btn-standard fw-semibold px-1 py-1 selectable">
        <i class=" mdi mdi-facebook"></i> Puppy Love Suites
      </a>

    </div>


    <div class="col-12 d-flex justify-content-center">
      <i class="separationMargin border-bottom border-2 border-primary w-100 align-items-center"> </i>
    </div>

    <div class="col-12">
      <h3 class="mdi mdi-calendar-month fw-bold text-secondary"> Schedule a Visit:</h3>
      <p class="mb-3">
        Ready to see Puppy Love Suites for yourself? We'd love to give you a tour of our facilities. Contact us today to
        schedule your visit and experience the Puppy Love Suites difference
        firsthand. <br> Thank you for considering Puppy Love Suites for your furry friend's care.
      </p>
      <i class="mdi mdi-paw fs-3 btn btn-standard rounded-5 px-2 py-1"></i>
    </div>
    <!-- <p class="fs-5 fw-semibold btn text-white bg-primary px-3 py-1 rounded-4 selectable">//Call to schedule</p> -->

    <div class="col-12 d-flex justify-content-center">
      <i class="separationMargin border-bottom border-2 border-primary w-100 align-items-center"> </i>
    </div>

    <div class="col-12 d-flex flex-column">
      <h3 class="mdi mdi-clock fw-semibold text-secondary"> Hours: </h3>

      <HoursTable />

    </div>

    <div class="col-12 d-flex justify-content-center">
      <i class="separationMargin border-bottom border-2 border-primary w-100 align-items-center"> </i>
    </div>

    <div class="col-12">
      <h3 class="mdi mdi-home-variant fw-semibold text-secondary"> Address:
      </h3>
      <iframe class="border border-2 border-primary rounded"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.605939266819!2d-116.59967929999998!3d43.51055549999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ae49b3d5ccf939%3A0x7870a107ef3ae032!2sPuppy%20Love%20Suites!5e0!3m2!1sen!2sus!4v1714639389907!5m2!1sen!2sus"
        width="100%" height="225" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <p class="d-block d-sm-none fs-5 fw-semibold">10330 Lake Shore Dr, Nampa,
        ID
        83686</p>
      <a href="https://maps.app.goo.gl/3fF7Fq8c6oAueQsu5"
        class="d-flex justify-content-center btn btn-standard px-3 py-1 selectable fs-5 mt-2">
        <p class="d-block d-sm-none mb-0 py-1">Google Maps</p>
        <p class="d-none d-sm-block mb-0 py-1">
          10330 Lake Shore Dr, Nampa,
          ID
          83686
        </p>
      </a>
    </div>

  </article>
</template>




<style lang="scss" scoped>
article>div {
  margin-bottom: 1rem;
}

.Hero {
  background-image: url(https://images.unsplash.com/photo-1586095088311-dc72701cc9cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-color: var(--bs-primary);
  background-position: 95%;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 20rem;
}

.separationMargin {
  margin: 1.5rem 0 1.5rem 0;
}
</style>
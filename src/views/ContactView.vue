<script setup>
import HoursTable from "../components/HoursTable.vue";
import { useHead } from '@vueuse/head'


useHead({
  title: "Contact - Puppy Love Suites",
  meta: [
    {
      name: 'Contact Information, Puppy Love Suites'
    }
  ]
})

</script>

<template>

  <div class="Hero row d-flex flex-column justify-content-center shadow">
    <h1
      class="col-12 d-flex title-backdrop text-white text-center flex-column justify-content-end flex-grow-1 mb-0 pb-5">
      Contact Us!</h1>
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
        Whether you're ready to book your dogs boarding, want to schedule a tour of our
        facilities, or have questions about our services, we're here to help. Get in touch with us using the contact
        information
        below.
      </p>
    </div>


    <!-- <div class="col-12">
      <h3 class="text-center bg-secondary text-light px-2 py-4 rounded">
        In order to book your dogs boarding please call: <br>
        (208) 353-5939
      </h3>
    </div> -->
    <!-- 
    <div class="col-12 d-flex justify-content-center">
      <i class="separationMargin border-bottom border-2 border-primary w-100 align-items-center"> </i>
    </div> -->

    <div class="col-12">
      <div class="row">
        <h3 class="mdi mdi-calendar-month fw-bold text-light bg-secondary px-3 py-2 rounded"> Schedule Boarding:</h3>
        <p class="mb-0">
          If you are ready to schedule your boarding please give us a call
        </p>
        <div class="col-12 mt-4">
          <div class="row">
            <h4 class="col-12 mdi mdi-phone fw-semibold text-secondary"> Phone:
            </h4>
            <a href="tel:2083535939"
              class="col-12 col-md-6 mx-auto btn btn-standard fs-5 fw-semibold px-2 py-1 selectable">
              (208) 353-5939</a>
          </div>
        </div>
        <div class="col-12 fs-3">or</div>
        <div class="col-12 p-0">
          <RouterLink to="/Boarding"
            class="col-12 col-md-6 mx-auto btn btn-standard selectable text-start text-uppercase text-center px-3 ">
            Learn about Boarding
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- <div class="col-12 d-flex justify-content-center">
      <i class="separationMargin border-bottom border-2 border-primary w-100 align-items-center"> </i>
    </div> -->


    <div class="col-12 d-flex justify-content-center">
      <i class="separationMargin border-bottom border-2 border-primary w-100 align-items-center"> </i>
    </div>


    <div class="col-12">
      <div class="row">
        <h4 class="col-12 mdi mdi-email fw-semibold text-secondary"> Email:
        </h4>
        <a href="mailto:puppylovesuites@gmail.com"
          class="col-12 col-md-6 mx-auto fs-5 btn btn-standard fw-semibold px-3 py-1 selectable">
          puppylovesuites@gmail.com</a>
      </div>
    </div>

    <div class="col-12 d-flex justify-content-center">
      <i class="separationMargin border-bottom border-2 border-primary w-100 align-items-center"> </i>
    </div>

    <h4 class="col-12 mdi mdi-web fw-bold text-secondary"> Connect with us:</h4>

    <div class="row mx-0 g-2">

      <a href="https://www.instagram.com/puppy_love_suites?igsh=MTByb2h0czZ3a3YyYQ==" target="_blank"
        class="col-12 col-md-5 mx-auto fs-5 btn btn-standard fw-semibold px-1 py-1 selectable">
        <i class="mdi mdi-instagram "></i> puppy_love_suites
      </a>

      <a href="https://www.facebook.com/profile.php?id=61557001554395" target="_blank"
        class="col-12 col-md-5 mx-auto fs-5 btn btn-standard fw-semibold px-1 py-1 selectable">
        <i class=" mdi mdi-facebook"></i> Puppy Love Suites
      </a>

    </div>


    <div class="col-12 d-flex justify-content-center">
      <i class="separationMargin border-bottom border-2 border-primary w-100 align-items-center"> </i>
    </div>

    <div class="col-12 d-flex flex-column">
      <h4 class="mdi mdi-clock fw-semibold text-secondary"> Hours: </h4>

      <HoursTable />

    </div>

    <div class="col-12 d-flex justify-content-center">
      <i class="separationMargin border-bottom border-2 border-primary w-100 align-items-center"> </i>
    </div>

    <div class="col-12">
      <h4 class="mdi mdi-home-variant fw-semibold text-secondary"> Address:
      </h4>
      <iframe class="border border-2 border-primary rounded"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.605939266819!2d-116.59967929999998!3d43.51055549999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ae49b3d5ccf939%3A0x7870a107ef3ae032!2sPuppy%20Love%20Suites!5e0!3m2!1sen!2sus!4v1714639389907!5m2!1sen!2sus"
        width="100%" height="225" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <p class="d-block d-sm-none fs-5 fw-semibold">10330 Lake Shore Dr, Nampa,
        ID
        83686</p>
      <a href="https://maps.app.goo.gl/3fF7Fq8c6oAueQsu5" target="_blank"
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